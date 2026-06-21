import type { SocialLink } from "@/lib/types";
import { Globe, Link, Mail, ArrowUp } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  github: Globe,
  linkedin: Link,
  email: Mail,
};

interface FooterProps {
  copyright: string;
  socialLinks: SocialLink[];
}

export function Footer({ copyright, socialLinks }: FooterProps) {
  return (
    <footer className="glass border-t border-[var(--color-border)] px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        {/* Social links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon ?? ""] ?? Mail;
            const isMailto = link.url.startsWith("mailto:");
            return (
              <a
                key={link.platform}
                href={link.url}
                {...(isMailto ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                aria-label={link.platform}
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[var(--color-primary)] transition-all duration-200 hover:underline focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{link.platform}</span>
              </a>
            );
          })}
        </div>

        {/* Back to top */}
        <a
          href="#hero"
          className="inline-flex cursor-pointer items-center gap-1.5 text-sm opacity-60 transition-all duration-200 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
        >
          <ArrowUp size={14} />
          Back to Top
        </a>

        {/* Copyright */}
        <p className="text-xs opacity-40">{copyright}</p>
      </div>
    </footer>
  );
}
