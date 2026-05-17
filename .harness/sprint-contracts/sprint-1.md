# Sprint 1 Contract

## Features

- Hero section with animated introduction: "Nikhil Tiwari — Full Stack Developer & AI Engineer"
- Dual identity visually communicated above the fold within 3 seconds of page load (split concept or typographic treatment showing both sides)
- Dark minimal theme with considered typography hierarchy (minimum 3 levels: heading, subheading, body)
- Single-page scroll layout with fixed navigation (Home, About, Work, Contact)
- Navigation is keyboard-navigable with proper ARIA labels and roles
- Fully responsive: mobile-first design working at 375px, 768px, and 1440px
- Hero tagline/subtitle: "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night"
- Smooth scroll behavior for navigation links

## Content (from profile.md)

- **Name:** Nikhil Tiwari
- **Title:** Full Stack Developer & AI Engineer
- **Tagline:** "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night — shipping production systems on Azure/AWS while creating open-source tools that give AI agents persistent memory."
- **Dual Identity Side 1:** Full Stack Developer — healthcare systems, .NET, Azure, production microservices
- **Dual Identity Side 2:** AI Engineer — Mnemo, knowledge graphs, semantic search, harness engineering
- **Navigation Items:** Home, About, Work, Contact
- **Location:** Bangalore, India
- **Experience:** 6+ years

## Animations

1. **Hero name reveal** — "Nikhil Tiwari" fades up and slides in from bottom (translateY 20px → 0) with 0.6s duration, ease-out, triggers on page load after 0.3s delay
2. **Dual identity stagger** — "Full Stack Developer" and "AI Engineer" appear sequentially with 0.3s stagger between them, each sliding in from opposite sides (left/right) with 0.5s duration, triggers 0.8s after page load
3. **Tagline fade-in** — subtitle text fades in (opacity 0→1) with 0.4s duration, triggers 1.4s after page load
4. **Navigation slide-down** — nav bar slides down from top (translateY -100% → 0) with 0.4s duration, ease-out, triggers on page load
5. **Scroll indicator pulse** — subtle bounce animation on a scroll-down indicator arrow, infinite loop with 1.5s period, starts after hero animations complete (~2s)
6. **Section reveal on scroll** — sections below the fold fade up (translateY 30px → 0, opacity 0→1) with 0.5s duration when scrolling into viewport (triggered at 20% visibility via Intersection Observer)

## Testable Behaviors (Playwright)

1. Navigate to `/` → page loads successfully with HTTP 200
2. Hero section is visible in the viewport on initial load
3. Text "Nikhil Tiwari" is visible in the hero section within 2 seconds of page load
4. Text "Full Stack Developer" is visible in the hero section within 2 seconds of page load
5. Text "AI Engineer" is visible in the hero section within 2 seconds of page load
6. Dual identity (both "Full Stack Developer" and "AI Engineer") is visible above the fold (within viewport height) without scrolling
7. A tagline or subtitle containing "healthcare" and "AI" is visible in the hero
8. Navigation contains links: Home, About, Work, Contact
9. Navigation is visible and fixed at the top of the viewport
10. Clicking "About" nav link scrolls the page (scroll position changes)
11. Navigation links are keyboard-focusable (Tab key cycles through them)
12. Navigation has appropriate ARIA roles (nav landmark with role="navigation" or `<nav>` element)
13. Page has at least 3 distinct font-size levels in the typography hierarchy
14. Background color is dark (computed background-color has luminance < 0.2)
15. At viewport 375px width, hero content is fully visible without horizontal overflow
16. At viewport 768px width, layout adjusts appropriately (no horizontal scroll)
17. At viewport 1440px width, content is centered and does not stretch edge-to-edge
18. Hero section has animated elements (elements with CSS transitions, animations, or transform properties)
19. A scroll-down indicator or visual cue exists below the hero content
20. Page has a `<title>` element containing "Nikhil Tiwari"
21. No horizontal scrollbar appears at any tested viewport width
22. Smooth scroll behavior is enabled (CSS `scroll-behavior: smooth` or JS smooth scroll)
23. The page contains a `<main>` landmark element
24. Color contrast between hero text and background meets WCAG AA (contrast ratio ≥ 4.5:1)
25. Page loads completely (DOMContentLoaded) in under 3 seconds on simulated fast 3G

## Done Definition

ALL 25 testable behaviors must pass when verified by Playwright against the running development server.
