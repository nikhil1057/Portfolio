# Nikhil Tiwari — Complete Profile

*This document is the source of truth for building the portfolio website.*

---

## Identity

- **Name:** Nikhil Tiwari
- **Title:** Full Stack Developer & AI Engineer
- **Location:** Bangalore, India
- **Email:** nikhiltiwari1057@gmail.com
- **GitHub:** github.com/nikhil1057
- **LinkedIn:** linkedin.com/in/nikhiltiwari1057
- **Experience:** 6+ years

---

## One-Line Bio

Full Stack Developer who builds healthcare platforms by day and AI developer tools by night — shipping production systems on Azure/AWS while creating open-source tools that give AI agents persistent memory.

---

## Dual Identity

I have two sides:
- **Full Stack Developer** — healthcare systems, .NET, Azure, production microservices
- **AI Engineer** — Mnemo, knowledge graphs, semantic search, harness engineering

Inspired by adhamdannaway.com's split concept. Let the agents decide how to visualize this.

---

## About

I build things at two scales. At work, I architect healthcare microservices that process real insurance workflows — provider search, eligibility checks, prior authorizations — across Aetna, BCBS, Humana, and UHC on Azure. After hours, I build tools that change how developers work with AI — persistent memory systems, knowledge graphs, and autonomous coding harnesses.

Six years of shipping production systems taught me that good architecture is invisible. The best code I've written is code that other developers (and now AI agents) never have to think about — it just works, remembers, and adapts.

---

## Technical Skills

### Languages
- **Primary:** C#, Python, TypeScript/JavaScript
- **Secondary:** SQL, HTML/CSS

### Backend
- .NET Core / .NET 8, ASP.NET Core Web API
- FastAPI (Python), Entity Framework, LINQ
- Middleware design, reverse proxy patterns
- SOAP↔REST conversion, X12/EDI parsing

### Frontend
- Angular, Vue 3 + Vite, Next.js + Tailwind CSS
- React (Mnemo website), HTML5/CSS3

### Cloud & Infrastructure
- **Azure:** App Service, APIM, Cosmos DB, Key Vault, Functions, Entra ID, DevOps Pipelines, SQL Server
- **AWS:** ECS/EKS (planned deployment), familiar with services
- Docker, Kubernetes, IIS Server
- CI/CD pipeline design (Azure Pipelines, GitHub Actions)

### AI & Data
- ONNX Runtime (embeddings, semantic search)
- tree-sitter (AST parsing, 14 languages)
- Knowledge graphs (NetworkX, LadybugDB)
- Databricks Connect / PySpark
- MCP (Model Context Protocol) server development

### Patterns & Practices
- Microservices architecture
- Resilience patterns (Polly, circuit breakers, retry with exponential backoff)
- Cache-first with TTL fallback
- Payer strategy pattern (extensible handler architecture)
- Health-check failover
- Audit logging (non-throwing)
- Tag-based production deployments

---

## Professional Experience

### Availity — Senior Developer
**July 2025 – Present | Bangalore**

Building healthcare integration services for one of the largest health information networks in the US.

**Projects at Availity:**

#### DocumentSearch (Gorilla) — Performance Optimization
A FastAPI-based REST API for searching medical/clinical documents used in prior authorization workflows.

**Accomplishments:**
- **Reduced document search latency by implementing a dual-layer caching system** — built a TTL-based cache (5-min eviction, stable JSON hashing) at both the API response layer and Databricks query layer, eliminating redundant database hits for repeated search patterns
- **Rebuilt the broken `node_json` query path end-to-end** — the existing implementation was non-functional; rewrote the complete flow including `build_documents_query_from_node_json()` to restore a critical search capability
- **Optimized SQL query performance by designing 7 covering indexes** — analyzed query plans and created targeted nonclustered indexes on `DocumentInstances` and `DeidentifiedDocuments` tables with proper INCLUDE columns, reducing full table scans
- **Collapsed expensive OR query chains into single IN clauses** — built `_try_build_optimized_or_query()` to detect and rewrite OR conditions, reducing query complexity
- **Improved production stability** — added Spark session thread-safe pooling, Azure Key Vault 30s timeout with graceful degradation, request timeout management (240s search / 30s other), and connection pool error recovery
- **Maintained full backward compatibility** — zero changes to API interface, return formats, or pagination while delivering 762 lines of optimization across 10 files

**Tech:** Python, FastAPI, Azure SQL Server, Databricks/Spark, Alembic, Azure Key Vault

---

#### ProviderSearch Platform — Built from Scratch
A multi-service healthcare platform enabling provider search, eligibility verification, service review, and prior authorization determination across insurance payers (Aetna, BCBS, Humana, UHC).

