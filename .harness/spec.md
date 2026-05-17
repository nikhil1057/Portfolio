# Product Spec — Nikhil Tiwari Portfolio

## Vision

A developer portfolio that communicates Nikhil's dual identity — **Full Stack Developer** (healthcare systems, .NET, Azure, production microservices) and **AI Engineer** (Mnemo, knowledge graphs, semantic search, harness engineering) — through a single, cohesive experience that feels as polished and intentional as the systems he builds.

The site exists to:
1. **Establish credibility** — 7+ years of production-grade healthcare systems is not hobbyist work; the site must feel enterprise-serious.
2. **Signal frontier thinking** — The AI side (Mnemo, harness engineering) shows where he's going, not just where he's been.
3. **Create memorability** — Hiring managers and collaborators see dozens of portfolios. This one stays in their head because of the dual-identity concept and motion design.
4. **Drive action** — Every section funnels toward contact, GitHub, or LinkedIn.

---

## Core Narrative

Nikhil builds at two scales. By day, he architects healthcare microservices processing real insurance workflows across Aetna, BCBS, Humana, and UHC on Azure. By night, he builds tools that change how developers work with AI — persistent memory systems, knowledge graphs, and autonomous coding harnesses.

The portfolio must make this duality feel like a **superpower**, not a split focus.

---

## Audience

- Engineering managers at mid-to-large companies (healthcare, fintech, AI tooling)
- Technical recruiters scanning for senior/staff-level signals
- Open-source collaborators evaluating Mnemo
- Fellow developers who might hire or recommend

---

## Design Principles

1. **Dual-identity split** — Inspired by adhamdannaway.com's designer/coder split. The hero presents both identities as two halves of one whole, with a visual or interactive mechanism to explore each side.
2. **Dark minimal with scroll sections** — Inspired by brittanychiang.com. Dark theme, generous whitespace, content revealed through vertical scroll with sticky navigation.
3. **Typographic presence** — Inspired by stefanvitasovic.com. Large, confident type treatments for headings. The name and titles command the viewport.
4. **GSAP/motion reveals** — Inspired by joffreyspitzer.com. Elements enter with purpose — staggered reveals, smooth transitions, parallax depth. Motion is restrained but present on every scroll.

---

## Content Sections

### 1. Hero — The Split
- Full-viewport introduction
- Dual-identity concept: "Full Stack Developer" ↔ "AI Engineer"
- One-line bio beneath
- Subtle interactive element (hover/scroll reveals the other side)
- Social links (GitHub, LinkedIn, Email)

### 2. About
- The narrative of building at two scales
- Concise, personality-forward writing (not a resume dump)
- Key stats: 7+ years, 14K lines in Mnemo, 5 microservices from scratch

### 3. Experience
- Timeline or card-based layout
- Three roles: Availity (current), Sapiens, Odessa
- Each role shows: company, title, duration, 2-3 bullet accomplishments, tech tags
- Emphasis on Availity's three projects (ProviderSearch, DocumentSearch, MockProxyService)

### 4. Projects
- Featured: Mnemo (hero treatment — this is the differentiator)
- Secondary: Kiro Harness Engineering
- Each project: description, impact metrics, tech stack, link to GitHub
- Visual treatment that makes Mnemo feel like a product, not a side project

### 5. Skills
- Grouped by domain: Languages, Backend, Frontend, Cloud, AI & Data, Patterns
- Visual representation (not progress bars — those are meaningless)
- Emphasis on the breadth: C# + Python + TypeScript across all layers

### 6. Contact
- Clear CTA
- Email, GitHub, LinkedIn
- Brief closing statement

---

## Quality Bar

The site must feel like it belongs alongside:
- adhamdannaway.com (concept clarity, split identity)
- brittanychiang.com (dark polish, scroll UX, accessibility)
- joffreyspitzer.com (motion quality, minimalist reveals)

