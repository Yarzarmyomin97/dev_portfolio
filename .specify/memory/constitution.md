<!--
Sync Impact Report
Version change: 0.0.0 → 1.0.0 (initial ratification)
Modified principles: N/A (new constitution)
Added sections:
  - Core Principles (6 principles)
  - Technology Standards
  - Development Workflow
  - Governance
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ compatible
  - .specify/templates/spec-template.md ✅ compatible
  - .specify/templates/tasks-template.md ✅ compatible
Follow-up TODOs: None
-->

# Dev Portfolio Constitution

## Core Principles

### I. Component-Driven Architecture

Every UI element MUST be built as a reusable React component.
Components MUST be self-contained with clear prop interfaces.
Shared components MUST reside in `src/components/`.
Page-specific components MAY be co-located with their route.
No business logic in presentational components—separate concerns.

### II. TypeScript Strictness

All source files MUST use TypeScript (`.ts` / `.tsx`).
Strict mode MUST be enabled in `tsconfig.json`.
No `any` types—use proper typing or `unknown` with type guards.
All component props MUST have explicit type definitions.
API responses MUST be typed at the boundary layer.

### III. Mobile-First Responsive Design

All pages and components MUST be mobile-first.
Tailwind CSS is the sole styling solution—no inline styles or CSS modules.
Responsive breakpoints MUST follow Tailwind's default breakpoint system.
Layouts MUST be tested at 320px, 768px, and 1280px viewports minimum.
No horizontal scrolling at any viewport width.

### IV. Performance & Accessibility

Pages MUST achieve Lighthouse performance score ≥ 90.
Images MUST use Next.js `<Image>` component with proper sizing.
All interactive elements MUST be keyboard-accessible.
Semantic HTML MUST be used (`<nav>`, `<main>`, `<section>`, `<article>`).
Color contrast MUST meet WCAG 2.1 AA standards (4.5:1 for text).

### V. App Router Conventions

All routing MUST use the Next.js App Router (`app/` directory).
Server Components are the default—opt into Client Components only when needed (`"use client"`).
Data fetching MUST use Server Components or Server Actions, not client-side `useEffect` fetching.
Route groups MAY be used for layout organization without affecting URL structure.
Loading and error states MUST be handled with `loading.tsx` and `error.tsx` boundaries.

### VI. Code Quality & Consistency

ESLint MUST pass with zero errors before any commit.
Code formatting MUST be consistent (Prettier or project formatter).
Component and function names MUST use PascalCase and camelCase respectively.
File names MUST use kebab-case for components (e.g., `hero-section.tsx`).
Dead code and unused imports MUST be removed before merging.

## Technology Standards

**Framework**: Next.js 16.x with App Router
**Language**: TypeScript 5.x
**Styling**: Tailwind CSS 4.x
**Runtime**: React 19.x
**Package Manager**: npm (lockfile committed)
**Node Version**: LTS (specify in `.nvmrc` or `engines`)

All dependencies MUST be pinned to exact versions in `package.json` for production dependencies.
Dev dependencies MAY use caret ranges.
Security audits MUST be run before adding new dependencies.

## Development Workflow

- Feature branches MUST be created from `main`.
- Commit messages MUST follow conventional commits format (`feat:`, `fix:`, `docs:`, etc.).
- Each commit MUST pass `npm run lint` and `npm run build`.
- PR descriptions MUST reference the spec or issue being addressed.
- Code review MUST verify constitution compliance before approval.
- Deployments MUST be tested in a preview environment before merging to `main`.

## Governance

This constitution is the authoritative reference for development practices on the Dev Portfolio project.
All code contributions MUST comply with the principles defined herein.
Amendments require:
1. A written proposal describing the change and rationale.
2. Review and approval by the project owner.
3. Migration plan if the change affects existing code.
4. Version increment and date update in this file.

Constitution versioning follows semantic versioning:
- **MAJOR**: Principle removal or incompatible redefinition.
- **MINOR**: New principle or material expansion of existing guidance.
- **PATCH**: Clarifications, wording fixes, non-semantic refinements.

All PRs and reviews MUST verify compliance with this constitution.
Complexity beyond what is prescribed MUST be justified in the plan's Complexity Tracking section.

**Version**: 1.0.0 | **Ratified**: 2026-06-20 | **Last Amended**: 2026-06-20
