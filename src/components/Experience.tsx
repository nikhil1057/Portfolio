"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, isVisible: boolean, duration = 800) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, target, duration]);

  return value;
}

function getYears(duration: string): number {
  const parts = duration.split("–").map((s) => s.trim());
  const startYear = parseInt(parts[0].split(" ").pop()!);
  const endYear = parts[1] === "Present" ? new Date().getFullYear() : parseInt(parts[1].split(" ").pop()!);
  return endYear - startYear;
}

function DurationBadge({ duration, isVisible }: { duration: string; isVisible: boolean }) {
  const years = getYears(duration);
  const count = useCountUp(years, isVisible);
  return (
    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] font-body text-[var(--text-secondary)]">
      <span className="font-display text-sm font-bold text-[var(--text-primary)]">{count}</span>
      {years === 1 ? "yr" : "yrs"}
    </span>
  );
}

const roles = [
  {
    company: "Odessa Inc.",
    title: "Senior Software Engineer",
    duration: "April 2019 – September 2022",
    location: "Remote",
    accent: "cool" as const,
    accomplishments: [
      "Developed API systems using C#, Azure, SQL, .NET Framework/Core, ASP.NET, LINQ for leasing platforms used by Dell and HP",
      "Designed Asset Split feature — migrated complex SQL scripts into maintainable C# classes, improving testability",
      "Built Auto-Payoff, Offline Background Processes, and SKU extensions handling enterprise-scale loan management",
      "Led regression testing and automation test case development, reducing manual QA cycles by 40%",
    ],
    tech: ["C#", ".NET Framework", ".NET Core", "SQL Server", "Azure", "IIS", "LINQ"],
  },
  {
    company: "Sapiens",
    title: "Senior Developer",
    duration: "September 2022 – July 2025",
    location: "Bangalore",
    accent: "neutral" as const,
    accomplishments: [
      "Lead developer and main point of contact for ERIE Insurance on Underwriting Pro platform",
      "Initiated API integrations for Farmers Insurance (APP Pro → Underwriting Pro), enabling cross-platform data flow",
      "Drove upgrade projects for Federated, Erie, and AAFMAA — migrating legacy systems to modern .NET Core",
      "Led Angular upgrade for the new version of Underwriting Pro, improving frontend performance and developer experience",
    ],
    tech: ["C#", ".NET Core", "Angular", "Azure", "Kubernetes", "Docker", "Azure DevOps"],
  },
  {
    company: "Availity",
    title: "Senior Developer",
    duration: "July 2025 – Present",
    location: "Bangalore",
    accent: "warm" as const,
    accomplishments: [
      "Designed and built ProviderSearch platform from zero — 5 microservices, Vue 3 UI, Azure Functions, CI/CD pipelines (85 of 181 commits)",
      "Reduced DocumentSearch latency via dual-layer caching system — TTL-based cache with stable JSON hashing at API and Databricks layers",
      "Built X12/EDI eligibility parsing with payer-specific strategy pattern — extensible handler architecture across Aetna, BCBS, Humana, UHC",
      "Architecting cross-cloud MockProxyService on AWS EKS routing to Azure APIM with health-check failover (10s TTL)",
    ],
    tech: ["C# .NET 8", "Python", "FastAPI", "Azure Cosmos DB", "Azure APIM", "AWS EKS", "Vue 3", "Docker"],
    featured: [
      {
        name: "ProviderSearch Platform",
        details: [
          "5 microservices with cache-first provider search — Cosmos DB with 1-hour TTL, Polly retry with exponential backoff",
          "Payer-specific strategy pattern for X12/EDI eligibility parsing — new payer onboarding without touching existing code",
          "Full Mock Payer Testing Platform (Vue 3 SPA + 4 proxy services + Entra ID auth) eliminating payer sandbox dependency",
        ],
      },
      {
        name: "DocumentSearch (Gorilla)",
        details: [
          "FastAPI REST API for medical/clinical document search in prior authorization workflows",
          "Dual-layer caching at API response layer + Databricks query layer with 5-min TTL eviction",
          "7 covering indexes from query plan analysis; OR chains collapsed into single IN clauses — 762 lines of optimization, zero API changes",
        ],
      },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineDrawn, setLineDrawn] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Timeline line draw on section enter
    const sectionObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLineDrawn(true);
      },
      { threshold: 0.1 }
    );
    sectionObs.observe(section);

    // Card reveal observers
    const cardObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1 && entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && cardObs.observe(el));

    // Active role tracking
    const activeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((el) => el && activeObs.observe(el));

    return () => {
      sectionObs.disconnect();
      cardObs.disconnect();
      activeObs.disconnect();
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto"
    >
      <div className="relative">
        <h2
          className="font-display text-[clamp(4rem,8vw,7rem)] font-bold text-white/[0.03] absolute -top-6 -left-2 select-none pointer-events-none leading-none"
          aria-hidden="true"
        >
          WORK
        </h2>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16 pt-8">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline vertical line with draw animation */}
          <div
            ref={timelineRef}
            className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] origin-top transition-transform duration-[1500ms] ease-out"
            style={{
              background: "linear-gradient(to bottom, var(--accent-warm), rgba(255,255,255,0.1), var(--accent-cool))",
              transform: lineDrawn ? "scaleY(1)" : "scaleY(0)",
            }}
            aria-hidden="true"
          />

          {roles.map((role, i) => {
            const isVisible = visibleCards[i];
            const isActive = activeIndex === i;
            const accentColor =
              role.accent === "warm"
                ? "var(--accent-warm)"
                : role.accent === "cool"
                ? "var(--accent-cool)"
                : "rgba(255,255,255,0.3)";

            return (
              <div
                key={role.company}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="relative pl-12 md:pl-16 pb-16 last:pb-0"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                  transition: `opacity 0.6s ease-out ${i * 0.3}s, transform 0.6s ease-out ${i * 0.3}s`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: role.accent !== "neutral" ? `0 0 12px ${accentColor}` : "none",
                    border: role.accent === "neutral" ? "2px solid var(--surface)" : "none",
                  }}
                />

                {/* Card */}
                <div
                  className="p-6 md:p-8 border relative overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: isActive
                      ? role.accent === "warm"
                        ? "rgba(232,93,47,0.3)"
                        : role.accent === "cool"
                        ? "rgba(45,255,194,0.3)"
                        : "rgba(255,255,255,0.12)"
                      : role.accent === "warm"
                      ? "rgba(232,93,47,0.12)"
                      : role.accent === "cool"
                      ? "rgba(45,255,194,0.12)"
                      : "rgba(255,255,255,0.06)",
                    backgroundColor:
                      role.accent === "warm"
                        ? "rgba(232,93,47,0.02)"
                        : role.accent === "cool"
                        ? "rgba(45,255,194,0.02)"
                        : "rgba(255,255,255,0.01)",
                    boxShadow: isActive
                      ? role.accent === "warm"
                        ? "-4px 0 20px -4px rgba(232,93,47,0.2)"
                        : role.accent === "cool"
                        ? "-4px 0 20px -4px rgba(45,255,194,0.2)"
                        : "-4px 0 20px -4px rgba(255,255,255,0.05)"
                      : "none",
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                      {role.company}
                    </h3>
                    <div className="flex items-center gap-3">
                      <DurationBadge duration={role.duration} isVisible={isVisible} />
                      <span
                        className="text-[10px] uppercase tracking-[0.2em] font-body"
                        style={{
                          color:
                            role.accent === "warm"
                              ? "var(--accent-warm)"
                              : role.accent === "cool"
                              ? "var(--accent-cool)"
                              : "var(--text-secondary)",
                        }}
                      >
                        {role.duration}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-[var(--text-secondary)] font-body">
                    {role.title} · {role.location}
                  </span>

                  {/* Accomplishments */}
                  <ul className="mt-5 space-y-3">
                    {role.accomplishments.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-[var(--text-secondary)] font-body leading-[1.8] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--text-secondary)]/40"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "translateY(0)" : "translateY(20px)",
                          transition: `opacity 0.4s ease-out ${i * 0.3 + 0.3 + j * 0.15}s, transform 0.4s ease-out ${i * 0.3 + 0.3 + j * 0.15}s`,
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Featured projects (Availity only) */}
                  {role.featured && (
                    <div
                      className="mt-6 space-y-4"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        maxHeight: isVisible ? "1000px" : "0",
                        overflow: "hidden",
                        transition: `max-height 0.4s ease-out ${i * 0.3 + 0.9}s, opacity 0.4s ease-out ${i * 0.3 + 0.9}s`,
                      }}
                    >
                      {role.featured.map((project) => (
                        <div key={project.name} className="border-l-2 border-accent-warm/20 pl-4">
                          <h4 className="text-sm font-display font-semibold text-[var(--text-primary)] mb-2">
                            {project.name}
                          </h4>
                          <ul className="space-y-1.5">
                            {project.details.map((d, k) => (
                              <li
                                key={k}
                                className="text-xs text-[var(--text-secondary)] font-body leading-[1.7]"
                              >
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.tech.map((t, j) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-[9px] uppercase tracking-wider border font-body"
                        style={{
                          color:
                            role.accent === "warm"
                              ? "rgba(232,93,47,0.7)"
                              : role.accent === "cool"
                              ? "rgba(45,255,194,0.7)"
                              : "var(--text-secondary)",
                          borderColor:
                            role.accent === "warm"
                              ? "rgba(232,93,47,0.15)"
                              : role.accent === "cool"
                              ? "rgba(45,255,194,0.15)"
                              : "rgba(255,255,255,0.08)",
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? "scale(1)" : "scale(0.8)",
                          transition: `opacity 0.3s ease-out ${i * 0.3 + 0.9 + j * 0.1}s, transform 0.3s ease-out ${i * 0.3 + 0.9 + j * 0.1}s`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
