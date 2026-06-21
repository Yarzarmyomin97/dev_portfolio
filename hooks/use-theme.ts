"use client";

import { useState, useEffect, useCallback } from "react";
import { ThemePalette, ThemePreference } from "@/lib/types";
import { themes, defaultTheme } from "@/lib/themes";

const STORAGE_KEY = "portfolio-theme";

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

  root.setAttribute("data-theme", `${palette.slug}-${mode}`);
  root.style.setProperty("--color-primary", colors.primary);
  root.style.setProperty("--color-secondary", colors.secondary);
  root.style.setProperty("--color-accent", colors.accent);
  root.style.setProperty("--color-background", colors.background);
  root.style.setProperty("--color-surface", colors.surface);
  root.style.setProperty("--color-text", colors.text);
  root.style.setProperty("--color-border", colors.border);
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
