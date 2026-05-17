# Portfolio Spec: Nikhil Tiwari

## Overview

A premium developer portfolio communicating that Nikhil Tiwari is a production-focused Full Stack Developer & AI Engineer with 7+ years of experience. The site targets engineering managers, recruiters, and fellow developers — showcasing healthcare platform expertise (Availity, Sapiens) alongside cutting-edge AI tooling (Mnemo). The dual identity — enterprise healthcare by day, open-source AI tools by night — is the narrative thread.

Goals:
- Demonstrate technical depth through architecture diagrams and real system outputs
- Position Nikhil as a rare hybrid: healthcare domain expert + AI tooling pioneer
- Feel like a developer's personal site — terminal-inspired, dark, confident — not a template

## Tech Stack

- Next.js 14 (App Router, static export)
- TypeScript (strict)
- Tailwind CSS
- Framer Motion + GSAP (animations)
- Static export for GitHub Pages

## Design Direction

**Color Palette:**
- Background: `#0a0a0f` (near-black)
- Surface: `#12121a` (card backgrounds)
- Border: `#1e1e2e` (subtle dividers)
- Primary accent: `#64ffda` (mint/terminal green — nod to brittanychiang.com)
- Secondary accent: `#cba6f7` (soft purple for AI/Mnemo sections)
- Text primary: `#e4e4e7`
- Text muted: `#71717a`

**Typography:**
- Headings: `JetBrains Mono` (monospace, developer identity)
- Body: `Inter` (clean readability)
- Code snippets: `Fira Code` with ligatures

**Spacing System:**
- 8px base grid
- Section padding: `py-24 md:py-32`
- Content max-width: `max-w-5xl`

**Animation Philosophy:**
- Scroll-triggered reveals (IntersectionObserver + Framer Motion)
- GSAP for complex timeline sequences (hero text, page transitions)
- Purposeful motion: every animation communicates hierarchy or draws attention to content
- Staggered children on section entry (50ms delay between items)
- No gratuitous parallax or decorative-only motion
- Reference: brittanychiang.com's restraint, stefanvitasovic.com's typographic motion, joffreyspitzer.com's subtle GSAP reveals

## Sprints

### Sprint 1: Foundation + Hero

Project scaffold with Next.js 14 App Router, TypeScript strict, Tailwind CSS, Framer Motion, and GSAP. Implement the root layout with a fixed side navigation (vertical nav links on desktop, hamburger on mobile). Build the hero section featuring:
- Animated typing effect for "Full Stack Developer & AI Engineer"
- Staggered fade-up for name, title, one-line bio
- Subtle terminal-style cursor blink
- A floating code snippet or terminal block showing a real command (`pip install mnemo-dev`)
- Smooth scroll behavior to sections
- Responsive: mobile-first, works at 375px–1440px+

**Done when:**
- `npm run build` succeeds with zero errors
- `npx tsc --noEmit` passes
- Hero section visible at `/` with animated text entry completing within 2s
- Navigation links exist for all 5 sections (About, Experience, Projects, Mnemo, Contact)
- Clicking a nav link smooth-scrolls to the corresponding section anchor
- Page is responsive: no horizontal overflow at 375px viewport width
- Lighthouse accessibility score ≥ 90

---

### Sprint 2: About + Skills

