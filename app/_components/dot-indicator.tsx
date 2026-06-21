"use client";

import { useMemo } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "./theme-toggle";
import { ThemeSelector } from "./theme-selector";
import type { SectionInfo } from "@/lib/types";

interface DotIndicatorProps {
  sections: SectionInfo[];
}

export function DotIndicator({ sections }: DotIndicatorProps) {
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);
  const activeSection = useActiveSection(sectionIds);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 sm:flex"
    >
      {/* Section dots */}
      <div className="glass flex flex-col items-center gap-3 rounded-full p-2 shadow-lg">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            aria-label={`Go to ${section.label}`}
            aria-current={activeSection === section.id ? "true" : undefined}
            className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
              activeSection === section.id
                ? "scale-125 bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]"
                : "bg-[var(--color-border)] hover:bg-[var(--color-primary)] hover:opacity-60"
            }`}
          />
        ))}
      </div>

      {/* Theme controls */}
      <div className="glass flex flex-col items-center gap-2 rounded-full p-2 shadow-lg">
        <ThemeToggle />
        <div className="h-px w-4 bg-[var(--color-border)]" />
        <ThemeSelector />
      </div>
    </nav>
  );
}
