# Dev Portfolio

A modern, single-page developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4. Features a glassmorphism design system with an animated aurora gradient mesh background, three switchable color palettes, and light/dark mode support.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript 5
- **Styling:** Tailwind CSS 4, CSS Custom Properties
- **Icons:** Lucide React
- **Fonts:** Archivo (body), Space Grotesk (headings)

## Features

- **Glassmorphism design** — translucent surfaces with `backdrop-filter: blur()`, semi-transparent borders, and soft shadows
- **Animated aurora background** — floating gradient blobs with 12–15s animation cycles
- **Three color palettes** — Aurora (indigo/pink/cyan), Sunset (orange/red/amber), Ocean (sky/emerald/cyan)
- **Light & dark mode** — system preference detection with manual toggle, persisted to localStorage
- **Five content sections** — Hero, Projects, Experience, About, Contact
- **Sticky glass header** — active section highlighting via IntersectionObserver
- **Responsive layout** — mobile-first grid that adapts from 1 to 3 columns
- **Image fallbacks** — `ImageWithFallback` component wraps `next/image` with SVG placeholder fallback
- **Reduced motion support** — animations respect `prefers-reduced-motion`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  _components/       # UI components (header, sections, theme controls)
  globals.css        # Global styles, glass utilities, aurora animations
  layout.tsx         # Root layout (fonts, ThemeProvider, aurora BG)
  page.tsx           # Main page assembling all sections
hooks/
  use-active-section.ts   # IntersectionObserver-based nav tracking
  use-theme.ts            # Theme state, palette switching, persistence
lib/
  data/              # Profile, projects, and experience data
  themes.ts          # Color palette definitions (light + dark variants)
  types.ts           # TypeScript interfaces
public/
  images/            # Project screenshots and profile photo
  placeholders/      # SVG fallback images
```

## Customization

**Profile & content:** Edit the files in `lib/data/` — `profile.ts`, `projects.ts`, `experience.ts`.

**Themes:** Modify or add palettes in `lib/themes.ts`. Each palette defines 7 CSS custom properties (primary, secondary, accent, background, surface, text, border) for both light and dark modes.

**Images:** Place project screenshots in `public/images/` and update the `imagePlaceholder` paths in `lib/data/projects.ts`. Fallback SVGs live in `public/placeholders/`.

## License

MIT
