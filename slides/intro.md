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
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;600;800&display=swap');
:root {
  --bg:#0d1117; --ink:#e6edf3; --muted:#8b949e;
  --accent:#3fb950; --accent2:#58a6ff; --line:#30363d; --code:#161b22;
}
section {
  background:var(--bg); color:var(--ink);
  font-family:'Inter','Noto Sans','Pyidaungsu',sans-serif;
  font-size:27px; line-height:1.5; padding:56px 72px;
}
h1,h2,h3 { font-family:'JetBrains Mono',monospace; }
h1 { color:var(--accent); font-weight:700; border-bottom:3px solid var(--line); padding-bottom:.2em; }
h2 { color:var(--accent2); font-weight:500; }
h3 { color:var(--ink); }
strong { color:var(--accent); }
a { color:var(--accent2); text-decoration:none; }
code { background:var(--code); color:var(--accent); padding:.06em .35em; border-radius:5px; font-family:'JetBrains Mono',monospace; }
pre  { background:var(--code); border:1px solid var(--line); border-radius:10px; }
pre code { background:none; color:#e6edf3; }
blockquote { border-left:4px solid var(--accent); background:#11161d; color:var(--muted); padding:.5em 1em; }
table th { background:#161b22; color:var(--accent2); }
table td, table th { border-color:var(--line); }
header,footer,section::after { color:var(--muted); font-size:.5em; }
section.cover {
  background:radial-gradient(900px 400px at 80% 12%, rgba(63,185,80,.18), transparent 60%), var(--bg);
}
section.cover h1 { border-bottom:none; font-size:2.3em; }
section.cover .tags code { background:#11161d; color:var(--accent2); margin-right:.4em; }
section.lead { background:#11161d; }
section.lead h1 { border-bottom:none; }
</style>

<!-- _class: cover -->

# Portfolio

## A personal portfolio site that showcases my skills, projects, and experience

**Your Name** · @Yarzarmyomin97

<span class="tags">`#built-with-claude` `#vibecode.tours`</span>

---

# What it is

- The problem it solves: Generic resumes and look-alike portfolios make it hard for developers to stand out during job hunting — recruiters skim in seconds, not minutes.
- Who it's for: Me — a Flutter Developer, job hunting and needing one place that shows real projects and skills, not just a static resume.
- The one thing it does well: Makes a strong first impression fast — modern glassmorphism design + clear project showcase that gets recruiters to actually stop and look.

---

# How it works

```bash
# the core flow in 3 commands
npm install
npm run dev
# open http://localhost:3000
```

Stack: **Next.js, React, TypeScript, Tailwind CSS, Framer Motion** · built with Claude Code

---

<!-- _class: lead -->

# Demo

![w:880](/screenshots/desktop-hero.png)

---

# Links

- **Live:** [Portfolio](https://yarzarmyomin.vercel.app)
- **Repo:** [Portfolio](https://github.com/Yarzarmyomin97/dev_portfolio)
- **License:** MIT
