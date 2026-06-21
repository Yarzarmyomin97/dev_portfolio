"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useTheme } from "@/hooks/use-theme";
import type { ThemePalette } from "@/lib/types";

interface ThemeContextValue {
  mode: "light" | "dark";
  palette: ThemePalette;
  mounted: boolean;
  setMode: (mode: "light" | "dark") => void;
  setPalette: (slug: string) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return ctx;
}
