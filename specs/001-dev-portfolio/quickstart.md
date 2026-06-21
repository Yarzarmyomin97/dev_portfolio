# Quickstart Validation: Dev Portfolio Application

**Feature**: [001-dev-portfolio](./spec.md)
**Date**: 2026-06-20

## Prerequisites

- Node.js LTS installed
- npm installed
- Repository cloned and on branch `001-dev-portfolio`

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in browser.

## Validation Scenarios

### 1. Page Load & Hero Section

**Action**: Open http://localhost:3000

**Expected**:
- Page loads without errors
- Hero section visible in viewport with developer name, title, tagline, and CTA button
- No horizontal scrolling at any viewport width

### 2. Section Navigation (Dot Indicator)

**Action**: Observe the floating side dot indicator on the right side of the page

**Expected**:
- Dot indicator visible with dots for each section (Hero, Projects, Experience, About, Contact)
- Active dot highlights corresponding to the section currently in viewport
- Clicking a dot smooth-scrolls to that section

### 3. Projects Section

**Action**: Scroll to the projects section

**Expected**:
- Project cards displayed in a grid layout (desktop) or single column (mobile)
- Each card shows title, description, tech tags, and at least one link (demo or source)
- Cards are visually consistent

### 4. Experience Section

**Action**: Scroll to the experience section

**Expected**:
- Work history entries displayed with company, title, dates, and accomplishment bullets
- Clear visual separation between entries
- Responsive layout on mobile

### 5. About Section

**Action**: Scroll to the about section

**Expected**:
- Bio text displayed with profile image placeholder
- Skills/interests listed
- Text readable without zooming on mobile

### 6. Contact Form

**Action**: Fill out the contact form and submit

**Expected**:
- Submit with empty fields → inline validation errors appear
- Submit with invalid email → inline error message
- Submit with valid data → success toast appears, form clears
- Rapid double-click → only one submission processed

### 7. Dark/Light Mode Toggle

**Action**: Click the dark/light mode toggle

**Expected**:
- Entire page transitions to dark mode (or light mode if already dark)
- No layout shift during transition
- Refresh page → preference retained

### 8. Theme Palette Selection

**Action**: Open theme selector and choose a different palette

**Expected**:
- All themed elements (backgrounds, buttons, links, highlights) update to new palette
- Both light and dark modes look correct with new palette
- Refresh page → palette preference retained

### 9. Footer

**Action**: Scroll to the bottom of the page

**Expected**:
- Footer displays copyright text and social links
- Back-to-top link scrolls to hero section
- Social links are functional (navigate to URLs)

### 10. Responsive Behavior

**Action**: Resize browser to 320px, 768px, and 1280px widths

**Expected**:
- No horizontal scrolling at any width
- All content readable and usable
- Layout adapts appropriately at each breakpoint

### 11. Accessibility

**Action**: Navigate the page using only keyboard (Tab, Enter, Escape)

**Expected**:
- All interactive elements focusable
- Focus indicators visible
- Dot indicator, theme toggle, theme selector, and form all keyboard-accessible

## Build Validation

```bash
# Run lint
npm run lint

# Run build
npm run build

# Start production server
npm start
```

**Expected**: Both lint and build complete without errors. Production server serves the portfolio correctly.
