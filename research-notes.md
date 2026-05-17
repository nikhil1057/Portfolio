# Project Research Notes

*Generated: 2026-05-17*

---

## 1. Old Portfolio Website

- **Name**: Portfolio (nikhil1057.github.io/Portfolio)
- **Purpose**: Personal developer portfolio website showcasing Nikhil Tiwari's professional profile as a .NET Full Stack Developer with 7+ years of experience.
- **Tech Stack**: HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript, Font Awesome icons. Hosted on GitHub Pages.
- **Architecture**: Single-page static website (1,161 lines in one `index.html` file). No build tools, no frameworks — pure HTML/CSS/JS.
- **Key Features**:
  - Responsive layout (mobile, tablet, desktop)
  - Smooth scroll navigation with scroll-triggered animations
  - Animated particles in hero section
  - Mobile hamburger menu with slide-out effect
  - Accessible keyboard navigation
  - Sections: Hero, About Me, Technical Skills, Projects, Experience, Contact
- **Notable Commits** (14 total):
  - `4c9b0f1` Github info added
  - `42a9c64` Correcting Mobile responsiveness
  - `d5006ca` Change name of HTML
  - `5f02bdb` Initial commit
  - Shows iterative refinement of a personal project, attention to mobile UX, and DNS/CNAME setup for custom domain
- **Role/Contribution**: Sole developer. Designed and built the entire portfolio from scratch without frameworks, demonstrating strong fundamentals in HTML/CSS/JS and responsive design.

---

## 2. DocumentSearch

- **Name**: Gorilla Document Search
- **Purpose**: A FastAPI-based REST API for searching medical/clinical documents in a SQL database, with Databricks Connect integration for advanced analytics and Spark-based data processing.
- **Tech Stack**:
  - **Language**: Python 3.11
  - **Framework**: FastAPI + Uvicorn/Gunicorn
  - **Database**: Azure SQL Server (via SQLAlchemy + pyodbc), Alembic migrations
  - **Cloud**: Azure (Key Vault, Azure Pipelines CI/CD, Azure DevOps)
  - **Data**: Databricks Connect (PySpark), medical ontology parsing
  - **Auth**: JWT (PyJWT + bcrypt + passlib)
  - **Other**: Docker, Celery (async tasks), pytest
- **Architecture**:
  ```
  Client → FastAPI App → Azure SQL Server (SQLAlchemy)
                       → Databricks Connect (Spark)
                       → Azure Key Vault (secrets)
  ```
  - Layered: Routes → Services → Database
  - Middleware: DB session per request, correlation IDs, request timeouts
  - Lifespan: Key Vault credentials loaded at startup, Spark sessions closed on shutdown
- **Key Features**:
  - Document search with body part hierarchies, angles, sizes, concentrations, durations
  - Medical ontology integration (custom .whl packages)
  - Databricks/Spark integration for large-scale data processing
  - Alembic database migrations (16 migration versions)
  - JWT authentication with bearer tokens
  - Azure Pipelines CI/CD with tag-based production deployments
  - Docker containerization with Databricks Connect validation
  - Health check endpoints
  - Analytics service
  - User management routes
  - Index optimization (multiple migration iterations)
- **Notable Commits**:
  - `c52469e` / `9ea547a` Reconfiguring Indexes — performance optimization work
  - `c10afaa` New Tables for PA Metadata along with migrations — schema evolution
  - `12648ab` Added Distinct Percept Count — feature addition
  - `8ce6493` DB and API optimizations — performance tuning
  - `385a0d0` changing python version to match local — environment management
  - `667a770` updating logger config to work with docker — DevOps work
  - Shows: database optimization expertise, schema design, CI/CD pipeline management, Docker deployment
- **Role/Contribution**: Core developer. Built and maintained the API, designed database schema with iterative index optimizations, integrated Databricks for analytics, managed Azure deployment pipelines, and handled production deployments via git tags.

---

## 3. ProviderSearch (Multi-Service Healthcare Platform)

- **Name**: ProviderSearch Platform
- **Purpose**: A healthcare prior authorization and provider search platform consisting of multiple microservices that interface with insurance payers (Aetna, BCBS, Humana, UHC) via Azure APIM, with a mock testing platform for end-to-end workflow validation.
- **Tech Stack**:
  - **Language**: C# (.NET 8.0)
  - **Framework**: ASP.NET Core Web API
  - **Database**: Azure Cosmos DB (NoSQL)
  - **Cloud**: Azure (App Service, APIM, Key Vault, Entra ID, Azure DevOps Pipelines, Azure Functions)
  - **Frontend**: Vue 3 + Vite (Mock Payer UI)
  - **Auth**: Microsoft Entra ID (MSAL), Client Credentials flow, JWT Bearer
  - **Testing**: xUnit, Integration tests, unit tests
  - **Other**: Polly (resilience), Docker, Swagger/OpenAPI
