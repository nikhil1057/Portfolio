# Product Spec — Nikhil Tiwari Portfolio

## Vision

A portfolio that communicates one core message: **Nikhil builds production systems that work invisibly — from healthcare microservices processing real insurance workflows to AI tools that give agents persistent memory.** The site itself should embody this philosophy — technically excellent, visually striking, and effortlessly functional.

## Dual Identity

The site must convey two complementary sides:

1. **Full Stack Developer** — Healthcare systems, .NET/Azure, production microservices at scale (Availity, Sapiens, Odessa)
2. **AI Engineer** — Mnemo (persistent memory for AI agents), knowledge graphs, harness engineering, open-source tooling

This duality is the narrative spine. The visitor should feel the tension and synergy between "enterprise reliability" and "frontier experimentation."

## Target Audience

- Engineering managers and recruiters evaluating senior-level candidates
- Fellow developers discovering Mnemo or exploring collaboration
- Open-source community members assessing credibility

## What the Site Must Communicate

1. **Authority** — 6+ years shipping production systems across healthcare, insurance, and fintech
2. **Range** — Backend (C#, Python), frontend (Vue, Angular, React, Next.js), cloud (Azure, AWS), AI/ML tooling
3. **Impact** — Quantified results (latency reductions, architecture decisions, lines shipped, test coverage)
4. **Craft** — The site itself is a portfolio piece; motion, typography, and interaction design matter
5. **Personality** — Builder mentality, open-source contributor, someone who ships after hours because the problem is interesting

## Quality Baselines

| Reference | Takeaway |
|-----------|----------|
| adhamdannaway.com | Dual-identity split concept — visually encode the two sides |
| brittanychiang.com | Dark minimal palette, scroll-driven sections, clean hierarchy |
| stefanvitasovic.com | Typographic animations as personality expression |
| joffreyspitzer.com | GSAP/motion reveals, minimalist choreography, intentional pacing |

The portfolio should match or exceed these in perceived quality while being authentically Nikhil's.

---

## Sprint Breakdown

### Sprint 1 — Foundation & Hero

**What:** The first screen. Visitor lands, immediately understands who Nikhil is and what makes him different. The dual identity (Full Stack + AI Engineer) is visually encoded — not just stated in text.

**Why:** First impressions determine whether someone scrolls. The hero must arrest attention and communicate positioning in under 3 seconds.

**Done when:**
- [ ] Hero section loads with a typographic or motion-based entrance that communicates the dual identity
- [ ] Name, title, and one-line bio are visible without scrolling
- [ ] Dark color palette is established with consistent design tokens
- [ ] Page scores 90+ on Lighthouse performance (desktop)
- [ ] Navigation structure is present (even if sections are placeholder)
- [ ] Site is responsive across mobile, tablet, and desktop breakpoints

---

### Sprint 2 — About & Narrative

**What:** The story section. Expands on the dual identity — what Nikhil builds at work (healthcare/enterprise) vs. what he builds after hours (AI tooling/Mnemo). Establishes credibility through narrative, not bullet points.

**Why:** Recruiters and hiring managers need context. Fellow developers need to understand the depth. This section converts "interesting hero" into "I want to learn more."

**Done when:**
- [ ] About section tells the two-scales story (enterprise by day, AI tools by night)
- [ ] Key stats are surfaced (6+ years, healthcare platforms, 14K lines in Mnemo, 222 tests)
- [ ] Section uses scroll-triggered animations that feel intentional, not decorative
- [ ] Technical skills are communicated without resorting to a grid of logos
- [ ] Content hierarchy guides the eye — most important information is most prominent
- [ ] Section works as a standalone read (someone could screenshot it and understand Nikhil)

---

### Sprint 3 — Experience Timeline

**What:** Professional journey presented as a narrative timeline — Odessa → Sapiens → Availity — with emphasis on impact and architecture decisions, not job descriptions.

**Why:** This is the credibility section. It answers "what has he actually built?" with specifics. Each role should feel like a case study, not a resume entry.

**Done when:**
- [ ] Three roles are presented with company, duration, and role title
- [ ] Each role highlights 2-3 quantified accomplishments (not responsibilities)
- [ ] ProviderSearch and DocumentSearch projects are featured with architectural detail
- [ ] Timeline has visual progression (growth is felt, not just stated)
- [ ] Animations reveal content progressively as user scrolls
- [ ] Tech stacks per role are present but subordinate to impact statements

---

### Sprint 4 — Projects Showcase

**What:** Deep-dive into personal projects — Mnemo as the flagship, Kiro Harness as supporting evidence. These prove Nikhil builds beyond the job.

**Why:** Personal projects separate "senior developer" from "senior developer who also creates tools other developers use." Mnemo is the differentiator.

**Done when:**
- [ ] Mnemo is presented as a flagship project with its own visual treatment
- [ ] Key metrics are highlighted (100% recall@5, 2ms latency, 8x speedup, 14K lines, PyPI published)
- [ ] Kiro Harness is presented as a secondary project demonstrating systems thinking
- [ ] Each project links to GitHub and any live demos
- [ ] Project cards/sections have interactive elements (hover states, reveals, expandable detail)
- [ ] The section communicates "builder who ships" — not "student with side projects"

---

### Sprint 5 — Contact & Polish

**What:** Contact section, footer, and full-site interaction polish. Every micro-interaction is intentional. Page transitions, hover states, scroll behaviors are refined.

**Why:** The last 10% of polish is what separates a good portfolio from a memorable one. Contact must be frictionless. Every animation must feel earned.

**Done when:**
- [ ] Contact section with email, GitHub, and LinkedIn — styled, not just links
- [ ] All page animations are smooth (60fps), purposeful, and non-blocking
- [ ] Hover states exist on all interactive elements
- [ ] Scroll-to-section navigation works from the header
- [ ] No layout shifts, no flash of unstyled content
- [ ] Full keyboard navigation and focus management (accessibility)
- [ ] Color contrast meets WCAG AA standards

---

### Sprint 6 — Performance, SEO & Deployment

**What:** Production readiness. The site loads fast, is discoverable, and is deployed to a public URL.

**Why:** A portfolio that loads slowly or can't be found defeats its purpose. This sprint ensures the site is as production-grade as the systems Nikhil builds professionally.

**Done when:**
- [ ] Lighthouse scores: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- [ ] Open Graph meta tags render correct preview on LinkedIn/Twitter sharing
- [ ] Site is deployed to a public URL (Vercel or equivalent)
- [ ] All images are optimized (WebP/AVIF, lazy-loaded below fold)
- [ ] Bundle size is under 200KB gzipped (excluding images)
- [ ] Site works with JavaScript disabled (critical content is server-rendered)
- [ ] Custom domain is configured (if available)

---

## Non-Goals

- Blog or CMS functionality (not needed now)
- Backend/database (static site is sufficient)
- Multi-language support
- Dark/light theme toggle (dark only — it's a design choice)
- Analytics dashboard (simple analytics script is fine)

## Success Criteria

The portfolio succeeds when:
1. A hiring manager spends >60 seconds on the site (engagement)
2. A developer clicks through to Mnemo's GitHub (conversion)
3. The site itself demonstrates the technical quality claimed in the content (coherence)
