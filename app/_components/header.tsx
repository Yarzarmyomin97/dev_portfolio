"use client";

import { useMemo } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
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
  const { isOpen, close, toggle, menuRef, buttonRef } = useMobileMenu();

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    close();
  };

  const filteredSections = useMemo(
    () => sections.filter((s) => s.id !== "hero"),
    [sections],
  );

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

        {/* Desktop Navigation links — hidden on mobile */}
        <nav
          className="hidden sm:flex sm:items-center sm:gap-1"
          aria-label="Section navigation"
        >
          {filteredSections.map((section) => {
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

        {/* Theme controls + Hamburger button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex">
            <ThemeSelector />
          </div>
          <ThemeToggle />
          {/* Mobile hamburger button */}
          <button
            ref={buttonRef}
            onClick={toggle}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex sm:hidden h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-200 hover:bg-[var(--color-border)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <div
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-modal={isOpen}
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "var(--glass-bg)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          borderBottom: isOpen ? "1px solid var(--glass-border)" : "none",
        }}
      >
        <nav
          className="flex flex-col gap-1 px-4 pb-4 pt-2"
          aria-label="Mobile section navigation"
        >
          {filteredSections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                aria-current={isActive ? "true" : undefined}
                className={`cursor-pointer rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)]"
                    : "opacity-70 hover:opacity-100 hover:bg-[var(--color-surface)]"
                }`}
              >
                {section.label}
              </button>
            );
          })}
          {/* Mobile-only theme selector */}
          <div className="mt-2 border-t border-[var(--color-border)] pt-3">
            <p className="mb-2 px-1 text-xs font-medium opacity-50">
              Theme
            </p>
            <ThemeSelector />
          </div>
        </nav>
      </div>
    </header>
  );
}
