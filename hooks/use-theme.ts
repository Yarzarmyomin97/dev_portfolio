"use client";

import { useState, useEffect, useCallback } from "react";
import { ThemePalette, ThemePreference } from "@/lib/types";
import { themes, defaultTheme } from "@/lib/themes";

const STORAGE_KEY = "portfolio-theme";

// Gradient mesh colors per palette
const gradientColors: Record<string, { light: string[]; dark: string[] }> = {
  aurora: {
    light: ["#C084FC", "#818CF8", "#67E8F9", "#F9A8D4"],
    dark: ["#4C1D95", "#5B21B6", "#0E7490", "#9D174D"],
  },
  sunset: {
    light: ["#FDBA74", "#FCA5A5", "#FDE68A", "#F9A8D4"],
    dark: ["#7C2D12", "#991B1B", "#92400E", "#831843"],
  },
  ocean: {
    light: ["#7DD3FC", "#6EE7B7", "#A5F3FC", "#99F6E4"],
    dark: ["#0C4A6E", "#064E3B", "#164E63", "#134E4A"],
  },
};

// Always return the same default on server AND initial client render
function getDefaultPreference(): ThemePreference {
  return { mode: "light", palette: defaultTheme.slug };
}

function getStoredPreference(): ThemePreference | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as ThemePreference;
    }
  } catch {
    // Ignore parse errors
  }

  // No stored preference — detect system dark mode
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    mode: prefersDark ? "dark" : "light",
    palette: defaultTheme.slug,
  };
}

function applyThemeToDocument(
  mode: "light" | "dark",
  palette: ThemePalette
) {
  if (typeof document === "undefined") return;
  const colors = mode === "dark" ? palette.dark : palette.light;
  const root = document.documentElement;

  root.setAttribute("data-theme", mode);
  root.style.setProperty("--color-primary", colors.primary);
  root.style.setProperty("--color-secondary", colors.secondary);
  root.style.setProperty("--color-accent", colors.accent);
  root.style.setProperty("--color-background", colors.background);
  root.style.setProperty("--color-surface", colors.surface);
  root.style.setProperty("--color-text", colors.text);
  root.style.setProperty("--color-border", colors.border);

  // Apply gradient mesh colors
  const gradients = gradientColors[palette.slug] ?? gradientColors.aurora;
  const gColors = mode === "dark" ? gradients.dark : gradients.light;
  root.style.setProperty("--gradient-1", gColors[0]);
  root.style.setProperty("--gradient-2", gColors[1]);
  root.style.setProperty("--gradient-3", gColors[2]);
  root.style.setProperty("--gradient-4", gColors[3]);

  // Update glass properties for dark mode
  if (mode === "dark") {
    root.style.setProperty("--glass-bg", "rgba(15, 20, 40, 0.6)");
    root.style.setProperty("--glass-border", "rgba(255, 255, 255, 0.1)");
    root.style.setProperty("--glass-shadow", "0 8px 32px rgba(0, 0, 0, 0.3)");
  } else {
    root.style.setProperty("--glass-bg", "rgba(255, 255, 255, 0.6)");
    root.style.setProperty("--glass-border", "rgba(255, 255, 255, 0.5)");
    root.style.setProperty("--glass-shadow", "0 8px 32px rgba(0, 0, 0, 0.06)");
  }
}

export function useTheme() {
  // Start with the same default on both server and client
  const [preference, setPreference] = useState<ThemePreference>(
    getDefaultPreference
  );
  const [hydrated, setHydrated] = useState(false);

  const palette =
    themes.find((t) => t.slug === preference.palette) ?? defaultTheme;

  // After hydration, read the real preference from localStorage / system
  useEffect(() => {
    const stored = getStoredPreference();
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- legitimate hydration sync
      setPreference(stored);
    }
    setHydrated(true);
  }, []);

  // Apply theme to DOM and persist to localStorage
  useEffect(() => {
    if (!hydrated) return;
    applyThemeToDocument(preference.mode, palette);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preference));
    } catch {
      // Ignore storage errors
    }
  }, [preference, palette, hydrated]);

  const setMode = useCallback((mode: "light" | "dark") => {
    setPreference((prev) => ({ ...prev, mode }));
  }, []);

  const setPalette = useCallback((slug: string) => {
    setPreference((prev) => ({ ...prev, palette: slug }));
  }, []);

  const toggleMode = useCallback(() => {
    setMode(preference.mode === "light" ? "dark" : "light");
  }, [preference.mode, setMode]);

  return {
    mode: preference.mode,
    palette,
    mounted: hydrated,
    setMode,
    setPalette,
    toggleMode,
  };
}
