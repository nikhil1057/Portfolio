# Sprint 2 Contract

## Features

- **About Section** — A narrative-driven section that tells the "two scales" story: enterprise healthcare by day, AI tooling by night
- **Key Stats Display** — Prominent metrics (6+ years, 14K lines in Mnemo, 222 tests, 5 microservices built from scratch)
- **Technical Skills Communication** — Skills presented through narrative context, not a logo grid
- **Scroll-triggered Animations** — Intentional reveal animations as user scrolls into the about section
- **Content Hierarchy** — Most important information (dual identity narrative) is most visually prominent, supporting details are subordinate

## Content (from profile.md)

### Narrative Text
> I build things at two scales. At work, I architect healthcare microservices that process real insurance workflows — provider search, eligibility checks, prior authorizations — across Aetna, BCBS, Humana, and UHC on Azure. After hours, I build tools that change how developers work with AI — persistent memory systems, knowledge graphs, and autonomous coding harnesses.

> Six years of shipping production systems taught me that good architecture is invisible. The best code I've written is code that other developers (and now AI agents) never have to think about — it just works, remembers, and adapts.

### Key Stats
- 6+ years of experience
- 14,000+ lines of Python (Mnemo)
- 222 passing tests
- 5 microservices built from scratch (ProviderSearch)
- 100% search recall@5 with 2ms latency
- 85 of 181 commits on ProviderSearch (primary architect)

### Technical Skills (grouped by narrative context)
- **Languages:** C#, Python, TypeScript/JavaScript, SQL
- **Backend:** .NET Core / .NET 8, FastAPI, ASP.NET Core Web API, Entity Framework
- **Frontend:** Angular, Vue 3, Next.js, React, Tailwind CSS
- **Cloud:** Azure (Cosmos DB, APIM, Functions, Key Vault, Entra ID, Pipelines), AWS (ECS/EKS)
- **AI & Data:** ONNX Runtime, tree-sitter, NetworkX, MCP Protocol
- **Patterns:** Microservices, circuit breakers, cache-first with TTL, payer strategy pattern

### Dual Identity Labels
- **Full Stack Developer** — healthcare systems, .NET, Azure, production microservices
- **AI Engineer** — Mnemo, knowledge graphs, semantic search, harness engineering

## Animations

1. **Section entrance** — About section fades in with translateY(30px → 0) over 0.6s ease-out when scrolled into viewport (triggered at 20% visibility)
2. **Narrative text reveal** — Each paragraph staggers in with 0.3s delay between paragraphs, opacity 0→1 and translateY(20px → 0) over 0.5s
3. **Stats counter animation** — Numbers count up from 0 to final value over 1.2s with easeOutExpo when stats container enters viewport
4. **Dual identity split** — The two identity cards (Full Stack / AI Engineer) slide in from opposite sides (left and right) over 0.7s with 0.2s stagger
5. **Skills reveal** — Skill categories stagger in from bottom with 0.15s delay between each category, 0.4s duration
6. **Key stats highlight** — Stats have a subtle scale(1 → 1.02) pulse on initial reveal, 0.3s duration

## Testable Behaviors (Playwright)

1. Navigate to / → scroll to about section → section is visible with heading text
2. About section contains the text "I build things at two scales"
3. About section contains the text "healthcare microservices"
4. About section contains the text "persistent memory systems, knowledge graphs"
5. About section contains the text "Six years of shipping production systems"
6. About section contains the text "good architecture is invisible"
7. Stat "6+" is visible in the stats area
8. Stat "14,000+" or "14K+" is visible representing lines of code
9. Stat "222" is visible representing passing tests
10. The dual identity is visually represented — "Full Stack Developer" text is present
11. The dual identity is visually represented — "AI Engineer" text is present
12. Technical skills section shows "C#" and "Python" and "TypeScript"
13. Technical skills section shows ".NET" or ".NET Core" or ".NET 8"
14. Technical skills section shows "Azure" and cloud-related terms
15. About section is responsive — content reflows correctly at 375px mobile width
16. About section is responsive — content displays correctly at 768px tablet width
17. About section is responsive — content displays correctly at 1440px desktop width
18. Scroll-triggered animation occurs — elements have opacity 0 before scroll, opacity 1 after scrolling into view
19. No horizontal overflow or layout shift in the about section at any viewport
20. About section contains reference to healthcare payers (Aetna, BCBS, Humana, or UHC)
21. About section contains reference to Mnemo or AI tooling
22. Content hierarchy is maintained — heading font size is larger than body text
23. The section is navigable from the header navigation (clicking "About" scrolls to section)
24. All text in the about section meets contrast requirements (not invisible/transparent)
25. Stats area shows at least 4 distinct metrics

## Done Definition

ALL testable behaviors must pass.
