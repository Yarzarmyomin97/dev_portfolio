"use client";

import { useThemeContext } from "./theme-provider";
import { themes } from "@/lib/themes";

export function ThemeSelector() {
  const { palette, setPalette, mounted } = useThemeContext();

  if (!mounted) {
    return <div className="h-8" />;
  }

  return (
    <div className="flex items-center gap-2">
      {themes.map((theme) => {
        const colors = theme.light;
        const isActive = palette.slug === theme.slug;

        return (
          <button
            key={theme.slug}
            onClick={() => setPalette(theme.slug)}
            aria-label={`Select ${theme.name} theme`}
            className="relative flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-110"
            title={theme.name}
          >
            <span
              className="h-6 w-6 rounded-full border-2"
              style={{
                backgroundColor: colors.primary,
                borderColor: isActive ? "var(--color-text)" : "transparent",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