- **Architecture**:
  ```
  Insurance Payers → Azure APIM → Microservices → Cosmos DB
                                                 → Audit Logs
  
  Mock Testing Platform:
  Vue 3 SPA → Proxy Services (4x) → APIM → Backend Services
  
  Services:
  ├── providerSearchService      (Provider lookup, cache-first)
  ├── eligibilityCheckService    (X12/EDI eligibility checks)
  ├── serviceReviewCallService   (Service review transactions)
  ├── isAuthRequiredService      (Prior auth determination)
  ├── MockPayerBackend           (4 proxy + Vue UI for testing)
  └── MockDBRefresh              (Azure Functions - DB refresh)
  ```
- **Key Features**:
  - **Provider Search**: Cache-first with 1-hour TTL, Cosmos DB fallback, Polly retry (exponential backoff)
  - **Eligibility Check**: X12/EDI parsing, payer-specific handlers (Aetna, BCBS, Humana)
  - **Service Review**: Multi-payer service review workflow
  - **Is Auth Required**: Prior authorization determination with payer-specific business rules
  - **Mock Payer Platform**: Full testing UI with Vue 3, 4 proxy services with Entra ID auth
  - **MockDBRefresh**: Azure Functions for automated database refresh, PHI cleanup, JSON flattening
  - **Audit Logging**: Every request logged to Cosmos DB (never throws)
  - **Payer Strategy Pattern**: Extensible payer handler architecture
  - **Azure Pipelines**: PR builds with unit + integration tests, per-service CI/CD
  - **Comprehensive test suites**: Unit, integration, and controller tests per service
- **Notable Commits**:
  - `a2a644c` Resolve merge conflict: keep CorrelationId partition key — architectural decisions
  - `f8f0b26` Fix: swallow audit log write failures — resilience pattern
  - `b6d2b2e` Remove ConfigureFunctionsApplicationInsights — Azure Functions debugging
  - `5d502b8` Adding Audit Logs and removing dead code — feature + cleanup
  - `dca4c90` Adding Audit Logs to Service Review and Eligibility — cross-service feature
  - Multiple Azure Functions registration fixes — shows real production debugging
  - Shows: microservices architecture, Azure cloud expertise, production debugging, resilience patterns
- **Role/Contribution**: Lead developer / architect. Designed the multi-service architecture, built all backend services, created the mock testing platform (UI + proxies), configured Azure Pipelines CI/CD, managed Cosmos DB schema design, implemented payer-specific business logic, and handled production deployment and debugging.

---

## 4. MockProxyService

- **Name**: MockProxyService
- **Purpose**: A .NET 8 reverse proxy that sits between Availity Essential and backend payer systems (TYK Gateway / Azure APIM), handling request routing, SOAP↔REST conversion, and TYK health-based failover.
- **Tech Stack**:
  - **Language**: C# (.NET 8.0)
  - **Framework**: ASP.NET Core (minimal API / middleware-based)
  - **Cloud**: Azure APIM, TYK Gateway, planned ECS/EKS deployment (AWS)
  - **Patterns**: Reverse proxy, SOAP↔REST conversion, health-check failover
  - **Other**: Docker, IMemoryCache
- **Architecture**:
  ```
  Essential (Availity) → MockProxyService → TYK Gateway (primary)
                                          → Azure APIM (fallback)
  
  Routing Rules:
  ├── providerSearch / authorization → JSON pass-through (TYK → APIM fallback)
  └── eligibility / serviceReview   → SOAP→REST→SOAP conversion (APIM direct)
  ```
  - Middleware-based routing (no controllers)
  - TYK health check with configurable TTL caching (10s default)
  - SOAP envelope parsing via regex, REST response wrapping
- **Key Features**:
  - Header-based routing (`X-Mock-Payer: {PayerName}-{TransactionType}`)
  - SOAP↔REST bidirectional conversion for EDI payloads
  - TYK Gateway health check with cached status and automatic APIM failover
  - Pass-through mode for JSON transactions
  - Configurable routing (TYK base URL, APIM base URL, API paths, health TTL)
  - Docker containerization
  - Health check endpoint (`/healthz`)
  - Clean separation: Middleware (routing), Services (health), Converters (SOAP), Models (config)
- **Notable Commits**:
  - `88b1cf4` Initial commit — single commit, freshly extracted/created repo
  - Shows: this is a newly created standalone service, likely extracted from the larger ProviderSearch monorepo
- **Role/Contribution**: Sole architect and developer. Designed the proxy architecture, implemented SOAP↔REST conversion logic, built the TYK health-check failover mechanism, and structured the project for AWS deployment. Created comprehensive steering documentation.

---

## 5. Mnemo

- **Name**: Mnemo (mnemo-dev)
- **Purpose**: Persistent engineering cognition for AI coding agents — a knowledge graph, semantic search, and memory system that gives AI assistants long-term project understanding via an MCP server.
- **Tech Stack**:
  - **Language**: Python 3.10+ (~14,000 lines of Python)
  - **Core**: ONNX Runtime (embeddings), NetworkX (knowledge graph), tree-sitter (AST parsing for 8+ languages)
  - **Server**: MCP (Model Context Protocol) server via stdio
  - **Storage**: LadybugDB (custom), JSON persistence, NumPy vectors
  - **Frontend**: Next.js + Tailwind CSS (marketing website), VS Code Extension (TypeScript)
  - **Distribution**: PyPI (`mnemo-dev`), standalone binary (PyInstaller), VS Code extension (.vsix)
  - **CI/CD**: GitHub Actions
  - **License**: AGPL-3.0
