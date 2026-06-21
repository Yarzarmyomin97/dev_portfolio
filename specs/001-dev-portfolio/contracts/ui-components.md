# UI Component Contracts: Dev Portfolio Application

**Feature**: [001-dev-portfolio](./spec.md)
**Date**: 2026-06-20

## Component Architecture

### Server vs Client Boundary

| Component | Type | Reason |
|-----------|------|--------|
| `app/layout.tsx` | Server | Root layout; imports globals.css; wraps ThemeProvider |
| `app/page.tsx` | Server | Renders all sections; passes data as props |
| `hero-section.tsx` | Server | Static content; no interactivity |
| `projects-section.tsx` | Server | Static content; renders project cards |
| `experience-section.tsx` | Server | Static content; renders timeline |
| `about-section.tsx` | Server | Static content; renders bio |
| `contact-section.tsx` | **Client** | Form state, validation, submission handling |
| `footer.tsx` | Server | Static content; back-to-top is anchor link |
| `dot-indicator.tsx` | **Client** | Intersection Observer; active state tracking |
| `theme-toggle.tsx` | **Client** | Click handler; localStorage; context consumer |
| `theme-selector.tsx` | **Client** | Click handler; localStorage; context consumer |

---

## Component Contracts

### HeroSection

```typescript
interface HeroSectionProps {
  name: string;          // Developer's full name
  title: string;         // Professional title (e.g., "Software Engineer")
  tagline: string;       // Brief value proposition (1 sentence)
  ctaText: string;       // Call-to-action button text
  ctaHref: string;       // CTA destination (e.g., "#contact")
}
```

**Renders**: `<section id="hero">` with semantic HTML; CTA as `<a>` tag styled as button.

---

### ProjectsSection

```typescript
interface ProjectsSectionProps {
  projects: Project[];   // Array of project entries
}
```

**Renders**: `<section id="projects">` with grid layout; each project as a card with title, description, tech tags, and action links.

---

### ExperienceSection

```typescript
interface ExperienceSectionProps {
  experiences: Experience[];  // Array of experience entries
}
```

**Renders**: `<section id="experience">` with vertical timeline/list; each entry shows company, title, dates, and accomplishment bullets.

---

### AboutSection

```typescript
interface AboutSectionProps {
  bio: string;              // Personal bio paragraph(s)
  skills: string[];         // Key skills/interests
  imagePlaceholder: string; // Profile image path
}
```

**Renders**: `<section id="about">` with image + text layout.

---

### ContactSection (Client Component)

```typescript
// No props — self-contained form with internal state
// Uses "use client" directive
```

**Internal State**:
- `name: string`
- `email: string`
- `message: string`
- `errors: { name?: string; email?: string; message?: string }`
- `isSubmitting: boolean`
- `isSuccess: boolean`

**Renders**: `<section id="contact">` with form; inline validation; success toast on submit; clears form after success.

---

### Footer

```typescript
interface FooterProps {
  copyright: string;       // Copyright text (e.g., "© 2026 Yar Zar Myo Min")
  socialLinks: SocialLink[]; // Array of social links
}

interface SocialLink {
  platform: string;        // e.g., "GitHub", "LinkedIn"
  url: string;             // Profile URL
  icon?: string;           // Icon identifier (optional)
}
```

**Renders**: `<footer>` with copyright, social links, and back-to-top anchor.

---

### DotIndicator (Client Component)

```typescript
interface DotIndicatorProps {
  sections: SectionInfo[];  // Sections to navigate
}

interface SectionInfo {
  id: string;               // Section element ID (e.g., "hero")
  label: string;            // Accessible label (e.g., "Hero")
}
```

**Internal State**: `activeSection: string` (tracked via Intersection Observer)

**Renders**: Fixed-position nav with dots; clicking a dot smooth-scrolls to section; active dot highlighted.

---

### ThemeToggle (Client Component)

```typescript
// No props — reads from ThemeContext
// Uses "use client" directive
```

**Renders**: Button that toggles between light/dark mode; updates `ThemeContext` and `localStorage`.

---

### ThemeSelector (Client Component)

```typescript
interface ThemeSelectorProps {
  palettes: ThemePalette[];  // Available theme palettes
}
```

**Renders**: Palette options (e.g., color swatches); selecting one updates `ThemeContext` and `localStorage`.

---

## Context Providers

### ThemeProvider (Client Component)

```typescript
interface ThemeContextValue {
  mode: "light" | "dark";
  palette: ThemePalette;
  setMode: (mode: "light" | "dark") => void;
  setPalette: (palette: string) => void;
}
```

**Wraps**: `app/layout.tsx` children
**Initializes from**: `localStorage` (client-side) or default (server-side)
**Sets**: CSS custom properties on `<html>` element via `data-theme` attribute
