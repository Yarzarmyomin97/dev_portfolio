# Implementation Plan: Dev Portfolio Application

**Branch**: `001-dev-portfolio` | **Date**: 2026-06-20 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-dev-portfolio/spec.md`

## Summary

Build a single-page portfolio application for an IT Software Engineer targeting job hunting. The portfolio features a hero section, projects showcase, work experience, about section, and contact form. It includes dark/light mode toggle and 2-3 predefined theme palettes with full color sets. Navigation uses a floating side dot indicator (no sticky header). A minimal footer with social links and back-to-top is included. All content uses dummy data initially. The application is responsive at 320px, 768px, and 1280px viewports.

## Technical Context

**Language/Version**: TypeScript 5.x

**Primary Dependencies**: Next.js 16.x (App Router), React 19.x, Tailwind CSS 4.x

**Storage**: localStorage for theme preferences (mode + palette)

**Testing**: N/A for this phase (no testing framework specified yet)

**Target Platform**: Modern browsers (Chrome, Firefox, Safari, Edge — latest 2 versions)

**Project Type**: Web application (single-page portfolio)

**Performance Goals**: Lighthouse performance score ≥ 90

**Constraints**: No horizontal scrolling at any viewport width; WCAG 2.1 AA color contrast; keyboard accessibility for all interactive elements

**Scale/Scope**: Single developer portfolio; ~7 content sections; 2-3 theme palettes; dummy data

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Component-Driven Architecture | ✅ PASS | All sections will be reusable React components with clear prop interfaces |
| II. TypeScript Strictness | ✅ PASS | All files will use `.tsx`/`.ts` with strict mode; no `any` types |
| III. Mobile-First Responsive Design | ✅ PASS | Tailwind CSS 4.x; mobile-first approach; tested at 320px, 768px, 1280px |
| IV. Performance & Accessibility | ✅ PASS | Lighthouse ≥ 90; semantic HTML; WCAG 2.1 AA; keyboard accessible |
| V. App Router Conventions | ✅ PASS | Server Components by default; `"use client"` only for interactive elements |
| VI. Code Quality & Consistency | ✅ PASS | ESLint; kebab-case files; PascalCase components; conventional commits |

**No violations. Complexity Tracking not required.**

## Project Structure

### Documentation (this feature)

```text
specs/001-dev-portfolio/
├── spec.md              # Feature specification
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (UI contracts)
├── tasks.md             # Phase 2 output (/speckit-tasks command)
└── checklists/
    ├── requirements.md  # Spec quality checklist
    └── ux.md            # UX requirements quality checklist
```

### Source Code (repository root)

```text
app/
├── layout.tsx           # Root layout (Server Component) — imports globals.css, ThemeProvider
├── page.tsx             # Main page (Server Component) — renders all sections
├── globals.css          # Tailwind imports + theme CSS custom properties
├── loading.tsx          # Loading skeleton
├── error.tsx            # Error boundary
└── _components/
    ├── hero-section.tsx       # Hero with name, title, tagline, CTA
    ├── projects-section.tsx   # Project cards grid
    ├── experience-section.tsx # Work history timeline/list
    ├── about-section.tsx      # Bio + profile image placeholder
    ├── contact-section.tsx    # Contact form with validation
    ├── footer.tsx             # Copyright + social links + back-to-top
    ├── dot-indicator.tsx      # Floating side dot navigation
    ├── theme-toggle.tsx       # Dark/light mode toggle (Client Component)
    └── theme-selector.tsx     # Theme palette selector (Client Component)

lib/
├── data/
│   ├── projects.ts      # Dummy project data
│   ├── experience.ts    # Dummy experience data
│   └── profile.ts       # Dummy profile/bio data
├── themes.ts            # Theme palette definitions (Ocean, Forest, Sunset)
└── types.ts             # TypeScript interfaces (Project, Experience, ThemePreference)

hooks/
├── use-theme.ts         # Theme state management (mode + palette) with localStorage
└── use-active-section.ts # Intersection Observer for dot indicator active state
```

**Structure Decision**: Single-page application using Next.js App Router. All sections render on a single page (`app/page.tsx`). Interactive components (theme toggle, theme selector, contact form, dot indicator) use `"use client"` directive. Static content sections remain as Server Components. Shared components live in `app/_components/` (private folder, not routable). Data and utilities in `lib/`.

## Phase 0: Research

All technical context items are resolved. No NEEDS CLARIFICATION markers remain.

Key decisions documented:

- **Decision**: Use Next.js App Router with Server Components as default
- **Rationale**: Constitution mandates App Router; Server Components reduce client JS bundle; portfolio is mostly static content
- **Alternatives considered**: Pages Router (rejected per constitution); fully client-rendered SPA (rejected — worse FCP)

- **Decision**: Use CSS custom properties for theming
- **Rationale**: Tailwind CSS 4.x supports CSS-based configuration; custom properties enable dynamic theme switching without re-rendering; works with both Server and Client Components
- **Alternatives considered**: Tailwind plugins for each theme (rejected — too many classes); CSS-in-JS (rejected per constitution — Tailwind only)

- **Decision**: Use Intersection Observer for active section detection (dot indicator)
- **Rationale**: Native browser API; no dependencies; performant; standard pattern for scroll-based navigation
- **Alternatives considered**: Scroll event listener (rejected — less performant); URL hash-based (rejected — requires route changes)

- **Decision**: Use `localStorage` for theme persistence
- **Rationale**: No backend; client-side only; persists across sessions; simple API
- **Alternatives considered**: Cookies (rejected — unnecessary server overhead); sessionStorage (rejected — doesn't persist across sessions)

## Phase 1: Design & Contracts

### Data Model

See [data-model.md](./data-model.md) for full entity definitions.

**Entities**:
- `Project` — title, description, technologies[], demoUrl, sourceUrl, imagePlaceholder
- `Experience` — company, title, startDate, endDate, accomplishments[]
- `ThemePreference` — mode (light/dark), palette (Ocean/Forest/Sunset)
- `ThemePalette` — name, colors { primary, secondary, accent, background, surface, text, border } for both light and dark modes

### UI Contracts

See [contracts/](./contracts/) for component interface definitions.

Key contracts:
- Section components accept data via props (Server Components pass data down)
- Client Components (theme, form, dot indicator) use `"use client"` with state management
- Theme system uses CSS custom properties set on `<html>` element

### Quickstart Validation

See [quickstart.md](./quickstart.md) for runnable validation scenarios.

## Complexity Tracking

No violations — this table is intentionally empty.