**Accomplishments:**
- **Designed and built the entire platform architecture from zero** — 5 microservices, a Vue 3 testing UI, Azure Functions, and CI/CD pipelines. 85 of 181 total commits; primary architect and developer
- **Implemented cache-first provider search with automatic failover** — Cosmos DB with 1-hour TTL, Polly retry (exponential backoff), reducing payer API calls and improving response times for repeated lookups
- **Built X12/EDI eligibility parsing with payer-specific strategy pattern** — extensible handler architecture where each payer (Aetna, BCBS, Humana) has isolated business logic, enabling new payer onboarding without touching existing code
- **Created a full Mock Payer Testing Platform** — Vue 3 SPA + 4 proxy services with Entra ID authentication, enabling end-to-end workflow validation without hitting real payer systems. Eliminated dependency on payer sandbox availability for QA
- **Designed resilient audit logging** — every request logged to Cosmos DB with a non-throwing pattern (failures swallowed), ensuring audit trail completeness without impacting request latency
- **Deployed and managed all Azure infrastructure** — App Service, APIM gateway configuration, Cosmos DB (partition key design with CorrelationId), Azure Functions (DB refresh, PHI cleanup), Key Vault secrets, Entra ID app registrations
- **Set up CI/CD from scratch** — Azure Pipelines with PR-triggered builds, per-service unit + integration test gates, and production deployment workflows

**Tech:** C# .NET 8, Azure Cosmos DB, Azure APIM, Azure Functions, Azure App Service, Entra ID (MSAL), Vue 3 + Vite, Polly, xUnit, Docker

---

#### MockProxyService — Current Project (AWS)
A standalone reverse proxy on AWS EKS that sits between Availity Essential and downstream payer systems (TYK Gateway / Azure APIM), handling intelligent routing, SOAP↔REST conversion, and health-based failover.

**Accomplishments:**
- **Architecting a cross-cloud proxy** — service lives on AWS (EKS) but routes to Azure-hosted backends (TYK, APIM), bridging two cloud environments transparently
- **Designed dual-lane routing architecture:**
  - Lane 1 (Mock Payer): REST pass-through to TYK with automatic APIM fallback on health-check failure
  - Lane 2 (EDI Capture): SOAP↔REST bidirectional conversion for eligibility/serviceReview, with fire-and-forget EDI capture to FDM during monthly windows
- **Built TYK health-check failover** — cached health status with configurable TTL (10s), automatic transparent failover to APIM so Availity Essential never sees an error
- **Ensured PHI/PII safety** — EDI payloads held in-memory only, sent directly to FDM over HTTPS, never persisted in AWS
- **Structured for production deployment** — Terraform infrastructure, K8s manifests, GitLab CI pipeline, Lambda Authorizer integration

**Tech:** C# .NET 8, AWS EKS, Azure APIM, TYK Gateway, Terraform, Kubernetes, Docker

---

### Sapiens — Senior Developer
**September 2022 – July 2025 | Bangalore**

Worked on Underwriting Pro, a core insurance underwriting platform used by major US insurers.

- Lead developer and main point of contact for ERIE Insurance
- Extended JSON support for EAPP solutions
- Initiated API integrations for Farmers Insurance (APP Pro → Underwriting Pro)
- Drove upgrade projects for Federated, Erie, and AAFMAA
- Utilized Kubernetes and Docker for containerization, deployed on Azure
- Automated CI/CD with Azure DevOps pipelines
- Led Angular upgrade for the new version of Underwriting Pro

**Tech:** C#, .NET Core, Angular, Azure, Kubernetes, Docker, Azure DevOps

---

### Odessa Inc. — Senior Software Engineer
**April 2019 – September 2022**

Built backend systems for leasing and loan management platforms used by Dell, HP, and other enterprise clients.

