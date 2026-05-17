# Sprint 5 Contract

## Features

- GSAP or Framer Motion animation pass across ALL sections
- Hero signature animation (text reveal with staggered character/word animation)
- Scroll-triggered entrance animations for every section (About, Experience, Projects, Skills, Contact)
- Smooth scroll behavior between navigation links and sections
- Navigation active-state updates on scroll position
- Consistent easing and timing across all transitions
- Performance optimization: no layout shift (CLS = 0), total page weight < 500KB excluding fonts
- Lighthouse Performance score ≥ 90

## Content (from profile.md)

### Hero Section Animation Content
- Name: "Nikhil Tiwari"
- Dual titles: "Full Stack Developer" ↔ "AI Engineer"
- Bio: "Full Stack Developer who builds healthcare platforms by day and AI developer tools by night — shipping production systems on Azure/AWS while creating open-source tools that give AI agents persistent memory."
- Social links: GitHub (github.com/nikhil1057), LinkedIn (linkedin.com/in/nikhiltiwari1057), Email (nikhiltiwari1057@gmail.com)

### About Section Content
- Narrative: "I build things at two scales. At work, I architect healthcare microservices that process real insurance workflows — provider search, eligibility checks, prior authorizations — across Aetna, BCBS, Humana, and UHC on Azure. After hours, I build tools that change how developers work with AI — persistent memory systems, knowledge graphs, and autonomous coding harnesses."
- Stats: 6+ years experience, 14K+ lines in Mnemo, 5 microservices from scratch

### Experience Roles
- Availity — Senior Developer (July 2025 – Present)
- Sapiens — Senior Developer (September 2022 – July 2025)
- Odessa Inc. — Senior Software Engineer (April 2019 – September 2022)

### Projects
- Mnemo: 14,000+ lines, 100% recall@5, 2ms latency, 8x speedup, 222 tests
- Kiro Harness: 12 iterations, 3.5 hours, zero manual code

### Skills Groups
- Languages: C#, Python, TypeScript/JavaScript, SQL, HTML/CSS
- Backend: .NET Core/.NET 8, FastAPI, Entity Framework, LINQ
- Frontend: Angular, Vue 3, Next.js, React, Tailwind CSS
- Cloud: Azure (App Service, APIM, Cosmos DB, Key Vault, Functions), AWS (ECS/EKS), Docker, Kubernetes
- AI & Data: ONNX Runtime, tree-sitter, NetworkX, MCP Protocol
- Patterns: Microservices, Resilience (Polly), Cache-first, Payer strategy pattern

## Animations

### Hero Section
- **Name text reveal:** Each character of "Nikhil Tiwari" animates in with opacity 0→1 and translateY 20px→0, staggered at 0.05s per character, total duration ~0.7s, ease: power3.out
- **Dual title split animation:** "Full Stack Developer" slides in from left, "AI Engineer" slides in from right, 0.6s duration each, 0.3s delay after name completes, ease: power2.out
- **Bio line fade-up:** opacity 0→1, translateY 30px→0, 0.5s duration, 0.2s delay after titles, ease: power2.out
- **Social links stagger:** Each link fades in with scale 0.8→1 and opacity 0→1, staggered 0.1s apart, 0.4s duration each, ease: back.out(1.7)

### About Section (scroll-triggered)
- **Trigger:** When section enters 80% of viewport
- **Heading:** opacity 0→1, translateX -30px→0, 0.5s, ease: power2.out
- **Paragraphs:** Each paragraph fades up (translateY 40px→0, opacity 0→1), staggered 0.2s apart, 0.6s duration
- **Stats:** Counter animation from 0 to final value over 1.5s with ease: power1.out, triggered when stats enter viewport

### Experience Section (scroll-triggered)
- **Trigger:** When section enters 80% of viewport
- **Section heading:** opacity 0→1, translateY 20px→0, 0.4s
- **Timeline/cards:** Each role card slides in from alternating sides (odd from left, even from right), translateX ±50px→0, opacity 0→1, staggered 0.3s apart, 0.6s duration, ease: power2.out
- **Tech tags:** Stagger in with scale 0→1, 0.3s each, 0.05s stagger, ease: back.out(1.7)