- **Architecture**:
  ```
  AI Agent (Claude/Kiro/Copilot) ←→ MCP Server (stdio)
                                          │
                                    ┌─────┴─────┐
                                    │  16 Tools │
                                    └─────┬─────┘
                                          │
                    ┌─────────────────────┼─────────────────────┐
                    │                     │                     │
              Knowledge Graph      Semantic Search        Memory Store
              (NetworkX)           (ONNX embeddings)     (LadybugDB)
                    │                     │                     │
              Code Intelligence    Vector Index          Lifecycle Hooks
              (tree-sitter AST)    (NumPy .npy)         (init/commit/PR)
  ```
- **Version**: 0.5.2
- **Key Stats**:
  - 16 MCP tools (reduced from 60 for agent efficiency)
  - 26 test files
  - 8+ language parsers (Python, JS, TS, C#, Go, Java, Rust + optional Ruby, PHP, C, C++, Kotlin, Swift, Scala)
  - ~14,000 lines of core Python
  - VS Code extension v0.5.1
  - Marketing website (Next.js)
- **Key Features**:
  - Persistent memory across AI sessions (decisions, observations, corrections)
  - Knowledge graph with community detection and Dijkstra search
  - ONNX-based semantic search (no external API calls)
  - Code intelligence engine with AST parsing (tree-sitter)
  - Repo map generation with incremental freshness
  - Lifecycle hooks (init, commit, PR generation)
  - Memory lifecycle sync with LadybugDB
  - Tool routing (15 agent-facing tools covering all internal flows)
  - Graph UI for visualization (memories, decisions, communities)
  - Sprint tracking, incident tracking, security analysis
  - Dead code detection, convention enforcement, drift detection
  - API discovery, code review assistance
  - Self-maintenance and health monitoring
  - 8x init speedup optimization
  - Circuit breaker pattern for resilience
- **Notable Commits**:
  - `cb1a32d` feat: Mnemo v0.5.0 — ONNX semantic search, unified indexing, incremental freshness
  - `68f4c4c` feat: Mnemo v2 Code Intelligence Engine — major architecture upgrade
  - `0b9f9bc` perf: 8x init speedup + ARCHITECTURE_V2.md — performance engineering
  - `f1d9d2c` feat: reduce agent-facing tools from 60 to 15 — UX optimization for AI agents
  - `67e8252` feat: full graph UI with memories, decisions, communities — visualization
  - `05cb787` feat: memory lifecycle sync with LadybugDB — persistence layer
  - `9f23c3d` feat: memory-graph integration + Dijkstra search — algorithm implementation
  - `7656b46` docs: comprehensive README, DISTRIBUTION.md — open-source readiness
  - Shows: product vision, performance engineering, architecture evolution, open-source project management, AI/ML integration
- **Role/Contribution**: Creator and sole developer. Conceived, designed, and built the entire system from scratch — including the MCP server, knowledge graph, semantic search engine, code intelligence pipeline, VS Code extension, marketing website, and distribution infrastructure. Published to PyPI, manages GitHub releases, and maintains comprehensive documentation.

---

## Summary Table

| Project | Domain | Stack | Cloud | Role |
|---------|--------|-------|-------|------|
| Portfolio | Personal | HTML/CSS/JS | GitHub Pages | Sole dev |
| DocumentSearch | Healthcare/Medical | Python, FastAPI, Spark | Azure (SQL, Key Vault, Pipelines) | Core dev |
| ProviderSearch | Healthcare/Insurance | C# .NET 8, Vue 3 | Azure (Cosmos DB, APIM, Functions, App Service) | Lead dev/architect |
| MockProxyService | Healthcare/Integration | C# .NET 8 | Azure APIM + TYK + AWS (planned) | Sole architect |
| Mnemo | Developer Tools/AI | Python, ONNX, tree-sitter | GitHub (open-source) | Creator/sole dev |

---

## Key Themes Across Projects

1. **Healthcare Domain Expertise**: 3 of 5 projects are healthcare-focused (document search, provider/payer integration, proxy services)
2. **Full-Stack Capability**: Backend (Python, C#), Frontend (Vue 3, HTML/CSS/JS, Next.js), Infrastructure (Docker, Azure, AWS)
3. **Cloud Architecture**: Deep Azure experience (Cosmos DB, APIM, Key Vault, Functions, App Service, Pipelines), AWS awareness
4. **Microservices Design**: Multi-service architectures with proper separation, resilience patterns (Polly, circuit breakers), audit logging
5. **Performance Engineering**: Database index optimization, 8x speedup work, caching strategies, Spark integration
6. **AI/ML Innovation**: Mnemo demonstrates cutting-edge work in AI agent tooling, semantic search, and knowledge graphs
7. **Production Operations**: Tag-based deployments, CI/CD pipelines, Docker, health checks, failover mechanisms
8. **Open-Source Contribution**: Mnemo published to PyPI with proper licensing, documentation, and distribution
