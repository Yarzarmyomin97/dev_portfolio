# 🚀 Dev Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat)]()

A modern, single-page developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4. Features a glassmorphism design system with an animated aurora gradient mesh background, three switchable color palettes, light/dark mode support, and visitor analytics tracking via Vercel Analytics.

## 📸 Preview

<p align="center">
  <img src="screenshots/desktop-hero.png" alt="Portfolio Preview (Sunset/light theme)" width="800">
</p>

_Screenshot shown in the **Sunset** palette with **light** mode. The default theme is **Aurora**._

## ✨ Features

- **Glassmorphism design** -- translucent surfaces with `backdrop-filter: blur()`, semi-transparent borders, and soft shadows
- **Animated aurora background** -- floating gradient blobs with 12-15s animation cycles
- **Three color palettes** -- Aurora (indigo/pink/cyan), Sunset (orange/red/amber), Ocean (sky/emerald/cyan)
- **Light & dark mode** -- system preference detection with manual toggle, persisted to localStorage
- **Five content sections** -- Hero, Projects, Experience, About, Contact
- **Sticky glass header** -- active section highlighting via IntersectionObserver
- **Responsive layout** -- mobile-first grid that adapts from 1 to 3 columns
- **Image fallbacks** -- `ImageWithFallback` component wraps `next/image` with SVG placeholder fallback
- **Accessible** -- ARIA attributes, keyboard navigation, `prefers-reduced-motion` support
- **📊 Visitor analytics** -- section visibility, scroll depth milestones, and Web Vitals tracking via Vercel Analytics

## 🛠️ Tech Stack

