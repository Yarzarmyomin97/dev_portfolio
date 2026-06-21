# Tasks: Dev Portfolio Application

**Input**: Design documents from `/specs/001-dev-portfolio/`

**Prerequisites**: plan.md (required), spec.md (required), data-model.md, contracts/ui-components.md, quickstart.md

**Tests**: Not included — tests were not requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Clean up default Next.js boilerplate in `app/page.tsx` and `app/layout.tsx`
- [x] T002 Create TypeScript interfaces in `lib/types.ts` (Project, Experience, ThemePalette, ThemeColors, ThemePreference, SocialLink)
- [x] T003 [P] Create dummy project data in `lib/data/projects.ts` (3-5 project entries)
- [x] T004 [P] Create dummy experience data in `lib/data/experience.ts` (2-3 work entries)
- [x] T005 [P] Create dummy profile data in `lib/data/profile.ts` (name, title, tagline, bio, skills, socialLinks, imagePlaceholder)
- [x] T006 Define theme palettes in `lib/themes.ts` (Ocean, Forest, Sunset — each with light/dark ThemeColors)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Create `use-theme.ts` hook in `hooks/use-theme.ts` (mode toggle, palette selection, localStorage persistence, CSS custom property application)
- [x] T008 Create `ThemeProvider` client component in `app/_components/theme-provider.tsx` (wraps children, initializes from localStorage, sets `data-theme` attribute on `<html>`)
- [x] T009 Update root layout `app/layout.tsx` to import `globals.css`, wrap children with `ThemeProvider`, set `<html lang="en">`
- [x] T010 Configure global CSS in `app/globals.css` with Tailwind imports and CSS custom properties for theme system
- [x] T011 Create `use-active-section.ts` hook in `hooks/use-active-section.ts` (Intersection Observer to track which section is in viewport)

**Checkpoint**: Foundation ready — theme system, data, and hooks in place. User story implementation can now begin.

---

## Phase 3: User Story 1 — Hero Section (Priority: P1) 🎯 MVP

**Goal**: Display a compelling hero with developer name, title, tagline, and CTA

**Independent Test**: Visit the portfolio URL — hero section visible in initial viewport with name, title, tagline, and CTA button

### Implementation for User Story 1

- [x] T012 [P] [US1] Create `HeroSection` component in `app/_components/hero-section.tsx` (Server Component — accepts name, title, tagline, ctaText, ctaHref props)
- [x] T013 [US1] Update `app/page.tsx` to import profile data and render `HeroSection` with dummy data
- [x] T014 [US1] Add responsive styling to hero section (mobile-first: stacked layout at 320px, wider layout at 1280px)

**Checkpoint**: Hero section visible and responsive. MVP deliverable — can be deployed independently.

---

## Phase 4: User Story 2 — Projects Showcase (Priority: P1)

**Goal**: Display project cards with title, description, tech tags, and links

**Independent Test**: Scroll to projects section — cards display in grid (desktop) or single column (mobile) with all required fields

### Implementation for User Story 2

- [x] T015 [P] [US2] Create `ProjectCard` component in `app/_components/project-card.tsx` (Server Component — accepts Project props)
- [x] T016 [US2] Create `ProjectsSection` component in `app/_components/projects-section.tsx` (Server Component — imports projects data, renders grid of ProjectCards)
- [x] T017 [US2] Update `app/page.tsx` to render `ProjectsSection`
- [x] T018 [US2] Add responsive grid styling (single column at 320px, 2 columns at 768px, 3 columns at 1280px)

**Checkpoint**: Projects section fully functional with responsive grid layout.

---

## Phase 5: User Story 3 — Work Experience (Priority: P1)

**Goal**: Display work history with company, role, dates, and accomplishments

**Independent Test**: Scroll to experience section — entries show company, title, dates, and accomplishment bullets with responsive layout

### Implementation for User Story 3

- [x] T019 [P] [US3] Create `ExperienceEntry` component in `app/_components/experience-entry.tsx` (Server Component — accepts Experience props)
- [x] T020 [US3] Create `ExperienceSection` component in `app/_components/experience-section.tsx` (Server Component — imports experience data, renders list of entries)
- [x] T021 [US3] Update `app/page.tsx` to render `ExperienceSection`
- [x] T022 [US3] Add responsive styling (vertical timeline/list with clear separation between entries)

**Checkpoint**: Experience section fully functional with responsive layout.

---

## Phase 6: User Story 4 — About Section (Priority: P2)

**Goal**: Display personal bio with profile image placeholder and skills

**Independent Test**: Scroll to about section — bio text, image placeholder, and skills list visible and readable on mobile

### Implementation for User Story 4

- [x] T023 [P] [US4] Create `AboutSection` component in `app/_components/about-section.tsx` (Server Component — accepts bio, skills, imagePlaceholder props)
- [x] T024 [US4] Update `app/page.tsx` to import profile data and render `AboutSection`
- [x] T025 [US4] Add responsive styling (image + text layout; stacked on mobile, side-by-side on desktop)

**Checkpoint**: About section fully functional with responsive layout.

---

## Phase 7: User Story 5 — Contact Form (Priority: P2)

**Goal**: Contact form with validation, success toast, and form clearing

**Independent Test**: Fill form with valid data → success toast appears and form clears. Submit with empty fields → inline errors appear.

### Implementation for User Story 5

- [x] T026 [US5] Create `ContactSection` client component in `app/_components/contact-section.tsx` (`"use client"` — form state, inline validation, success toast, duplicate submission prevention)
- [x] T027 [US5] Update `app/page.tsx` to render `ContactSection`
- [x] T028 [US5] Add responsive styling for form fields (full-width inputs on mobile, constrained width on desktop)

