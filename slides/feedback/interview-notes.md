# User Interview — Portfolio Website

- **Who:** John (Senior Full Stack Software Engineer / Friend)
- **When:** 2026-07-24
- **How:** Video call — ~20 min

## What they do today (without your project)

When evaluating candidates, I usually review multiple sources including GitHub, LinkedIn, resumes, and personal portfolios. Many portfolios look visually appealing but don't quickly communicate the candidate's technical strengths, project impact, or engineering skills. I often spend several minutes navigating before deciding whether to continue reading.

## What they liked

- **Mobile-first responsive layout** — the site uses Tailwind's responsive utilities (`sm:`, `md:`, `lg:`) extensively, so it looks native on every device from a 390px phone to a 1440px desktop. The navigation collapses cleanly, project cards reflow into a single column on mobile, and the hero typography scales properly.
- **Theme system (Aurora / Sunset / Ocean + light/dark)** — the three distinct color palettes with light/dark variants give the site a polished, personal feel. The theme toggle is smooth and persistent across page reloads.
- **Contact form with actual delivery** — connected to Resend for real email sending, not just a `mailto:` link. This means visitors can reach out and Yar Zar actually receives those messages.
- **Smooth scroll navigation** — clicking "Projects", "Experience", "About", or "Contact" scrolls smoothly to the right section. The header highlights the active section as you scroll, giving a single-page-app feel.
- **Clean project cards with tech tags** — each project shows a screenshot, description, and technology labels in a consistent card layout. Links to GitHub, live demo, Play Store, and App Store where applicable.
- **Performance** — the site loads fast on Vercel's edge network, and scores well on Lighthouse.

## What confused them / what's missing

- **No mobile hamburger menu on very small screens** — the nav links (Projects, Experience, About, Contact) are always visible even on narrow mobile. On sub-360px screens or devices with very limited width, they could wrap awkwardly.
- **Contact form lacks feedback** — after clicking "Send Message", there's no visible toast, success message, or loading state to confirm the message was sent or is being sent. The user is left wondering.
- **Project descriptions are inconsistent** — some projects have detailed descriptions (Shi Del, Chat Chin) while others are very brief ("A responsive portfolio website using Flutter Web"). A few more sentences on what problem each project solved would help.
- **Experience section shows company logo placeholders** — the current cards show a generic initial avatar. Adding actual company logos or clearer visual hierarchy would make this section more engaging.
- **No blog or writing section** — for a developer portfolio, having a place to share technical writing or case studies is a common expectation that isn't met here.
- **About section bio reads like a resume objective** — the current bio ("Seeking to leverage expertise...") sounds like a job application cover letter. A more personal, conversational bio would feel more authentic on a portfolio.

## What would make them actually use it

- **Add form submission feedback** — a toast or inline message saying "Message sent! I'll get back to you soon." and a loading spinner while sending would complete the contact flow.
- **Add a hamburger menu on smaller viewports** — collapsing the nav into a hamburger at `sm` breakpoint would clean up the header on mobile.
- **Polish project descriptions** — expand each project with 2-3 sentences about the problem, your role, and the outcome. Add links to case studies if available.
- **Personalize the About bio** — rewrite it in first person, less "career objective" and more "here's what I love building and why."
- **Add scroll progress indicator or back-to-top visibility** — the back-to-top link in the footer is good, but a floating button that appears after scrolling past the fold would be more discoverable on mobile.
- **Consider adding analytics visibility** — the site uses Axiom for observability, but there's no visible counter or live indicator. A small "visitors from Myanmar today" or similar touch isn't necessary but adds personality.

## What I'll change (next steps)

- [ ] Implement hamburger navigation menu for mobile viewports (below `md` breakpoint)
- [ ] Add a floating back-to-top button that appears on scroll (dismissable)
- [ ] Add analytics (e.g. visitor insights) to measure portfolio effectiveness.
- [ ] Add analytics (e.g. visitor insights, resume download tracking, contact conversion) to measure portfolio effectiveness.
- [ ] Optimize SEO further with structured data (JSON-LD), Open Graph images, and richer metadata.
- [ ] Add toast/success feedback after contact form submission with loading state
- [ ] Rewrite project descriptions to be more narrative — problem, role, outcome for each
- [ ] Rewrite the About bio in a more personal, first-person voice
