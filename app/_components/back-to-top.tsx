"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const { isPastThreshold } = useScrollPosition(SCROLL_THRESHOLD);
  const [isNearFooter, setIsNearFooter] = useState(false);

  // Observe the footer so the FAB hides when the user scrolls near the bottom
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNearFooter(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px 80px 0px",
        threshold: 0,
      },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const visible = isPastThreshold && !isNearFooter;

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`
        fixed bottom-6 right-4 z-40 flex h-11 w-11 cursor-pointer items-center
        justify-center rounded-full shadow-lg transition-all duration-300
        focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]
        focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12
        ${visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
      style={{
        background: "var(--color-primary)",
        color: "#fff",
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
