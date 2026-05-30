"use client";

import Link from "next/link";

const metrics = [
  { value: "6+", label: "Years Experience" },
  { value: "5", label: "Microservices Built" },
  { value: "4", label: "Insurance Payers" },
  { value: "85", label: "Commits on Core Platform" },
];

const experiences = [
  {
    role: "Senior Developer",
    company: "Availity",
    period: "2025 – Present",
    highlights: [
      "Built entire ProviderSearch platform from zero — 5 microservices, Vue 3 UI, Azure Functions, CI/CD",
      "Reduced document search latency with dual-layer caching (TTL-based, Databricks query layer)",
      "Architecting cross-cloud proxy on AWS EKS routing to Azure backends with health-check failover",
    ],
    tech: ["C# .NET 8", "Azure", "Cosmos DB", "FastAPI", "AWS EKS", "Vue 3"],
  },
  {
    role: "Senior Developer",
    company: "Sapiens",
    period: "2022 – 2025",
    highlights: [
      "Lead developer for ERIE Insurance on Underwriting Pro platform",
      "Led Angular upgrade and API integrations for Farmers Insurance",
      "Kubernetes & Docker containerization with Azure DevOps CI/CD",
    ],
    tech: ["C#", ".NET Core", "Angular", "Kubernetes", "Azure"],
  },
  {
    role: "Senior Software Engineer",
    company: "Odessa Inc.",
    period: "2019 – 2022",
    highlights: [
      "Built backend systems for leasing platforms used by Dell, HP, and enterprise clients",
      "Designed Asset Split feature, Auto-Payoff, and GL journal reconciliation",
      "Mentored interns and led regression testing automation",
    ],
    tech: ["C#", ".NET Core", "SQL Server", "Azure", "IIS"],
  },
];

const skills = {
  "Languages": ["C#", "Python", "TypeScript", "SQL"],
  "Backend": [".NET 8", "ASP.NET Core", "FastAPI", "Entity Framework"],
  "Cloud": ["Azure", "AWS", "Docker", "Kubernetes", "Terraform"],
  "Patterns": ["Microservices", "CQRS", "Circuit Breakers", "Event-Driven"],
};

export default function FullStackPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 md:px-16 py-4 flex justify-between items-center">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">← Back</Link>
        <span className="text-sm font-display font-semibold text-teal-600">Full Stack Developer</span>
      </nav>

      {/* Hero */}
      <section className="px-8 md:px-16 py-20 max-w-[1000px] mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-600 font-body mb-4">I build systems</p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-[0.9]">
          {"<"}full stack<br />developer{"/>"}
        </h1>
        <p className="text-lg text-gray-500 mt-6 max-w-[600px] leading-relaxed">
          Building healthcare platforms that process real insurance workflows — provider search, eligibility checks, prior authorizations — across Aetna, BCBS, Humana, and UHC.
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-teal-600">{m.value}</div>
              <div className="text-xs text-gray-400 font-body mt-1 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 md:px-16 py-16 bg-gray-50">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-body mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-sm text-teal-600 font-body">{exp.company}</p>
                  </div>
                  <span className="text-xs text-gray-400 font-body shrink-0">{exp.period}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                      <span className="text-teal-400 mt-1 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-[10px] font-body px-2.5 py-1 bg-white border border-gray-200 rounded text-gray-500">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-body mb-12">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-display font-semibold text-gray-900 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="text-sm font-body px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 transition-all cursor-default">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-16 bg-gray-900 text-center">
        <h2 className="text-2xl font-display font-bold text-white mb-3">Let&apos;s build something together</h2>
        <p className="text-sm text-gray-400 mb-6">Open to opportunities and collaborations</p>
        <a href="mailto:nikhiltiwari1057@gmail.com" className="inline-block text-sm font-display font-semibold text-white border border-teal-500 px-6 py-3 rounded-full hover:bg-teal-600 transition-colors">
          Get in touch →
        </a>
      </section>

      <footer className="px-8 md:px-16 py-6 text-center">
        <p className="text-xs text-gray-300 font-body">© 2026 Nikhil Tiwari</p>
      </footer>
    </div>
  );
}