It must NOT feel like:
- A template with content swapped in
- A resume converted to HTML
- An over-animated showreel that prioritizes flash over substance

---

## Sprint Breakdown

### Sprint 1 — Foundation & Hero

**What:** Project scaffolding, global styles, typography system, and the hero section with dual-identity split concept.

**Done when:**
- Next.js + Tailwind + TypeScript project builds and runs locally
- Dark theme with custom color palette is applied globally
- Typography scale is defined (large display headings, body, captions)
- Hero section fills the viewport with name, dual titles ("Full Stack Developer" / "AI Engineer"), one-line bio, and social links
- The dual-identity split has a visual/interactive treatment (not just two lines of text)
- Page is responsive across mobile, tablet, and desktop
- Lighthouse accessibility score ≥ 90

---

### Sprint 2 — About & Experience Sections

**What:** The narrative "About" section and the experience timeline with role details.

**Done when:**
- About section presents the two-scales narrative in 2-3 short paragraphs
- Key stats are visually highlighted (not buried in prose)
- Experience section shows all three roles in chronological order (newest first)
- Each role displays: company name, title, date range, 2-3 accomplishments, tech tags
- Availity section expands to show the three sub-projects with distinct accomplishments
- Scroll-triggered entrance animations are present (stagger, fade-up, or slide)
- Sticky section navigation highlights the active section

---

### Sprint 3 — Projects Section

**What:** Featured project showcase with Mnemo as the hero project and Kiro Harness as secondary.

**Done when:**
- Mnemo has a dedicated feature card/section with: description, 3+ impact metrics (14K lines, 100% recall@5, 2ms latency, 8x speedup, 222 tests), tech stack, GitHub link
- Kiro Harness has a secondary card with: description, key accomplishment (12 iterations, 3.5 hours, zero manual code), tech stack, GitHub link
- Projects have visual hierarchy — Mnemo is clearly the flagship
- Hover/interaction states provide depth (scale, glow, parallax tilt, or similar)
- Links open in new tabs with proper rel attributes
- Section has entrance animations consistent with Sprint 2

---

### Sprint 4 — Skills & Contact

**What:** Technical skills visualization and the contact/footer CTA.

**Done when:**
- Skills are grouped by domain (Languages, Backend, Frontend, Cloud, AI & Data, Patterns)
- Visualization is meaningful (grouped tags, icon grids, or categorized lists — not progress bars)
- Primary skills (C#, Python, TypeScript, Azure, .NET) have visual emphasis over secondary ones
- Contact section has a clear heading, brief closing line, and prominent email/GitHub/LinkedIn links
- Footer is minimal with copyright and social links
- All external links have proper accessibility attributes

---

### Sprint 5 — Animation & Polish

**What:** GSAP or Framer Motion animation pass across all sections, performance optimization, and interaction refinements.

**Done when:**
- Every section has scroll-triggered entrance animations (no section appears without motion)
- Hero has a signature animation (text reveal, split transition, or particle effect)
- Smooth scroll behavior between sections
- Navigation highlights update on scroll position
- Page transitions feel cohesive (consistent easing, timing, and direction)
- No layout shift during animations (CLS = 0)
- Total page weight < 500KB (excluding fonts)
- Lighthouse Performance score ≥ 90

---

### Sprint 6 — Responsive, SEO & Final QA

**What:** Full responsive audit, SEO metadata, Open Graph tags, and cross-browser/device testing.

**Done when:**
- Site renders correctly at 320px, 768px, 1024px, 1440px, and 1920px widths
- Touch interactions work on mobile (no hover-dependent functionality)
- Meta title, description, and Open Graph image are set
- Semantic HTML throughout (proper heading hierarchy, landmarks, ARIA where needed)
- All images have alt text; decorative images are marked aria-hidden
- Keyboard navigation works end-to-end (tab order, focus indicators, skip links)
- No console errors in production build
- Deployed to Vercel (or equivalent) with a live URL
- Lighthouse scores: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 90
