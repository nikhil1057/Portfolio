# Sprint 1 Contract

## Features

- Hero section with typographic/motion entrance encoding the dual identity (Full Stack Developer + AI Engineer)
- Name, title, and one-line bio visible above the fold
- Dark color palette with consistent design tokens (CSS custom properties)
- Navigation header with section links (Hero, About, Experience, Projects, Contact) — sections can be placeholder anchors
- Responsive layout across mobile (375px), tablet (768px), and desktop (1440px)
- Next.js + Tailwind CSS foundation with Framer Motion for animations

## Content (from profile.md)

- **Name:** Nikhil Tiwari
- **Title:** Full Stack Developer & AI Engineer
- **One-Line Bio:** Full Stack Developer who builds healthcare platforms by day and AI developer tools by night — shipping production systems on Azure/AWS while creating open-source tools that give AI agents persistent memory.
- **Dual Identity Left:** Full Stack Developer — healthcare systems, .NET, Azure, production microservices
- **Dual Identity Right:** AI Engineer — Mnemo, knowledge graphs, semantic search, harness engineering
- **Nav Links:** About, Experience, Projects, Contact
- **Social Links:** github.com/nikhil1057, linkedin.com/in/nikhiltiwari1057, nikhiltiwari1057@gmail.com

## Animations

1. **Name reveal** — "Nikhil Tiwari" fades up from 20px below with opacity 0→1 over 0.6s, easing `[0.25, 0.4, 0, 1]`, delay 0.2s after page load
2. **Title split reveal** — "Full Stack Developer" slides in from left and "AI Engineer" slides in from right, each over 0.5s with 0.3s stagger after name completes
3. **Divider/ampersand pulse** — The `&` or visual divider between the two titles scales from 0.8→1.0 with a subtle glow, 0.4s duration, triggers after both titles land
4. **Bio text reveal** — One-line bio fades in with a 0.3s duration, 0.2s delay after title animation completes
5. **Nav items stagger** — Each nav link fades in from above (translateY -10px → 0) with 0.1s stagger between items, total sequence ~0.5s, starts 0.3s after page load
6. **Social links fade** — GitHub, LinkedIn, Email icons fade in simultaneously with 0.4s duration after bio reveals
7. **Scroll indicator** — A subtle bouncing chevron or arrow at bottom of hero, infinite bounce animation (translateY 0→8px→0) over 1.5s

## Testable Behaviors (Playwright)

1. Navigate to `/` → page loads without errors (no console errors)
2. Hero section is visible in the viewport on load
3. Text "Nikhil Tiwari" is visible within 2 seconds of page load
4. Text "Full Stack Developer" is visible within 3 seconds of page load
5. Text "AI Engineer" is visible within 3 seconds of page load
6. The one-line bio containing "healthcare platforms by day" is visible within 4 seconds
7. Navigation header is visible at top of page
8. Nav contains link with text "About"
9. Nav contains link with text "Experience"
10. Nav contains link with text "Projects"
11. Nav contains link with text "Contact"
12. A link to github.com/nikhil1057 is present on the page
13. A link to linkedin.com/in/nikhiltiwari1057 is present on the page
14. Page background color is dark (luminance < 0.2)
15. Text color provides sufficient contrast against background (light text on dark)
16. At viewport 375px width, hero content stacks vertically and remains readable
17. At viewport 768px width, layout adapts without horizontal overflow
18. At viewport 1440px width, content is centered with max-width constraint
19. No horizontal scrollbar appears at any tested viewport width
20. A scroll indicator element (arrow/chevron) is visible at bottom of hero section
21. The dual identity titles ("Full Stack Developer" and "AI Engineer") are visually distinct/separated
22. Page has a valid `<title>` tag containing "Nikhil Tiwari"
23. Page has a meta description tag present
24. All navigation links have valid href attributes starting with `#`
25. Hero section height is at least 90vh (fills the viewport)

## Done Definition

ALL 25 testable behaviors must pass when verified by Playwright against the running dev server.