Build the About section with Nikhil's narrative (from profile.md "About" section) and a skills visualization. Implement:
- About text with scroll-triggered fade-in
- Skills grouped by category (Languages, Backend, Frontend, Cloud, AI, Patterns) displayed as interactive chips/badges
- Animated skill bars or radial charts for primary technologies (C#, Python, TypeScript, Azure)
- A stats counter section: "7+ Years", "5 Microservices Built", "14K Lines (Mnemo)", "222 Tests Passing" — numbers animate on scroll into view
- Education and certification displayed minimally

**Done when:**
- About section renders full bio text from profile
- Skills are grouped into 6 categories with correct items in each
- Stats counters animate from 0 to target value when scrolled into view
- All skill items from profile.md are represented
- Section is scroll-triggered (elements invisible until 20% in viewport)
- Responsive layout: single column on mobile, multi-column on desktop

---

### Sprint 3: Experience Timeline

Build a vertical timeline for work history (Availity → Sapiens → Odessa). Each entry includes:
- Company name, role, dates, location
- Expandable/collapsible accomplishment bullets (show top 3, "Show more" for rest)
- Tech stack badges per role
- Timeline connector line with animated dot on scroll
- Active state highlighting as user scrolls through entries

**Done when:**
- Three timeline entries render in reverse chronological order (Availity, Sapiens, Odessa)
- Each entry shows company, role, dates, and location
- Accomplishment bullets match profile.md content exactly
- "Show more" toggle reveals additional bullets (Availity entries have 5+ bullets each)
- Tech badges render for each role
- Timeline dot animates/highlights as the section scrolls into view
- Responsive: timeline shifts from center-aligned (desktop) to left-aligned (mobile)

---

### Sprint 4: Projects Showcase

Build the professional projects section showcasing ProviderSearch, DocumentSearch, and MockProxyService. Each project card includes:
- Project title and one-line description
- Architecture diagram (SVG or styled div-based diagram showing service relationships)
- Key accomplishments (top 3 per project)
- Tech stack badges
- Hover state with subtle scale + glow effect

**Done when:**
- Three project cards render (ProviderSearch, DocumentSearch, MockProxyService)
- Each card has title, description, accomplishments, and tech badges
- Architecture diagrams are present (at minimum: labeled boxes with arrows showing service flow)
- Hover interaction: card scales slightly and shows accent border/glow
- Cards stagger-animate on scroll entry
- Responsive: cards stack vertically on mobile, grid on desktop

---

### Sprint 5: Personal Projects (Mnemo + Harness)

Dedicated showcase for Mnemo and Kiro Harness Engineering — these get premium treatment as passion projects. Implement:
- **Mnemo section:** Large feature block with animated knowledge graph visualization (nodes + edges using SVG/canvas), key stats (14K lines, 222 tests, 2ms search, 8x speedup), install command (`pip install mnemo-dev`), GitHub link, description of triple-stream search engine
- **Harness section:** Description of the Generator↔Evaluator adversarial loop, iteration stats (12 iterations, 3.5 hours, zero manual code), link to GitHub
- Both sections use the secondary accent color (`#cba6f7`) to visually distinguish personal/AI work from enterprise work

**Done when:**
- Mnemo section renders with: description, stats (14K lines, 222 tests, 2ms latency, 8x speedup), install command, GitHub link
- Knowledge graph visualization animates (nodes appear, edges draw in)
- Harness section renders with: description, iteration stats, GitHub link
- Both sections use purple accent color
- GitHub links point to correct URLs (github.com/Mnemo-mcp/Mnemo, github.com/Mnemo-mcp/Harness)
- Sections animate on scroll

---

### Sprint 6: Contact + Polish

Build the contact section and apply final polish across the entire site:
- Contact section with email link, GitHub, LinkedIn icons/links
- Minimal footer with copyright
- Page-level smooth scroll-spy (nav highlights active section)
- GSAP page-load sequence (orchestrated hero → nav → content reveal)
- Performance optimization: lazy-load below-fold sections, optimize images, preload fonts
- Meta tags (Open Graph, Twitter Card) for social sharing
- Final responsive audit across breakpoints (375px, 768px, 1024px, 1440px)
- Ensure all animations respect `prefers-reduced-motion`

**Done when:**
- Contact section shows email, GitHub link, LinkedIn link
- Footer renders with "© 2026 Nikhil Tiwari"
- Navigation highlights the currently visible section on scroll
- `npm run build` produces static export with no errors
- `npx tsc --noEmit` passes
- Lighthouse performance score ≥ 90
- Lighthouse accessibility score ≥ 90
- `prefers-reduced-motion` media query disables animations
- No horizontal overflow at any breakpoint (375px, 768px, 1024px, 1440px)
- Open Graph meta tags present in `<head>`
