"use client";

import { useEffect, useRef } from "react";

export default function Projects() {
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
    <section id="projects" ref={ref} className="section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="relative">
        <h2 className="font-display text-[clamp(4rem,8vw,7rem)] font-bold text-white/[0.03] absolute -top-6 -left-2 select-none pointer-events-none leading-none" aria-hidden="true">
          CRAFT
        </h2>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16 pt-8">
          Projects
        </h2>

        {/* Asymmetric grid — Mnemo takes 2/3, Harness takes 1/3 but offset down */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 items-start">
          {/* Mnemo — flagship */}
          <div className="group relative p-8 md:p-10 border border-accent-cool/[0.15] bg-accent-cool/[0.02] hover:border-accent-cool/30 transition-all duration-300 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cool/[0.03] rounded-full translate-x-24 -translate-y-24 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-cool/[0.02] rotate-45 -translate-x-16 translate-y-16" />

            <div className="relative">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent-cool font-body">Flagship · Open Source · PyPI</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-3">Mnemo</h3>
              <p className="text-[13px] text-accent-cool/70 font-body mt-1">Persistent Engineering Cognition for AI Agents</p>

              <p className="text-sm text-[var(--text-secondary)] mt-5 font-body leading-[1.8]">
                Gives AI coding agents persistent memory, a knowledge graph, and semantic search across sessions.
                Eliminates context loss — the #1 frustration of AI-assisted development.
              </p>

              {/* Metrics — bold display */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <span className="block font-display text-xl font-bold text-accent-cool">100%</span>
                  <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">recall@5</span>
                </div>
                <div>
                  <span className="block font-display text-xl font-bold text-accent-cool">2ms</span>
                  <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">latency</span>
                </div>
                <div>
                  <span className="block font-display text-xl font-bold text-accent-cool">8×</span>
                  <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">init speedup</span>
                </div>
                <div>
                  <span className="block font-display text-xl font-bold text-accent-cool">14K</span>
                  <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">lines of Python</span>
                </div>
              </div>

              <a href="https://github.com/Mnemo-mcp/Mnemo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-xs text-accent-cool hover:underline font-body group/link">
                View on GitHub
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Kiro Harness — offset */}
          <div className="lg:mt-16 group relative p-8 border border-white/[0.06] bg-white/[0.01] hover:border-accent-warm/20 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent-warm/[0.03] rotate-12 -translate-x-16 -translate-y-16 group-hover:rotate-45 transition-transform duration-700" />

            <div className="relative">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent-warm font-body">Systems Thinking</span>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-3">Kiro Harness</h3>

              <p className="text-sm text-[var(--text-secondary)] mt-4 font-body leading-[1.8]">
                Multi-agent adversarial loop for autonomous website generation. Generator↔Evaluator architecture
                producing complete sites through 12 iterative refinements in 3.5 hours — zero manual coding.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Shell", "Kiro CLI", "Playwright", "Next.js"].map((t) => (
                  <span key={t} className="px-2 py-1 text-[9px] uppercase tracking-wider text-accent-warm/70 border border-accent-warm/[0.15] font-body">{t}</span>
                ))}
              </div>

              <a href="https://github.com/Mnemo-mcp/Harness" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-xs text-accent-warm hover:underline font-body group/link">
                View on GitHub
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
