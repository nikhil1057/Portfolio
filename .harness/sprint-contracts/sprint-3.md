# Sprint 3 Contract

## Features

- Professional experience timeline section presenting Odessa → Sapiens → Availity career progression
- Each role rendered as a narrative case study with company name, duration, role title, and quantified accomplishments
- ProviderSearch and DocumentSearch projects featured with architectural detail
- Visual timeline with progression/growth indicator (vertical line or step-based layout)
- Scroll-triggered progressive reveal animations for each role card
- Tech stack tags per role, visually subordinate to impact statements
- Responsive layout across mobile, tablet, and desktop

## Content (from profile.md)

### Role 1: Odessa Inc.
- **Title:** Senior Software Engineer
- **Duration:** April 2019 – September 2022
- **Accomplishments:**
  - Developed API systems using C#, Azure, SQL, .NET Framework/Core
  - Designed Asset Split feature (SQL scripts → C# classes)
  - Built Auto-Payoff, Offline Background Processes, SKU extensions
  - Led regression testing and automation test case development
- **Tech:** C#, .NET Framework, .NET Core, SQL Server, Azure, IIS, LINQ

### Role 2: Sapiens
- **Title:** Senior Developer
- **Duration:** September 2022 – July 2025
- **Accomplishments:**
  - Lead developer and main point of contact for ERIE Insurance
  - Initiated API integrations for Farmers Insurance (APP Pro → Underwriting Pro)
  - Drove upgrade projects for Federated, Erie, and AAFMAA
  - Led Angular upgrade for the new version of Underwriting Pro
- **Tech:** C#, .NET Core, Angular, Azure, Kubernetes, Docker, Azure DevOps

### Role 3: Availity
- **Title:** Senior Developer
- **Duration:** July 2025 – Present
- **Accomplishments:**
  - Designed and built ProviderSearch platform from zero — 5 microservices, Vue 3 UI, Azure Functions, CI/CD pipelines (85 of 181 commits)
  - Reduced DocumentSearch latency via dual-layer caching system (TTL-based, stable JSON hashing)
  - Built X12/EDI eligibility parsing with payer-specific strategy pattern
  - Architecting cross-cloud MockProxyService (AWS EKS → Azure APIM) with health-check failover
- **Tech:** C# .NET 8, Python, FastAPI, Azure Cosmos DB, Azure APIM, AWS EKS, Vue 3, Docker

### Featured Projects Detail

#### ProviderSearch Platform
- 5 microservices, Vue 3 testing UI, Azure Functions, CI/CD pipelines
- Cache-first provider search with Cosmos DB (1-hour TTL), Polly retry with exponential backoff
- Payer-specific strategy pattern for X12/EDI eligibility parsing
- Full Mock Payer Testing Platform eliminating payer sandbox dependency

#### DocumentSearch (Gorilla)
- FastAPI-based REST API for medical/clinical document search in prior authorization workflows
- Dual-layer caching: API response layer + Databricks query layer
- 7 covering indexes designed from query plan analysis
- OR query chains collapsed into single IN clauses
- 762 lines of optimization across 10 files with zero API interface changes

## Animations

1. **Timeline line draw** — vertical timeline line draws downward with `stroke-dashoffset` animation over 1.5s ease-out as section scrolls into view
2. **Role card reveal** — each role card fades in from left (translateX(-40px) → 0) with opacity 0→1, duration 0.6s, staggered 0.3s between cards
3. **Accomplishment list stagger** — bullet points within each role reveal sequentially with 0.15s stagger, translateY(20px) → 0, opacity 0→1
4. **Tech stack tags pop-in** — tech tags scale from 0.8→1 with opacity 0→1, 0.1s stagger, triggered after accomplishments finish animating
5. **Active role highlight** — as user scrolls through timeline, the currently-in-viewport role gets a subtle left-border glow transition (0.3s ease)
6. **Featured project expand** — ProviderSearch and DocumentSearch sections expand with height auto-animation (max-height transition 0.4s) when scrolled into view, revealing architectural detail
7. **Duration badge count-up** — years of experience number animates from 0 to actual value over 0.8s when visible

## Testable Behaviors (Playwright)

1. Navigate to / → scroll to experience section → section heading "Experience" is visible
2. Experience section contains exactly 3 role cards (Odessa, Sapiens, Availity)
3. Odessa role card displays "Senior Software Engineer" as title
4. Odessa role card displays "April 2019 – September 2022" as duration
5. Sapiens role card displays "Senior Developer" as title
6. Sapiens role card displays "September 2022 – July 2025" as duration
7. Availity role card displays "Senior Developer" as title
8. Availity role card displays "July 2025 – Present" as duration
9. Timeline visual element (vertical line or connector) is visible between role cards
10. Roles are ordered chronologically: Odessa first, Sapiens second, Availity third (top-to-bottom or left-to-right)
11. Each role card contains at least 2 accomplishment bullet points
12. Availity section mentions "ProviderSearch" with architectural detail (microservices, Cosmos DB, or payer strategy)
13. Availity section mentions "DocumentSearch" with performance detail (caching, latency, or optimization)
14. Each role card displays tech stack tags (at least 3 technologies per role)
15. Tech stack tags are visually smaller/subordinate compared to accomplishment text
16. Role cards have scroll-triggered entrance animation (opacity transitions from 0 to 1 on scroll)
17. Experience section is responsive — cards stack vertically on mobile viewport (375px width)
18. Experience section maintains readable layout on tablet viewport (768px width)
19. On desktop (1280px), timeline layout uses full width with clear visual hierarchy
20. Accomplishment text contains quantified results (numbers, percentages, or specific metrics) in at least 2 roles
21. "ProviderSearch" text or "5 microservices" text is present in the Availity section
22. "DocumentSearch" or "dual-layer caching" text is present in the Availity section
23. Company names (Odessa, Sapiens, Availity) are visually prominent (larger font or bold)
24. Section has no horizontal overflow on any viewport size
25. All role card content is accessible — text has sufficient contrast against background

## Done Definition

ALL testable behaviors must pass.
