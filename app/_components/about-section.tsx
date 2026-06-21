interface AboutSectionProps {
  bio: string;
  skills: string[];
  imagePlaceholder: string;
}

export function AboutSection({
  bio,
  skills,
}: AboutSectionProps) {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          About Me
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center opacity-70">
          A bit about who I am and what I do.
        </p>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-12">
          {/* Profile image placeholder */}
          <div className="flex-none">
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-[var(--color-border)] text-6xl">
              👤
            </div>
          </div>

          {/* Bio and skills */}
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed opacity-80">{bio}</p>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-70">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
