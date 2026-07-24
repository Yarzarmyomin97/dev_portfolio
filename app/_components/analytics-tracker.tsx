"use client";

import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";
import { useReportWebVitals } from "next/web-vitals";
import { useVisibilityTracking } from "@/hooks/use-visibility-tracking";

/** Sections to track for visibility analytics — must match IDs in page.tsx */
const TRACKED_SECTIONS = [
  "hero",
  "projects",
  "experience",
  "about",
  "contact",
];

/**
 * Client component that wires up Vercel Analytics, Web Vitals reporting,
 * and custom visibility/scroll-depth tracking.
 *
 * Rendered as a child of the root layout so it runs on every page.
 * All tracking is async, passive, and respects the Do Not Track header.
 */
export function AnalyticsTracker() {
  // Section visibility + scroll depth tracking
  useVisibilityTracking(TRACKED_SECTIONS);

  // Web Vitals tracking (LCP, CLS, INP, etc.)
  useReportWebVitals((metric) => {
    track("web_vital", {
      name: metric.name,
      value: String(Math.round(metric.value)),
      rating: metric.rating ?? "needs-improvement",
    });
  });

  return <Analytics />;
}
