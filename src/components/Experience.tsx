"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

function DurationBadge({ duration, isVisible }: { duration: string; isVisible: boolean }) {
  const parts = duration.split("–").map((s) => s.trim());
  const startYear = parseInt(parts[0].split(" ").pop()!);
  const endYear = parts[1] === "Present" ? new Date().getFullYear() : parseInt(parts[1].split(" ").pop()!);
  const years = endYear - startYear;
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
      "Led Angular upgrade for the new version of Underwriting Pro, improving frontend performance",
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
      "Architecting cross-cloud MockProxyService on AWS EKS routing to Azure APIM with health-check failover",
    ],
    tech: ["C# .NET 8", "Python", "FastAPI", "Azure Cosmos DB", "Azure APIM", "AWS EKS", "Vue 3", "Docker"],
    featured: [
      {
        name: "ProviderSearch Platform",
        details: [
          "5 microservices with cache-first provider search — Cosmos DB with 1-hour TTL, Polly retry with exponential backoff",
          "Payer-specific strategy pattern for X12/EDI eligibility parsing — new payer onboarding without touching existing code",
        ],
      },
      {
        name: "DocumentSearch (Gorilla)",
        details: [
          "FastAPI REST API for medical/clinical document search in prior authorization workflows",
          "7 covering indexes from query plan analysis; OR chains collapsed into single IN clauses — 762 lines of optimization",
        ],
      },
    ],
  },
];

const cardVariant = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1], delay: i * 0.3 },
  }),
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } },
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [lineDrawn, setLineDrawn] = useState(false);

  useEffect(() => {
    if (inView) setLineDrawn(true);
  }, [inView]);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="relative">
        <h2 className="font-display text-[clamp(4rem,8vw,7rem)] font-bold text-white/[0.03] absolute -top-6 -left-2 select-none pointer-events-none leading-none" aria-hidden="true">
          WORK
        </h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0, 1] }}
          className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16 pt-8"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] origin-top transition-transform duration-[1500ms] ease-out"
            style={{
              background: "linear-gradient(to bottom, var(--accent-warm), rgba(255,255,255,0.1), var(--accent-cool))",
              transform: lineDrawn ? "scaleY(1)" : "scaleY(0)",
            }}
            aria-hidden="true"
          />

          <motion.div initial="hidden" animate={inView ? "visible" : "hidden"}>
            {roles.map((role, i) => {
              const accentColor = role.accent === "warm" ? "var(--accent-warm)" : role.accent === "cool" ? "var(--accent-cool)" : "rgba(255,255,255,0.3)";

              return (
                <motion.div
                  key={role.company}
                  custom={i}
                  variants={cardVariant}
                  className="relative pl-12 md:pl-16 pb-16 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: accentColor,
                      boxShadow: role.accent !== "neutral" ? `0 0 12px ${accentColor}` : "none",
                    }}
                  />

                  {/* Card */}
                  <div
                    className="p-6 md:p-8 border relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                    style={{
                      borderColor: role.accent === "warm" ? "rgba(232,93,47,0.12)" : role.accent === "cool" ? "rgba(45,255,194,0.12)" : "rgba(255,255,255,0.06)",
                      backgroundColor: role.accent === "warm" ? "rgba(232,93,47,0.02)" : role.accent === "cool" ? "rgba(45,255,194,0.02)" : "rgba(255,255,255,0.01)",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                        {role.company}
                      </h3>
                      <div className="flex items-center gap-3">
                        <DurationBadge duration={role.duration} isVisible={inView} />
                        <span
                          className="text-[10px] uppercase tracking-[0.2em] font-body"
                          style={{ color: role.accent === "warm" ? "var(--accent-warm)" : role.accent === "cool" ? "var(--accent-cool)" : "var(--text-secondary)" }}
                        >
                          {role.duration}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs text-[var(--text-secondary)] font-body">
                      {role.title} · {role.location}
                    </span>

                    <ul className="mt-5 space-y-3">
                      {role.accomplishments.map((item, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: i * 0.3 + 0.3 + j * 0.15 }}
                          className="text-sm text-[var(--text-secondary)] font-body leading-[1.8] pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--text-secondary)]/40"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {role.featured && (
                      <motion.div
                        className="mt-6 space-y-4"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: i * 0.3 + 0.9 }}
                      >
                        {role.featured.map((project) => (
                          <div key={project.name} className="border-l-2 border-accent-warm/20 pl-4">
                            <h4 className="text-sm font-display font-semibold text-[var(--text-primary)] mb-2">
                              {project.name}
                            </h4>
                            <ul className="space-y-1.5">
                              {project.details.map((d, k) => (
                                <li key={k} className="text-xs text-[var(--text-secondary)] font-body leading-[1.7]">
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Tech tags */}
                    <motion.div
                      className="mt-5 flex flex-wrap gap-2"
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      transition={{ staggerChildren: 0.05, delayChildren: i * 0.3 + 0.9 }}
                    >
                      {role.tech.map((t) => (
                        <motion.span
                          key={t}
                          variants={tagVariant}
                          className="px-2 py-1 text-[9px] uppercase tracking-wider border font-body"
                          style={{
                            color: role.accent === "warm" ? "rgba(232,93,47,0.7)" : role.accent === "cool" ? "rgba(45,255,194,0.7)" : "var(--text-secondary)",
                            borderColor: role.accent === "warm" ? "rgba(232,93,47,0.15)" : role.accent === "cool" ? "rgba(45,255,194,0.15)" : "rgba(255,255,255,0.08)",
                          }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
