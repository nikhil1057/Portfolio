"use client";

import { useEffect, useRef } from "react";

export default function About() {
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
    <section id="about" ref={ref} className="section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="relative">
        {/* Giant background label */}
        <h2 className="font-display text-[clamp(4rem,8vw,7rem)] font-bold text-white/[0.03] absolute -top-6 -left-2 select-none pointer-events-none leading-none" aria-hidden="true">
          ABOUT
        </h2>

        {/* Asymmetric grid — offset columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1.5fr] gap-8 lg:gap-0 items-start pt-12">
          {/* Left — identity + stats */}
          <div className="space-y-8 lg:pr-12">
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-[1.1]">
              Two scales.
              <br />
              <span className="text-accent-warm">Enterprise</span> meets{" "}
              <span className="text-accent-cool">frontier</span>.
            </h3>

            {/* Stats — stacked asymmetric cards */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-1 p-5 bg-accent-warm/[0.04] border border-accent-warm/[0.12] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent-warm/[0.05] rotate-45 translate-x-8 -translate-y-8" />
                  <span className="block font-display text-3xl font-bold text-accent-warm">6+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-body">Years shipping</span>
                </div>
                <div className="flex-1 p-5 bg-accent-cool/[0.04] border border-accent-cool/[0.12] relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent-cool/[0.05] rounded-full -translate-x-4 translate-y-4" />
                  <span className="block font-display text-3xl font-bold text-accent-cool">14K</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-body">Lines in Mnemo</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2/5 p-5 border border-white/[0.06] bg-white/[0.02]">
                  <span className="block font-display text-3xl font-bold text-[var(--text-primary)]">4</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-body">Payer integrations</span>
                </div>
                <div className="w-3/5 p-5 border border-white/[0.06] bg-white/[0.02]">
                  <span className="block font-display text-3xl font-bold text-[var(--text-primary)]">222</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-body">Passing tests</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center divider */}
          <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent self-stretch" />

          {/* Right — narrative */}
          <div className="space-y-6 lg:pl-12 font-body">
            <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]">
              I build things at two scales. At work, I architect healthcare microservices that process
              real insurance workflows — provider search, eligibility checks, prior authorizations —
              across Aetna, BCBS, Humana, and UHC on Azure.
            </p>
            <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]">
              After hours, I build tools that change how developers work with AI — persistent memory
              systems, knowledge graphs, and autonomous coding harnesses.
            </p>
            <blockquote className="relative pl-5 border-l-2 border-accent-warm/40 italic text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]">
              Six years of shipping production systems taught me that good architecture is invisible.
              The best code I&apos;ve written is code that other developers (and now AI agents) never
              have to think about — it just works, remembers, and adapts.
            </blockquote>

            {/* Skills — contextual tags */}
            <div className="pt-4 flex flex-wrap gap-2">
              {["C# / .NET 8", "Python", "TypeScript", "Azure", "AWS", "Docker / K8s", "ONNX", "FastAPI", "Next.js", "Vue 3"].map((s) => (
                <span key={s} className="px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)] border border-white/[0.06] bg-white/[0.02] hover:border-accent-cool/30 hover:text-accent-cool transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
