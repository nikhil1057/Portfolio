# Product Spec — Nikhil Tiwari Portfolio

## Vision

A portfolio that communicates one core message: **Nikhil builds production systems that work invisibly — from healthcare microservices processing real insurance workflows to AI tools that give agents persistent memory.** The site itself should embody this philosophy — technically excellent, visually striking, and effortlessly functional.

## Dual Identity

The site must convey two complementary sides:

1. **Full Stack Developer** — Healthcare systems, .NET/Azure, production microservices, resilience patterns, enterprise-grade architecture
2. **AI Engineer** — Mnemo, knowledge graphs, semantic search, harness engineering, open-source tooling

These aren't separate careers — they're two expressions of the same instinct: build systems that remember, adapt, and just work.

## Audience

- Engineering managers and technical recruiters evaluating senior-level candidates
- Fellow developers discovering Mnemo or exploring collaboration
- Open-source users wanting to understand the person behind the tool

## What the Site Must Communicate

| Message | Why It Matters |
|---------|---------------|
| 6+ years shipping production systems | Establishes seniority and reliability |
| Healthcare domain expertise (Aetna, BCBS, Humana, UHC) | Differentiates from generic full-stack devs |
| Built and published Mnemo (14K lines, PyPI, VS Code extension) | Shows initiative beyond employment |
| Deep Azure + AWS cross-cloud experience | Signals infrastructure maturity |
| Production-first mindset (CI/CD, Docker, resilience, audit logging) | Communicates engineering values |
| Dual identity without fragmentation | Shows range without seeming unfocused |

## Personality & Tone

- Confident but not boastful — let the work speak
- Technical depth surfaced through specifics, not jargon
- Dark, minimal aesthetic — the content is the hero
- Motion used purposefully to guide attention, never to decorate

## Quality Baselines

| Reference | What to Learn |
|-----------|---------------|
| adhamdannaway.com | Dual-identity split concept — visually representing two sides of one person |
| brittanychiang.com | Dark minimal palette, scroll-based sections, clean typography hierarchy |
| stefanvitasovic.com | Typographic animations that create personality without clutter |
| joffreyspitzer.com | GSAP/motion reveals, minimalist motion that feels intentional |

The portfolio should synthesize these influences — not copy any single one.

---

## Sprint Breakdown

### Sprint 1 — Foundation & Hero

**Goal:** First impression that communicates dual identity instantly.

**What:**
- Landing/hero section that introduces "Nikhil Tiwari — Full Stack Developer & AI Engineer"
- The dual identity must be visually apparent within 3 seconds of page load
- Navigation structure established (single-page scroll or minimal routing)
- Dark theme with considered typography hierarchy
- Responsive from day one (mobile-first)

**Done when:**
- [ ] Page loads in under 2 seconds on 3G throttle
- [ ] Dual identity (Full Stack + AI) is visually communicated above the fold
- [ ] Navigation is functional and accessible (keyboard navigable, proper ARIA)
- [ ] Typography hierarchy has at least 3 distinct levels
- [ ] Renders correctly on 375px, 768px, and 1440px viewports

---

### Sprint 2 — About & Narrative

**Goal:** Visitor understands WHO Nikhil is and WHY he builds what he builds.

**What:**
- About section that tells the story: healthcare by day, AI tools by night
- The "invisible architecture" philosophy communicated clearly
- 6+ years experience, Bangalore, the trajectory from Odessa → Sapiens → Availity
- Skills presented in a way that shows depth, not just a tag cloud
- The section should feel personal — not a resume dump

**Done when:**
- [ ] About section conveys the dual-scale narrative (enterprise + open-source)
- [ ] Career progression is implied without being a timeline
- [ ] Technical skills are grouped meaningfully (not alphabetical lists)
- [ ] Section is scannable in 15 seconds but rewards deeper reading
- [ ] No lorem ipsum or placeholder content — all real copy from profile

---

### Sprint 3 — Work & Projects

**Goal:** Visitor sees WHAT Nikhil has built and the IMPACT of each project.

**What:**
- Professional work: ProviderSearch Platform, DocumentSearch optimization, MockProxyService
- Personal projects: Mnemo (hero project), Kiro Harness Engineering
- Each project communicates: problem → approach → measurable result
- Mnemo gets elevated treatment — it's the signature project
- Projects should show range: C#/.NET, Python/FastAPI, TypeScript/Next.js

**Done when:**
- [ ] At least 5 projects displayed with real accomplishments (not descriptions)
- [ ] Mnemo is visually distinguished as the flagship personal project
- [ ] Each project has at least one quantified result (latency reduction, line count, test count)
- [ ] Tech stacks are visible but secondary to impact statements
- [ ] Projects link to GitHub where applicable

---

### Sprint 4 — Motion & Interaction

**Goal:** The site feels alive and intentional — motion guides the eye and creates delight.

**What:**
- Scroll-triggered reveals for sections (not everything at once)
- Hero animation that draws attention to the dual identity
- Hover states and micro-interactions on project cards
- Page transitions or section transitions that feel smooth
- Motion must be performant — no jank on mid-range devices

**Done when:**
- [ ] At least 3 distinct animation types present (reveal, hover, transition)
- [ ] Animations respect `prefers-reduced-motion` media query
- [ ] No layout shift caused by animations (CLS = 0)
- [ ] Animations run at 60fps on a 2020 MacBook Air (no dropped frames)
- [ ] Motion adds meaning — each animation has a purpose beyond decoration

---

### Sprint 5 — Contact & Polish

**Goal:** Visitor can reach Nikhil easily. Every detail is refined.

**What:**
- Contact section with email, GitHub, LinkedIn — not a generic form
- Footer with minimal but complete information
- SEO metadata (title, description, OG tags)
- Favicon and site identity
- Loading states, error boundaries, edge cases handled
- Cross-browser testing (Chrome, Firefox, Safari)

**Done when:**
- [ ] All contact links work and open correctly (mailto, external links in new tab)
- [ ] OG meta tags render a proper preview card when shared on LinkedIn/Twitter
- [ ] Lighthouse accessibility score ≥ 95
- [ ] No console errors or warnings in production build
- [ ] Site works without JavaScript for core content (progressive enhancement)

---

### Sprint 6 — Performance & Deployment

**Goal:** The site is production-ready — fast, accessible, and deployed.

**What:**
- Performance audit and optimization (images, fonts, bundle size)
- Final responsive QA across devices
- Deployment to Vercel/Netlify with custom domain readiness
- Analytics integration (optional, privacy-respecting)
- Final visual QA against baseline sites

**Done when:**
- [ ] Lighthouse performance score ≥ 90
- [ ] Total bundle size < 200KB gzipped (excluding images)
- [ ] First Contentful Paint < 1.5s on cable connection
- [ ] Site deployed and accessible via public URL
- [ ] Visual quality subjectively matches the tier of baseline reference sites
- [ ] All 5 previous sprint criteria still pass (no regressions)
