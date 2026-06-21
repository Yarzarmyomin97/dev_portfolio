import type { SocialLink } from "@/lib/types";

interface FooterProps {
  copyright: string;
  socialLinks: SocialLink[];
}

export function Footer({ copyright, socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        {/* Social links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              {link.platform}
            </a>
          ))}
        </div>

        {/* Back to top */}
        <a
          href="#hero"
          className="text-sm opacity-60 transition-opacity hover:opacity-100"
        >
          ↑ Back to Top
        </a>

        {/* Copyright */}
        <p className="text-xs opacity-40">{copyright}</p>
      </div>
    </footer>
  );
}
