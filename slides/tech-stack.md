---
marp: true
paginate: true
size: 16:9
---
<!--
  Marp template — "terminal-dark"
  Copy this file into your repo (e.g. slides/intro.md) and replace the content.
  Render:  marp slides/intro.md -o slides.html      (or .pdf / .png)
  Theme is self-contained in the <style> block below — no external CSS needed.
-->
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar:wght@400;600;700&family=Inter:wght@400;600;800&display=swap');
:root { --bg:#fffdf9; --ink:#292524; --muted:#a8a29e; --accent:#d97706; --burnt:#9a3412; --line:#f1d9bf; --code:#1c1917; }
section {
  background:var(--bg); color:var(--ink);
  font-family:'Pyidaungsu','Noto Sans Myanmar','Inter',sans-serif;
  font-size:27px; line-height:1.7; padding:56px 72px;
}
h1 { color:var(--burnt); font-weight:700; border-bottom:4px solid var(--accent); padding-bottom:.2em; line-height:1.4; }
h2 { color:var(--accent); font-weight:600; line-height:1.5; }
h3 { color:var(--burnt); font-weight:600; }
strong { color:var(--burnt); }
a { color:#0369a1; text-decoration:none; }
ul,ol { line-height:1.7; }
code { background:#fff1e6; color:#be123c; padding:.06em .35em; border-radius:5px; font-family:'JetBrains Mono',ui-monospace,monospace; }
pre  { background:var(--code); border-radius:10px; }
pre code { background:none; color:#fde9d3; }
blockquote { border-left:4px solid var(--accent); background:#fffbeb; color:#57534e; padding:.5em 1em; }
table th { background:#fff1e6; color:var(--burnt); }
table td, table th { border-color:var(--line); }
header,footer,section::after { color:var(--muted); font-size:.5em; }
section.cover {
  background:linear-gradient(135deg,#7c2d12 0%, #b45309 50%, #d97706 100%);
  color:#fff7ed;
}
section.cover h1 { border-bottom:none; color:#fff7ed; font-size:2.1em; }
section.cover h2 { color:#ffedd5; font-weight:400; }
section.lead { background:linear-gradient(135deg,#fff7ed,#ffedd5); }
section.lead h1 { border-bottom:none; }
</style>

<!-- _class: cover -->

# Portfolio

## A modern developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4 — featuring glassmorphism design, animated aurora gradients, and a 3-theme system with light/dark mode

---

# Tech Stack

| Category   | Technology                                                        |
| ---------- | ----------------------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org/) (App Router)                    |
| UI Library | [React 19](https://react.dev/)                                    |
| Language   | [TypeScript 5](https://www.typescriptlang.org/)                   |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com/), CSS Custom Properties |
| Icons      | [Lucide React](https://lucide.dev/)                               |
| Fonts      | Archivo (body), Space Grotesk (headings)                          |

---

# AI Agents

| Agent                      | File                                       | What It Does                                                      | Trigger and Commands                      |
| -------------------------- | ------------------------------------------ | ----------------------------------------------------------------- | ----------------------------------------- |
| **docs-curator**           | `.claude/agents/docs-curator.md`           | Maintain project documentation: README.md, CLAUDE.md, setup notes | Update `README.md` according to changes   |
| **frontend-ui-specialist** | `.claude/agents/frontend-ui-specialist.md` | Implement frontend work: UI, components, accessibility            | Implement this card to reusable component |

---

# Skills

| Skill             | File                                    | What It Does                                                                                   | Trigger and Commands                                     |
| ----------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **ui-ux-pro-max** | `.claude/skills/ui-ux-pro-max/SKILL.md` | Build the UI to a consistent design system: glassmorphism, color tokens, icons, and typography | Implement this project using Glassmorphism design system |

---

# Methodology

Use `Github Spec Kit`

| Commands              | What It Does                                                                                                      |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| /speckit.constitution | Create your project's governing principles and development guidelines that will guide all subsequent development. |
| /speckit.specify      | Describe what you want to build. Focus on the what and why, not the tech stack.                                   |
| /speckit.plan         | Provide your tech stack and architecture choices.                                                                 |
| /speckit.tasks        | Generate actionable task lists for implementation                                                                 |
| /speckit.implement    | Execute all tasks to build the feature according to the plan                                                      |
