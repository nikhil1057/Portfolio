# Sprint 6 Contract

## Features

- Full responsive audit across 5 breakpoints (320px, 768px, 1024px, 1440px, 1920px)
- Touch-friendly interactions on mobile (no hover-dependent functionality blocks content)
- SEO metadata: meta title, description, Open Graph tags with image
- Semantic HTML audit: proper heading hierarchy (h1→h2→h3), landmarks (header, main, nav, footer, section), ARIA labels where needed
- Alt text on all images; decorative elements marked aria-hidden
- Keyboard navigation: logical tab order, visible focus indicators, skip-to-content link
- No console errors in production build
- Deployment to Vercel with a live URL
- Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 90

## Content (from profile.md)

- **Meta Title:** Nikhil Tiwari — Full Stack Developer & AI Engineer
- **Meta Description:** Full Stack Developer who builds healthcare platforms by day and AI developer tools by night — shipping production systems on Azure/AWS while creating open-source tools that give AI agents persistent memory.
- **OG Title:** Nikhil Tiwari — Full Stack Developer & AI Engineer
- **OG Description:** 6+ years building healthcare microservices on Azure and AI developer tools like Mnemo. C#, Python, TypeScript.
- **OG URL:** (deployed Vercel URL)
- **Contact links:** nikhiltiwari1057@gmail.com, github.com/nikhil1057, linkedin.com/in/nikhiltiwari1057
- **Location:** Bangalore, India
- **Skip link target:** main content area

## Animations

- No new animations introduced in this sprint
- Existing animations must not cause layout shift (CLS = 0)
- All scroll-triggered animations must work on touch/swipe (no hover-only triggers blocking content)
- Animations respect `prefers-reduced-motion` media query — disable or reduce all motion when user prefers reduced motion
- Focus indicators animate with a 0.2s ease transition on outline-offset for smooth appearance

## Testable Behaviors (Playwright)

1. Navigate to / at viewport 320px width → hero section is fully visible without horizontal overflow
2. Navigate to / at viewport 768px width → all sections render without overlapping or clipping
3. Navigate to / at viewport 1024px width → layout uses appropriate grid/flex for medium screens
4. Navigate to / at viewport 1440px width → content is centered with proper max-width constraints
5. Navigate to / at viewport 1920px width → no content stretches beyond readable line lengths
6. On mobile (375px) → no element requires hover to reveal content; all interactive elements are tap-accessible
7. Page `<head>` contains `<meta name="description">` with content mentioning "Full Stack Developer" and "AI"
8. Page `<head>` contains `<meta property="og:title">` with "Nikhil Tiwari"
9. Page `<head>` contains `<meta property="og:description">` with meaningful content (length > 50 chars)
10. Page `<head>` contains `<meta property="og:type" content="website">`
11. Page has exactly one `<h1>` element containing "Nikhil Tiwari"
12. All `<img>` elements have non-empty `alt` attributes OR are marked with `aria-hidden="true"` or `role="presentation"`
13. Page contains landmark elements: `<header>`, `<main>`, `<footer>`
14. A skip-to-content link exists (visible on focus) that links to main content
15. Pressing Tab from the top of the page → focus moves through interactive elements in logical order (skip link → nav → hero links → sections)
16. All focused elements have a visible focus indicator (outline or ring visible)
17. Navigation links have `aria-current="page"` or equivalent active state indicator
18. All external links (`github.com`, `linkedin.com`) have `target="_blank"` and `rel="noopener noreferrer"`
19. Run `next build` → exits with code 0 and no errors
20. No `console.error` messages appear when browsing the production build
21. The `<html>` element has a `lang="en"` attribute
22. Color contrast ratio meets WCAG AA (4.5:1 for normal text, 3:1 for large text) on all visible text
23. The page includes `<meta name="viewport" content="width=device-width, initial-scale=1">` for proper mobile scaling
24. Social/contact links (email, GitHub, LinkedIn) are present and have accessible names
25. When `prefers-reduced-motion` is enabled → CSS animations/transitions are disabled or reduced

## Done Definition

ALL testable behaviors must pass.
