# Sprint 4 Contract

## Features

- Mnemo presented as a flagship project with dedicated visual treatment (larger card, distinct styling, hero-like presence)
- Kiro Harness presented as a secondary project demonstrating systems thinking
- Interactive project cards with hover states, expandable detail sections, and reveal animations
- GitHub links for both projects
- Key metrics displayed prominently with animated counters/reveals
- Section communicates "builder who ships" through visual hierarchy and content density

## Content (from profile.md)

### Mnemo — Persistent Engineering Cognition for AI Agents

- **Tagline:** An open-source tool that gives AI coding agents persistent memory, a knowledge graph, and semantic search across sessions.
- **GitHub:** github.com/Mnemo-mcp/Mnemo
- **Published on:** PyPI (`pip install mnemo-dev`)
- **Key Metrics:**
  - 100% search recall@5
  - 2ms latency
  - 8x init speedup (56s → 7s)
  - 14,000+ lines of Python
  - 222 passing tests
  - 16 agent-facing tools (consolidated from 60)
  - 5 AI client integrations (Kiro, Claude Code, Cursor, Copilot, Amazon Q)
- **Highlights:**
  - Triple-stream search: ONNX dense embeddings + BM25 keyword + Dijkstra graph traversal via Reciprocal Rank Fusion
  - Natural memory decay: Ebbinghaus-inspired retention scoring
  - Knowledge graph with Leiden community detection
  - Dashboard UI with vis-network graph visualization
- **Tech:** Python, ONNX Runtime, tree-sitter, NetworkX, NumPy, MCP Protocol, Next.js, TypeScript

### Kiro Harness Engineering

- **Tagline:** Multi-agent harness architecture for autonomous website generation — Generator↔Evaluator adversarial loop.
- **GitHub:** github.com/Mnemo-mcp/Harness
- **Key Metrics:**
  - 12 adversarial iterations
  - 3.5 hours to complete website
  - Zero manual coding
- **Highlights:**
  - Shell-based orchestrator spawning fresh Kiro CLI sessions per agent
  - Playwright MCP for live site testing
  - Reusable templates for frontend and full-stack harness architectures
- **Tech:** Shell scripting, Kiro CLI, Playwright MCP, Next.js, Tailwind, Framer Motion

## Animations

1. **Section entrance:** "Projects" heading slides up with opacity 0→1 over 0.5s when section scrolls into view
2. **Mnemo card entrance:** Flagship card scales from 0.95→1 and fades in over 0.6s with a 0.2s delay after heading appears
3. **Metric counters:** Numbers animate from 0 to final value over 1.2s with easing (ease-out-cubic) when card enters viewport
4. **Tech stack pills:** Stagger reveal — each pill fades in and translates up 8px with 0.05s stagger delay between items
5. **Kiro Harness card entrance:** Secondary card slides up 20px and fades in over 0.5s with 0.4s delay after Mnemo card
6. **Hover state on cards:** Card lifts (translateY -4px) with subtle box-shadow expansion over 0.2s transition
7. **Expandable detail toggle:** Content height animates from 0 to auto over 0.3s with opacity fade-in
8. **GitHub link hover:** Underline slides in from left over 0.2s, icon rotates 12deg
9. **Metric highlight pulse:** Key metrics (100% recall, 2ms) get a subtle glow pulse on first reveal (one-time, 0.8s)
10. **Card border gradient:** Subtle animated gradient border on Mnemo card (slow 4s rotation) to distinguish it as flagship

## Testable Behaviors (Playwright)

1. Navigate to / → scroll to projects section → section heading "Projects" is visible
2. Projects section contains at least 2 project cards/sections
3. Mnemo project card displays the title "Mnemo"
4. Mnemo card shows tagline text containing "persistent memory"
5. Mnemo card displays metric "100%" (recall@5)
6. Mnemo card displays metric "2ms" (latency)
7. Mnemo card displays metric "14,000+" or "14K" (lines of code)
8. Mnemo card displays metric "222" (tests)
9. Mnemo card displays metric "8x" (speedup)
10. Mnemo card has a GitHub link pointing to github.com/Mnemo-mcp/Mnemo
11. Mnemo card displays tech stack including "Python", "ONNX Runtime", "tree-sitter"
12. Kiro Harness project card displays the title containing "Harness"
13. Kiro Harness card shows text containing "adversarial" or "multi-agent"
14. Kiro Harness card displays metric "12" (iterations) or "3.5 hours"
15. Kiro Harness card has a GitHub link pointing to github.com/Mnemo-mcp/Harness
16. Kiro Harness card displays tech stack including "Playwright" or "Kiro CLI"
17. Hovering over Mnemo card changes its transform (lift effect)
18. Hovering over a GitHub link shows an underline or visual change
19. Project cards have expandable/collapsible detail sections — clicking reveals more content
20. Expanded detail section for Mnemo shows "Reciprocal Rank Fusion" or "triple-stream"
21. Mnemo card has visually distinct styling from Kiro Harness (larger size or unique border)
22. Tech stack items render as individual pills/badges (not a single text block)
23. Section is responsive — cards stack vertically on mobile viewport (375px width)
24. All GitHub links open in a new tab (target="_blank")
25. Metric numbers are visible without needing to expand details

## Done Definition

ALL testable behaviors must pass.
