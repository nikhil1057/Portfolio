"use client";

import { useEffect, useRef } from "react";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="relative">
        <h2 className="font-display text-[clamp(4rem,8vw,7rem)] font-bold text-white/[0.03] absolute -top-6 -left-2 select-none pointer-events-none leading-none" aria-hidden="true">
          WORK
        </h2>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16 pt-8">
          Experience
        </h2>

        {/* Timeline with offset cards */}
        <div className="space-y-0 relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-warm via-white/10 to-accent-cool" />

          {/* Availity */}
          <div className="relative pl-12 md:pl-16 pb-16">
            <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-accent-warm shadow-[0_0_12px_rgba(232,93,47,0.5)]" />
            <div className="p-6 md:p-8 border border-accent-warm/[0.12] bg-accent-warm/[0.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-warm/[0.03] rotate-45 translate-x-16 -translate-y-16" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)]">Availity</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent-warm font-body">2025 – Present</span>
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-body">Senior Developer · Bangalore</span>
              <p className="text-sm text-[var(--text-secondary)] mt-4 font-body leading-[1.8]">
                Designed ProviderSearch platform from zero — 5 microservices, Vue 3 UI, Azure Functions, CI/CD pipelines.
                Reduced document search latency with dual-layer caching. Built X12/EDI eligibility parsing with payer-specific strategy pattern.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["C# .NET 8", "Azure", "Cosmos DB", "Vue 3", "FastAPI"].map((t) => (
                  <span key={t} className="px-2 py-1 text-[9px] uppercase tracking-wider text-accent-warm/70 border border-accent-warm/[0.15] font-body">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Sapiens */}
          <div className="relative pl-12 md:pl-16 pb-16">
            <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-white/30 border-2 border-[var(--surface)]" />
            <div className="p-6 md:p-8 border border-white/[0.06] bg-white/[0.01]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)]">Sapiens</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-body">2022 – 2025</span>
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-body">Senior Developer · Bangalore</span>
              <p className="text-sm text-[var(--text-secondary)] mt-4 font-body leading-[1.8]">
                Lead developer for ERIE Insurance on Underwriting Pro. Drove Angular upgrades, API integrations for Farmers Insurance,
                and containerized deployments on Azure with Kubernetes.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["C#", ".NET Core", "Angular", "Azure", "K8s"].map((t) => (
                  <span key={t} className="px-2 py-1 text-[9px] uppercase tracking-wider text-[var(--text-secondary)] border border-white/[0.08] font-body">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Odessa */}
          <div className="relative pl-12 md:pl-16">
            <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-accent-cool shadow-[0_0_12px_rgba(45,255,194,0.4)]" />
            <div className="p-6 md:p-8 border border-accent-cool/[0.12] bg-accent-cool/[0.02] relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-cool/[0.03] rounded-full -translate-x-12 translate-y-12" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--text-primary)]">Odessa Inc.</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent-cool font-body">2019 – 2022</span>
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-body">Senior Software Engineer</span>
              <p className="text-sm text-[var(--text-secondary)] mt-4 font-body leading-[1.8]">
                Built backend systems for leasing platforms used by Dell and HP. Designed Asset Split feature,
                Auto-Payoff systems, GL journal reconciliation, and mentored interns.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["C#", ".NET", "SQL Server", "Azure", "IIS"].map((t) => (
                  <span key={t} className="px-2 py-1 text-[9px] uppercase tracking-wider text-accent-cool/70 border border-accent-cool/[0.15] font-body">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
