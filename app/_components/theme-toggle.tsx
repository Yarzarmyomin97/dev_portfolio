"use client";

import { useThemeContext } from "./theme-provider";

export function ThemeToggle() {
  const { mode, toggleMode, mounted } = useThemeContext();

  // Render consistent placeholder until hydrated
  if (!mounted) {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
        <span className="text-sm">🌙</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggleMode}
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-sm transition-colors hover:bg-[var(--color-border)]"
    >
      {mode === "light" ? "🌙" : "☀️"}
    </button>
  );
}
