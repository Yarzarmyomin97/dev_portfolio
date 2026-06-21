"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "./theme-provider";

export function ThemeToggle() {
  const { mode, toggleMode, mounted } = useThemeContext();

  if (!mounted) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
        <Moon size={16} className="opacity-60" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleMode}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200 hover:bg-[var(--color-border)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
    >
      {mode === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