- Developed API systems using C#, Azure, SQL, .NET Framework/Core, ASP.NET, LINQ
- Designed Asset Split feature (SQL scripts → C# classes)
- Built Auto-Payoff, Offline Background Processes, SKU extensions
- Created SQL scripts for GL journal reconciliation
- Managed IIS Server deployments
- Led regression testing and automation test case development
- Mentored interns

**Tech:** C#, .NET Framework, .NET Core, SQL Server, Azure, IIS, LINQ

---

## Personal Projects

### Mnemo — Persistent Engineering Cognition for AI Agents
**Creator & Sole Developer | github.com/Mnemo-mcp/Mnemo | Published on PyPI**

An open-source tool that gives AI coding agents (Claude, Kiro, Cursor, Copilot, Amazon Q) persistent memory, a knowledge graph, and semantic search across sessions. Eliminates the #1 frustration of AI-assisted development: context loss.

**Accomplishments:**
- **Built a complete developer tool from concept to published package** — 14,000+ lines of Python, published to PyPI (`pip install mnemo-dev`), VS Code extension on marketplace, Homebrew tap, standalone binary
- **Achieved 100% search recall@5 with 2ms latency** — designed a triple-stream search engine fusing ONNX dense embeddings (all-MiniLM-L6-v2), BM25 keyword search, and Dijkstra graph traversal via Reciprocal Rank Fusion
- **Engineered 8x init speedup** — profiled and optimized the code intelligence pipeline (tree-sitter AST parsing across 14 languages) from ~56s to ~7s for a 300-file repo
- **Designed natural memory decay** — Ebbinghaus-inspired retention scoring (salience × exp(-0.01 × days) + access frequency) with automatic eviction, keeping memory relevant without manual cleanup
- **Consolidated 60 internal tools to 16 agent-facing tools** — analyzed agent usage patterns and merged overlapping functionality, reducing cognitive load for AI agents and improving tool selection accuracy
- **Built knowledge graph with community detection** — NetworkX graph with Leiden clustering, enabling `mnemo_lookup` to return full service architecture in one call instead of agents grepping 50 files
- **Implemented lifecycle hooks for 5 AI clients** — Kiro (5 hooks), Claude Code (6 hooks), Cursor, Copilot, Amazon Q — each with client-specific configuration generation at `mnemo init`
- **Created a dashboard UI** — vis-network graph visualization, memory browser, health monitoring, served via built-in HTTP server (`mnemo serve`)
- **Maintained 222 passing tests** — comprehensive test suite covering search quality, memory lifecycle, privacy, MCP integration, tool routing, and performance benchmarks

**Impact:** Developers using Mnemo never re-explain their architecture. The agent starts every session knowing decisions, patterns, bugs, and conventions — saving ~500 tokens of targeted recall vs 22,000+ tokens of static rules files.

**Tech:** Python, ONNX Runtime, tree-sitter, NetworkX, NumPy, MCP Protocol, Next.js (website), TypeScript (VS Code extension)

---

### Kiro Harness Engineering
**github.com/Mnemo-mcp/Harness**

Replicated Anthropic's multi-agent harness architecture for autonomous website generation, proving the Generator↔Evaluator adversarial loop works with Kiro CLI.

**Accomplishments:**
- **Built a working harness orchestrator** — shell script that spawns fresh Kiro CLI sessions per agent (clean-slate architecture), with file-based communication between Planner, Generator, and Evaluator
- **Integrated Playwright MCP for live site testing** — evaluator browses the running site headlessly, verifying layout, interactions, and responsive behavior against scoring criteria
- **Produced a complete marketing website through 12 adversarial iterations in 3.5 hours** — zero manual coding, with the evaluator driving creative pivots (generic → amber palette → Terminal Noir aesthetic)
- **Created reusable templates** for both frontend (GAN-style iteration loop) and full-stack (sprint-based with contracts) harness architectures

**Tech:** Shell scripting, Kiro CLI, Playwright MCP, Next.js, Tailwind, Framer Motion

---

## Education

- **B.Tech (Computer Science Engineering)** — GLA University, 2015-2019, CGPA: 8.0/10
- **XII (Senior Secondary)** — Holy Public School, CBSE, 82.40%
- **X (Secondary)** — Holy Public School, CBSE, GPA: 9.20/10

---

## Certifications

- **AZ-900** — Microsoft Azure Fundamentals

---

## What Defines Me

1. **Healthcare Systems Expert** — 3 years building real insurance/payer integration systems (eligibility, prior auth, provider search) across Aetna, BCBS, Humana, UHC
2. **Cloud Architect** — Deep Azure (Cosmos DB, APIM, Functions, Key Vault, Entra ID, Pipelines) + AWS awareness
3. **AI Tooling Pioneer** — Built Mnemo from scratch, published to PyPI, 14K lines, used by developers daily
4. **Production-First Mindset** — Every project has CI/CD, Docker, health checks, audit logging, resilience patterns
5. **Full-Stack Range** — C# backend, Python APIs, Vue/Angular/React/Next.js frontend, cloud infrastructure

---

## Portfolio Website Direction

The portfolio should communicate:
- A developer who ships real production systems (not just tutorials)
- Healthcare domain expertise that's rare and valuable
- AI/open-source work that shows forward-thinking
- Technical depth (architecture diagrams, not just buzzwords)
- The contrast: enterprise healthcare by day, cutting-edge AI tools by night

**Tone:** Technical, confident, not flashy. Let the work speak.
**Aesthetic:** Terminal/developer-focused. Dark theme. Monospace accents. Show code, architecture, real outputs.
