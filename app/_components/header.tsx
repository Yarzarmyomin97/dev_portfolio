"use client";

import { useMemo } from "react";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "./theme-toggle";
import { ThemeSelector } from "./theme-selector";
import { profile } from "@/lib/data/profile";
import type { SectionInfo } from "@/lib/types";

interface HeaderProps {
  sections: SectionInfo[];
}

export function Header({ sections }: HeaderProps) {
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);
  const activeSection = useActiveSection(sectionIds);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "var(--glass-bg)",
        backdropFilter: "blur(24px) saturate(1.8)",
        WebkitBackdropFilter: "blur(24px) saturate(1.8)",
        borderBottom: "1px solid var(--glass-border)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="gradient-text cursor-pointer text-base font-bold transition-opacity duration-200 hover:opacity-80 sm:text-lg"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {profile.name}
        </a>

        {/* Navigation links */}
        <nav
          className="flex items-center gap-1 overflow-x-auto"
          aria-label="Section navigation"
        >
          {sections
            .filter((s) => s.id !== "hero")
            .map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`cursor-pointer whitespace-nowrap rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200 sm:px-3 sm:text-sm ${
                    isActive
                      ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
                      : "opacity-70 hover:opacity-100 hover:bg-[var(--color-surface)]"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
        </nav>

        {/* Theme controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex">
            <ThemeSelector />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
