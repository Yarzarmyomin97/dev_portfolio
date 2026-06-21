import type { Experience } from "@/lib/types";

interface ExperienceEntryProps {
  experience: Experience;
}

function formatDate(date: string): string {
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function ExperienceEntry({ experience }: ExperienceEntryProps) {
  const start = formatDate(experience.startDate);
  const end = experience.endDate ? formatDate(experience.endDate) : "Present";

  return (
    <article className="relative flex gap-6 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="hidden w-px flex-none bg-[var(--color-border)] sm:block" />

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{experience.title}</h3>
          <p className="text-base font-medium text-[var(--color-primary)]">
            {experience.company}
          </p>
          <p className="text-sm opacity-60">
            {start} — {end}
          </p>
        </div>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          {experience.accomplishments.map((item, i) => (
            <li key={i} className="text-sm leading-relaxed opacity-80">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