| Category | Technology |
|----------|-------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/), CSS Custom Properties |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Archivo (body), Space Grotesk (headings) |
| Image Compression | [Sharp](https://sharp.pixelplumbing.com/) |
| Analytics | [@vercel/analytics](https://www.npmjs.com/package/@vercel/analytics) v2 |
| Screenshot Capture | [Playwright](https://playwright.dev/) (Chromium) |

## 📸 Screenshots

Screenshots are captured with the **Sunset** palette in **light** mode (Aurora is the default theme; see the [screenshot generation script](#screenshot-generation) for theme configuration).

<details open>
<summary><strong>🖥️ Desktop</strong> (1280x800)</summary>
<br>

| Hero | Projects |
|------|----------|
| ![Desktop Hero](screenshots/desktop-hero.png) | ![Desktop Projects](screenshots/desktop-projects.png) |

| Experience | About | Contact |
|------------|-------|---------|
| ![Desktop Experience](screenshots/desktop-experience.png) | ![Desktop About](screenshots/desktop-about.png) | ![Desktop Contact](screenshots/desktop-contact.png) |

</details>

<details>
<summary><strong>📱 Mobile</strong> (390x844)</summary>
<br>

| Hero | Projects |
|------|----------|
| ![Mobile Hero](screenshots/mobile-hero.png) | ![Mobile Projects](screenshots/mobile-projects.png) |

| Experience | About | Contact |
|------------|-------|---------|
| ![Mobile Experience](screenshots/mobile-experience.png) | ![Mobile About](screenshots/mobile-about.png) | ![Mobile Contact](screenshots/mobile-contact.png) |

</details>

<details>
<summary><strong>🌐 Full Page</strong></summary>
<br>

![Full Portfolio](screenshots/portfolio-full.png)

</details>

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `node scripts/take-screenshots.mjs` | Capture screenshots (see [Screenshot Generation](#screenshot-generation)) |
| `node scripts/compress-screenshots.mjs` | Compress PNG screenshots using Sharp |

### 📸 Screenshot Generation

The script at `scripts/take-screenshots.mjs` uses [Playwright](https://playwright.dev/) (Chromium) to capture viewport screenshots at Desktop (1280x800) and Mobile (390x844) for each section, plus a full-page desktop capture.

**Prerequisites:**

```bash
npx playwright install chromium
```

**Usage:**

1. Start the dev server on port 3000:
   ```bash
   npm run dev -- -p 3000
   ```
2. In another terminal, run:
   ```bash
   node scripts/take-screenshots.mjs
   ```

The script sets the theme to **Sunset/light** via `localStorage` before capturing and waits for CSS custom properties to be applied. All screenshots are saved to the `screenshots/` directory.

## 📁 Project Structure

```
app/
  _components/
    analytics-tracker.tsx   # Vercel Analytics + Web Vitals + custom event wiring
    header.tsx              # Sticky navigation header
    theme-provider.tsx      # Theme context provider
    theme-toggle.tsx        # Light/dark + palette switching UI
  globals.css               # Global styles, glass utilities, aurora animations
  layout.tsx                # Root layout (fonts, ThemeProvider, aurora BG, Analytics)
  page.tsx                  # Main page assembling all sections
hooks/
  use-active-section.ts     # IntersectionObserver-based nav tracking
  use-theme.ts              # Theme state, palette switching, persistence
  use-visibility-tracking.ts # Section visibility + scroll depth analytics
lib/
  data/                     # Profile, projects, and experience data
  themes.ts                 # Color palette definitions (light + dark variants)
  types.ts                  # TypeScript interfaces
public/
  images/                   # Project screenshots and profile photo
  placeholders/             # SVG fallback images
scripts/
  compress-screenshots.mjs  # PNG compression utility using Sharp
  take-screenshots.mjs      # Playwright-based screenshot capture
screenshots/                # Portfolio screenshots (desktop + mobile)
```

## 📊 Analytics

This project uses [Vercel Analytics](https://vercel.com/docs/analytics/quickstart) (`@vercel/analytics` v2) to collect anonymous visitor metrics. No cookies are used, and the implementation respects the browser's **Do Not Track** setting (`navigator.doNotTrack === "1"`).

### Events Tracked

| Event | Trigger | Source |
|-------|---------|--------|
| `section_visible` | A content section enters the viewport (30% threshold) | `use-visibility-tracking.ts` |
| `scroll_depth` | User scrolls past 25%, 50%, 75%, or 100% of page height | `use-visibility-tracking.ts` |
| `web_vital` | Browser reports a Web Vital metric (LCP, CLS, INP, etc.) | `analytics-tracker.tsx` via [`next/web-vitals`](https://vercel.com/docs/analytics/web-vitals) |

### Integration Points

- **`app/layout.tsx`** -- includes `<AnalyticsTracker />` in the root layout, making it available on every page.
- **`app/_components/analytics-tracker.tsx`** -- client component that wraps the `<Analytics />` script, wires up `useReportWebVitals` for [Web Vitals](https://vercel.com/docs/analytics/web-vitals) reporting, and activates [custom event](https://vercel.com/docs/analytics/custom-events) tracking.
- **`hooks/use-visibility-tracking.ts`** -- custom hook using `IntersectionObserver` and passive scroll listeners. Each event fires at most once per page load.

No configuration or environment variables are required. The `<Analytics />` component auto-detects the deployment environment (production/preview/development) and adjusts behavior accordingly, as documented in the [official quickstart](https://vercel.com/docs/analytics/quickstart).

## 🚢 Deployment

This project is deployed on [Vercel](https://vercel.com/) with automatic deployments via GitHub Actions.

### Continuous Deployment

- **Production** -- pushes to `main` trigger a production deploy
- **Preview** -- pull requests generate preview URLs for review

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yarzarmyomin97/dev_portfolio)

Or use the built-in Git integration:

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js -- click Deploy

### GitHub Actions Workflow

The deployment workflow is defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and requires these secrets:

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | API token from [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Team ID from `vercel link` |
| `VERCEL_PROJECT_ID` | Project ID from `vercel link` |

## 🔧 Customization

**Profile & content:** Edit the files in `lib/data/` -- `profile.ts`, `projects.ts`, `experience.ts`.

**Themes:** Modify or add palettes in `lib/themes.ts`. Each palette defines 7 CSS custom properties (primary, secondary, accent, background, surface, text, border) for both light and dark modes. The first palette in the array (`themes[0]`) is the default.

**Images:** Place project screenshots in `public/images/` and update the `imagePlaceholder` paths in `lib/data/projects.ts`. Fallback SVGs live in `public/placeholders/`.

## ⭐ Star History

<a href="https://star-history.com/#yarzarmyomin97/dev_portfolio&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=yarzarmyomin97/dev_portfolio&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=yarzarmyomin97/dev_portfolio&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=yarzarmyomin97/dev_portfolio&type=Date" />
  </picture>
</a>

## 📄 License

This project is licensed under the [MIT License](LICENSE) -- feel free to use, modify, and distribute.

---

<p align="center">
  Built with ❤️ using <a href="https://nextjs.org/">Next.js</a> · <a href="https://react.dev/">React</a> · <a href="https://tailwindcss.com/">Tailwind CSS</a>
</p>