**Checkpoint**: Contact form fully functional with validation and success feedback.

---

## Phase 8: User Story 6 — Dark/Light Mode Toggle (Priority: P2)

**Goal**: Toggle between light and dark modes; preference persists across sessions

**Independent Test**: Click toggle → theme changes. Refresh page → preference retained. No layout shift during transition.

### Implementation for User Story 6

- [x] T029 [US6] Create `ThemeToggle` client component in `app/_components/theme-toggle.tsx` (`"use client"` — reads/consumes ThemeContext, toggles mode, updates localStorage)
- [x] T030 [US6] Create `DotIndicator` client component in `app/_components/dot-indicator.tsx` (`"use client"` — uses useActiveSection hook, renders fixed-position dots, smooth-scroll on click, includes ThemeToggle)
- [x] T031 [US6] Update `app/page.tsx` to render `DotIndicator` with section IDs

**Checkpoint**: Dark/light mode toggle working with persistence. Dot indicator visible and functional.

---

## Phase 9: User Story 7 — Theme Palette Selection (Priority: P3)

**Goal**: Select from predefined theme palettes; choice persists across sessions

**Independent Test**: Open theme selector → choose different palette → all themed elements update. Refresh → preference retained.

### Implementation for User Story 7

- [x] T032 [US7] Create `ThemeSelector` client component in `app/_components/theme-selector.tsx` (`"use client"` — renders palette options as color swatches, consumes ThemeContext, updates localStorage)
- [x] T033 [US7] Integrate `ThemeSelector` into `DotIndicator` component (add alongside ThemeToggle)
- [x] T034 [US7] Verify all themed elements (backgrounds, buttons, links, highlights, borders) respond to palette changes in both light and dark modes

**Checkpoint**: Theme palette selection fully functional with persistence.

---

## Phase 10: Footer & Polish

**Purpose**: Footer implementation and cross-cutting concerns

- [x] T035 Create `Footer` component in `app/_components/footer.tsx` (Server Component — accepts copyright, socialLinks props; renders copyright, social links, back-to-top anchor)
- [x] T036 Update `app/page.tsx` to import profile data and render `Footer`
- [x] T037 Add section IDs to all sections (`id="hero"`, `id="projects"`, `id="experience"`, `id="about"`, `id="contact"`) for dot indicator navigation
- [x] T038 Add smooth-scroll behavior to page (CSS `scroll-behavior: smooth` or programmatic)
- [x] T039 Verify responsive behavior at 320px, 768px, and 1280px viewports — no horizontal scrolling
- [x] T040 Verify accessibility: keyboard navigation, focus indicators, semantic HTML, WCAG 2.1 AA contrast
- [x] T041 Run `npm run lint` and `npm run build` — fix any errors

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Stories (Phase 3–9)**: All depend on Foundational phase completion
  - US1 (Hero), US2 (Projects), US3 (Experience) can run in parallel after Phase 2
  - US4 (About), US5 (Contact) can run in parallel after Phase 2
  - US6 (Dark/Light Mode) depends on ThemeProvider from Phase 2
  - US7 (Theme Palette) depends on US6 (ThemeToggle integrated into DotIndicator)
- **Polish (Phase 10)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (Hero)**: Can start after Foundational (Phase 2) — no dependencies on other stories
- **US2 (Projects)**: Can start after Foundational (Phase 2) — no dependencies on other stories
- **US3 (Experience)**: Can start after Foundational (Phase 2) — no dependencies on other stories
- **US4 (About)**: Can start after Foundational (Phase 2) — no dependencies on other stories
- **US5 (Contact)**: Can start after Foundational (Phase 2) — no dependencies on other stories
- **US6 (Dark/Light Mode)**: Can start after Foundational (Phase 2) — depends on ThemeProvider
- **US7 (Theme Palette)**: Depends on US6 (DotIndicator exists to integrate ThemeSelector into)

### Within Each User Story

- Components created before integration into page
- Responsive styling applied during component creation
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T003, T004, T005)
- US1, US2, US3 (all P1) can run in parallel after Phase 2
- US4, US5 (both P2) can run in parallel after Phase 2
- Components within a story marked [P] can run in parallel

---

## Parallel Example: User Stories 1–3 (P1)

```bash
# After Phase 2 completes, launch all P1 stories in parallel:
Task: "Create HeroSection component in app/_components/hero-section.tsx"
Task: "Create ProjectCard component in app/_components/project-card.tsx"
Task: "Create ExperienceEntry component in app/_components/experience-entry.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1 (Hero)
4. **STOP and VALIDATE**: Hero section visible and responsive
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 (Hero) → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 (Projects) → Test independently → Deploy/Demo
4. Add User Story 3 (Experience) → Test independently → Deploy/Demo
5. Add User Stories 4+5 (About + Contact) → Test independently → Deploy/Demo
6. Add User Story 6 (Dark/Light Mode) → Test independently → Deploy/Demo
7. Add User Story 7 (Theme Palette) → Test independently → Deploy/Demo
8. Polish → Final validation → Production deploy

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Hero) + User Story 4 (About)
   - Developer B: User Story 2 (Projects) + User Story 5 (Contact)
   - Developer C: User Story 3 (Experience) + User Story 6 (Dark/Light Mode)
3. Developer C continues: User Story 7 (Theme Palette)
4. All: Polish phase together

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
- All interactive components use `"use client"` directive per constitution (App Router conventions)
- All styling uses Tailwind CSS only — no inline styles or CSS modules per constitution
