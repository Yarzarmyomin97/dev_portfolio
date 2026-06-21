import type { Experience } from "@/lib/types";
import { ExternalLink } from "lucide-react";

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

  const companyContent = (
    <>
      {experience.company}
      {experience.companyUrl && (
        <ExternalLink
          size={14}
          className="ml-1.5 opacity-0 transition-opacity duration-200 group-hover/company:opacity-100"
        />
      )}
    </>
  );

  return (
    <article className="relative flex gap-6 pb-12 last:pb-0">
      {/* Timeline line and dot */}
      <div className="hidden flex-col items-center sm:flex">
        <div className="h-3 w-3 flex-none rounded-full bg-[var(--color-primary)] shadow-sm" />
        <div className="w-px flex-1 bg-[var(--color-border)]" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {experience.title}
          </h3>

          {/* Company name with optional link */}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/company inline-flex w-fit cursor-pointer items-center text-base font-medium text-[var(--color-primary)] transition-colors duration-200 hover:text-[var(--color-secondary)]"
            >
              {companyContent}
            </a>
          ) : (
            <p className="text-base font-medium text-[var(--color-primary)]">
              {experience.company}
            </p>
          )}

          <p className="text-sm opacity-60">
            {start} — {end}
          </p>
        </div>

        {/* Accomplishments */}
        <ul className="flex list-disc flex-col gap-2 pl-5">
          {experience.accomplishments.map((item, i) => (
            <li key={i} className="text-sm leading-relaxed opacity-80">
              {item}
            </li>
          ))}
        </ul>

        {/* Skill chips */}
        {experience.skills && experience.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="glass rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
