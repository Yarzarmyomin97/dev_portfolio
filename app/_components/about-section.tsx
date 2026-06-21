import { ImageWithFallback } from "./image-with-fallback";

interface AboutSectionProps {
  bio: string;
  skills: string[];
  imagePlaceholder: string;
}

export function AboutSection({ bio, skills, imagePlaceholder }: AboutSectionProps) {
  const imageSrc = imagePlaceholder || "/placeholders/default-profile.svg";

  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2
          className="gradient-text mb-4 text-center text-3xl font-bold sm:text-4xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          About Me
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center opacity-70">
          A bit about who I am and what I do.
        </p>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-12">
          {/* Profile image with zoom animation */}
          <div className="flex-none">
            <div className="glass gradient-border group relative h-48 w-48 overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={imageSrc}
                fallbackSrc="/placeholders/default-profile.svg"
                alt="Profile photo"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="192px"
              />
            </div>
          </div>

          {/* Bio and skills */}
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed opacity-80">{bio}</p>
            <div>
              <h3
                className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-70"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="glass rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 hover:scale-105"
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
