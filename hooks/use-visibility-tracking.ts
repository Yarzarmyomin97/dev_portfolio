"use client";

import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics";

const SCROLL_DEPTH_MILESTONES = [25, 50, 75, 100] as const;

/**
 * Tracks section visibility via IntersectionObserver and scroll depth
 * milestones. Fires Vercel Analytics custom events — each event fires at
 * most once per page load.
 *
 * Events tracked:
 *  - `section_visible` — when a section enters the viewport
 *  - `scroll_depth` — when the user passes 25%, 50%, 75%, or 100% of page height
 */
export function useVisibilityTracking(sectionIds: string[]) {
  // Guard: never fire duplicate milestones
  const firedMilestones = useRef(new Set<number>());
  const firedSections = useRef(new Set<string>());

  useEffect(() => {
    // Respect Do Not Track
    if (navigator.doNotTrack === "1") return;

    // --- Scroll depth tracking (passive listener) ---
    const docEl = document.documentElement;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight = docEl.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const percent = Math.round((scrollTop / totalHeight) * 100);

      for (const milestone of SCROLL_DEPTH_MILESTONES) {
        if (percent >= milestone && !firedMilestones.current.has(milestone)) {
          firedMilestones.current.add(milestone);
          track("scroll_depth", { depth: String(milestone) });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    // --- Section visibility tracking (IntersectionObserver) ---
    const visibilityObservers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !firedSections.current.has(id)) {
              firedSections.current.add(id);
              track("section_visible", { section: id });
            }
          }
        },
        { threshold: 0.3 } // 30% of the section must be visible
      );

      observer.observe(el);
      visibilityObservers.push(observer);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      for (const observer of visibilityObservers) {
        observer.disconnect();
      }
    };
  }, [sectionIds]);
}
