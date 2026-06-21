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
          <p className="text-sm font-medium uppercase tracking-widest opacity-70">
            {title}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {name}
          </h1>
        </div>
        <p className="max-w-xl text-lg leading-relaxed opacity-80 sm:text-xl">
          {tagline}
        </p>
        <a
          href={ctaHref}
          className="inline-flex h-12 items-center rounded-full bg-[var(--color-primary)] px-8 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