### Projects Section (scroll-triggered)
- **Trigger:** When section enters 80% of viewport
- **Mnemo card:** Scale 0.95→1, opacity 0→1, 0.7s, ease: power3.out, with subtle glow pulse on complete
- **Secondary card (Kiro Harness):** translateY 40px→0, opacity 0→1, 0.5s, 0.3s delay after Mnemo
- **Metric numbers:** Counter animation 0→value, 1.2s, ease: power1.out
- **Hover state:** Cards scale to 1.02 with box-shadow expansion, 0.3s transition

### Skills Section (scroll-triggered)
- **Trigger:** When section enters 80% of viewport
- **Category headings:** Stagger in translateY 20px→0, opacity 0→1, 0.4s each, 0.15s stagger
- **Skill tags/items:** Cascade reveal — each tag fades in with translateY 10px→0, 0.3s duration, 0.03s stagger per tag within each group, groups staggered 0.2s apart
- **Primary skills (C#, Python, TypeScript, Azure, .NET):** Slightly larger scale animation (1.05 pulse) on reveal

### Contact Section (scroll-triggered)
- **Trigger:** When section enters 80% of viewport
- **Heading:** opacity 0→1, translateY 20px→0, 0.5s
- **CTA text:** opacity 0→1, 0.4s, 0.2s delay
- **Contact links:** Stagger in from bottom, translateY 30px→0, opacity 0→1, 0.4s each, 0.1s stagger, ease: power2.out

### Global
- **Smooth scroll:** CSS scroll-behavior: smooth + JS scrollIntoView with behavior: 'smooth'
- **Navigation active state:** IntersectionObserver updates active nav link with 0.3s color transition
- **Page load sequence:** Hero animations fire immediately on load; all other sections wait for scroll

## Testable Behaviors (Playwright)

1. Navigate to / → hero section is visible within the viewport
2. Hero name "Nikhil Tiwari" text is visible and fully rendered (not clipped or hidden)
3. Dual titles "Full Stack Developer" and "AI Engineer" are both visible in the hero
4. Bio text is visible below the titles
5. Social links (GitHub, LinkedIn, Email) are visible and clickable in the hero
6. Scroll to About section → section heading becomes visible with content
7. About section paragraphs are visible after scrolling to them
8. Stats (years of experience, lines of code, microservices) are visible in the About section
9. Scroll to Experience section → section heading is visible
10. All three role cards (Availity, Sapiens, Odessa) are visible after scrolling through Experience
11. Tech tags are visible on experience cards
12. Scroll to Projects section → Mnemo project card is visible with metrics
13. Mnemo card displays impact metrics (14,000+ lines, 100% recall@5, 2ms latency)
14. Kiro Harness card is visible below/after Mnemo
15. Project cards have hover interaction (scale or shadow change on hover)
16. Scroll to Skills section → skill categories are visible (Languages, Backend, Frontend, Cloud, AI & Data, Patterns)
17. Primary skills (C#, Python, TypeScript) have visual emphasis compared to secondary skills
18. Scroll to Contact section → contact heading and CTA are visible
19. Contact links (Email, GitHub, LinkedIn) are visible and have correct href attributes
20. Navigation links highlight/update active state when scrolling to different sections
21. Clicking a navigation link smooth-scrolls to the corresponding section
22. No horizontal overflow or layout shift during any scroll interaction (page width stays consistent)
23. All animations have completed (no elements stuck at opacity 0 or translated off-screen) after full page scroll
24. Page loads without console errors related to animation libraries
25. Lighthouse Performance score ≥ 90 (verified via page weight < 500KB excluding fonts and no render-blocking issues)

## Done Definition

ALL testable behaviors must pass. Every section must have scroll-triggered entrance animations. Hero must have a signature text reveal animation. Navigation must update active state on scroll. No layout shift during animations. Page weight < 500KB excluding fonts. Lighthouse Performance ≥ 90.
