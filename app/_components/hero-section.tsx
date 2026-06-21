import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
}

export function HeroSection({
  name,
  title,
  tagline,
  ctaText,
  ctaHref,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div className="flex max-w-3xl flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <p
            className="text-sm font-medium uppercase tracking-widest opacity-70"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </p>
          <h1
            className="gradient-text text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {name}
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-relaxed opacity-80 sm:text-xl">
          {tagline}
        </p>
        <a
          href={ctaHref}
          className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full px-8 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-[var(--color-primary)]/25 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
          style={{
            background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`,
          }}
        >
          {ctaText}
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
