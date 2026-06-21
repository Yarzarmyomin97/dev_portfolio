import type { Experience } from "@/lib/types";
import { ExperienceEntry } from "./experience-entry";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">
          Experience
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center opacity-70">
          My professional journey and key accomplishments.
        </p>
        <div className="flex flex-col">
          {experiences.map((exp) => (
            <ExperienceEntry key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
