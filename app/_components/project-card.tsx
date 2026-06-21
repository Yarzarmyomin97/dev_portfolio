import type { Project } from "@/lib/types";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./image-with-fallback";

// Simple SVG icon components for store badges
function PlayStoreIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function AppStoreIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const imageSrc = project.imagePlaceholder || "/placeholders/default-project.svg";

  return (
    <article className="glass group flex flex-col gap-4 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image with zoom animation */}
      <div className="relative z-0 h-40 overflow-hidden rounded-lg bg-[var(--color-border)]">
        <ImageWithFallback
          src={imageSrc}
          fallbackSrc="/placeholders/default-project.svg"
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <h3
        className="text-xl font-semibold"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed opacity-80">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="glass rounded-full px-3 py-1 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3 pt-2">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] transition-all duration-200 hover:gap-2.5 hover:text-[var(--color-secondary)]"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] transition-all duration-200 hover:gap-2.5 hover:text-[var(--color-secondary)]"
          >
            <ArrowRight size={14} />
            Source Code
          </a>
        )}
        {project.playstoreUrl && (
          <a
            href={project.playstoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text)] transition-all duration-200 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
          >
            <PlayStoreIcon size={12} />
            Play Store
          </a>
        )}
        {project.appstoreUrl && (
          <a
            href={project.appstoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text)] transition-all duration-200 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]"
          >
            <AppStoreIcon size={12} />
            App Store
          </a>
        )}
      </div>
    </article>
  );
}
