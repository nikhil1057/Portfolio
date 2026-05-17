# Sprint 1 Contract

## Features

1. **Project Scaffold** — Next.js 14 App Router, TypeScript strict, Tailwind CSS, Framer Motion, GSAP installed and configured
2. **Root Layout** — Fixed side navigation with vertical nav links on desktop, hamburger menu on mobile
3. **Hero Section** — Animated typing effect, staggered fade-up, terminal cursor blink, floating code snippet
4. **Smooth Scroll** — Clicking nav links smooth-scrolls to section anchors
5. **Responsive Design** — Mobile-first, works at 375px–1440px+ with no horizontal overflow
6. **Section Anchors** — Empty placeholder sections for About, Experience, Projects, Mnemo, Contact

## Content (from profile.md)

- **Name:** Nikhil Tiwari
- **Title:** Full Stack Developer & AI Engineer
- **One-Line Bio:** Full Stack Developer who builds healthcare platforms by day and AI developer tools by night — shipping production systems on Azure/AWS while creating open-source tools that give AI agents persistent memory.
- **Floating Terminal Command:** `pip install mnemo-dev`
- **Navigation Links:** About, Experience, Projects, Mnemo, Contact
- **Location:** Bangalore, India

## Design Tokens

- Background: `#0a0a0f`
- Surface: `#12121a`
- Border: `#1e1e2e`
- Primary accent: `#64ffda` (mint/terminal green)
- Secondary accent: `#cba6f7` (soft purple)
- Text primary: `#e4e4e7`
- Text muted: `#71717a`
- Headings font: `JetBrains Mono`
- Body font: `Inter`
- Code font: `Fira Code`
- Section padding: `py-24 md:py-32`
- Content max-width: `max-w-5xl`

## Animations

1. **Hero text typing effect** — "Full Stack Developer & AI Engineer" types out character-by-character over 1.5s with a blinking terminal cursor (`|`) at the end, cursor blinks at 530ms interval
2. **Staggered fade-up** — Name appears first (0ms delay, 0.5s duration, translateY 20px→0), then title (200ms delay), then one-line bio (400ms delay). Each fades from opacity 0→1 and translates up. Easing: `easeOut`
3. **Terminal cursor blink** — CSS animation, opacity toggles 0→1 every 530ms, infinite loop
4. **Floating terminal block** — Fades in from right (translateX 20px→0) with 600ms delay after hero text completes, 0.5s duration
5. **Navigation reveal** — Nav links stagger in from left with 50ms delay between each, 0.3s duration per link, triggered on page load after 800ms initial delay
6. **Smooth scroll** — CSS `scroll-behavior: smooth` on html element, duration ~500ms native browser smooth scroll
7. **Mobile hamburger** — Menu slides in from right, 0.3s ease-in-out transition

## Testable Behaviors (Playwright)

1. Navigate to `/` → page loads without errors, status 200
2. Hero section is visible within the viewport on page load
3. Name "Nikhil Tiwari" is visible in the hero section
4. Title "Full Stack Developer & AI Engineer" is visible in the hero section
5. One-line bio text containing "healthcare platforms by day" is visible
6. A blinking cursor element exists in the hero section (has CSS animation)
7. A terminal/code block is visible containing the text `pip install mnemo-dev`
8. Navigation contains exactly 5 links: About, Experience, Projects, Mnemo, Contact
9. Navigation is visible and fixed (position: fixed or sticky) on desktop viewport (1024px)
10. Clicking "About" nav link scrolls the page to the About section anchor (`#about`)
11. Clicking "Experience" nav link scrolls to `#experience` section
12. Clicking "Projects" nav link scrolls to `#projects` section
13. Clicking "Mnemo" nav link scrolls to `#mnemo` section
14. Clicking "Contact" nav link scrolls to `#contact` section
15. At 375px viewport width, no horizontal scrollbar appears (body scrollWidth ≤ viewportWidth)
16. At 375px viewport width, a hamburger/menu button is visible instead of full nav links
17. Clicking the hamburger button reveals the navigation links
18. Hero text animation completes within 2 seconds of page load (all hero text elements have opacity 1)
19. The page uses dark background color (`#0a0a0f` or near-black)
20. Font family for headings includes "JetBrains Mono" (monospace)
21. `npm run build` completes with exit code 0
22. `npx tsc --noEmit` completes with exit code 0
23. Each section anchor (`#about`, `#experience`, `#projects`, `#mnemo`, `#contact`) exists as an element with the corresponding id
24. The terminal block has a monospace font (Fira Code or fallback monospace)
25. Page has no accessibility violations on heading hierarchy (h1 exists, followed by h2s)

## Done Definition

ALL 25 testable behaviors must pass. The site must build successfully, pass TypeScript strict checking, render the hero with animations completing within 2s, have working navigation with smooth scroll, and be fully responsive from 375px to 1440px with no horizontal overflow.
