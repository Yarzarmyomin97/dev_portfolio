# Data Model: Dev Portfolio Application

**Feature**: [001-dev-portfolio](./spec.md)
**Date**: 2026-06-20

## Entities

### Project

Represents a portfolio project entry displayed in the projects section.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique identifier (e.g., slug) |
| title | string | Yes | Project name |
| description | string | Yes | Brief summary (1-2 sentences) |
| technologies | string[] | Yes | List of tech stack tags |
| demoUrl | string \| null | No | Link to live demo |
| sourceUrl | string \| null | No | Link to source code |
| imagePlaceholder | string | Yes | Placeholder image path or URL |

**Validation Rules**:
- At least one of `demoUrl` or `sourceUrl` must be provided
- `technologies` must have at least 1 item
- `description` must be ≤ 200 characters

---

### Experience

Represents a work history entry in the experience section.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | Yes | Unique identifier |
| company | string | Yes | Company name |
| title | string | Yes | Job title |
| startDate | string | Yes | ISO date (YYYY-MM) |
| endDate | string \| null | No | ISO date (YYYY-MM); null = current |
| accomplishments | string[] | Yes | Key achievements (bullet points) |

**Validation Rules**:
- `accomplishments` must have 1-5 items
- `endDate` must be after `startDate` if provided
- `startDate` format: YYYY-MM

---

### ThemePalette

Represents a predefined theme with full color sets for light and dark modes.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Display name (e.g., "Ocean", "Forest", "Sunset") |
| slug | string | Yes | URL-safe identifier |
| light | ThemeColors | Yes | Color set for light mode |
| dark | ThemeColors | Yes | Color set for dark mode |

#### ThemeColors

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| primary | string | Yes | Main brand color (hex) |
| secondary | string | Yes | Supporting color (hex) |
| accent | string | Yes | Highlight/CTA color (hex) |
| background | string | Yes | Page background (hex) |
| surface | string | Yes | Card/panel background (hex) |
| text | string | Yes | Primary text color (hex) |
| border | string | Yes | Border/divider color (hex) |

**Validation Rules**:
- All hex values must be valid 6-digit hex codes
- Light mode text/background contrast must meet WCAG 2.1 AA (4.5:1)
- Dark mode text/background contrast must meet WCAG 2.1 AA (4.5:1)

---

### ThemePreference

Represents the visitor's stored appearance settings.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| mode | "light" \| "dark" | Yes | Current display mode |
| palette | string | Yes | Palette slug (e.g., "ocean") |

**Storage**: `localStorage` key: `portfolio-theme`

## Relationships

- `ThemePreference.palette` references `ThemePalette.slug`
- Project and Experience entities are independent (no relationship)

## State Transitions

### Theme Mode

```
light → dark (user toggles)
dark → light (user toggles)
```

### Theme Palette

```
Ocean → Forest (user selects)
Ocean → Sunset (user selects)
Forest → Ocean (user selects)
Forest → Sunset (user selects)
Sunset → Ocean (user selects)
Sunset → Forest (user selects)
```

No persistence of intermediate states — selection is immediate and atomic.
