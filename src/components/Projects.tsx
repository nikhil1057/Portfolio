"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, suffix = "", duration = 1200 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function ExpandableSection({ children, label }: { children: React.ReactNode; label: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-[11px] uppercase tracking-[0.2em] text-accent-cool/80 hover:text-accent-cool font-body flex items-center gap-2 transition-colors"
        aria-expanded={expanded}
      >
        {expanded ? "Hide" : "Show"} {label}
        <span className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}>▾</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: expanded ? "600px" : "0", opacity: expanded ? 1 : 0 }}
      >
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const mnemoRef = useRef<HTMLDivElement>(null);
  const harnessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [sectionRef.current, mnemoRef.current, harnessRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const mnemoTech = ["Python", "ONNX Runtime", "tree-sitter", "NetworkX", "NumPy", "MCP Protocol", "Next.js", "TypeScript"];
  const harnessTech = ["Shell scripting", "Kiro CLI", "Playwright MCP", "Next.js", "Tailwind", "Framer Motion"];

  return (
    <section id="projects" ref={sectionRef} className="section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="relative">
        <h2 className="font-display text-[clamp(4rem,8vw,7rem)] font-bold text-white/[0.03] absolute -top-6 -left-2 select-none pointer-events-none leading-none" aria-hidden="true">
          CRAFT
        </h2>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16 pt-8">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 items-start">
          {/* Mnemo — flagship with animated gradient border */}
          <div
            ref={mnemoRef}
            className="mnemo-card group relative p-[1px] overflow-hidden section-reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-none bg-gradient-to-r from-accent-cool/40 via-accent-cool/10 to-accent-cool/40 animate-border-rotate" />
            <div className="relative bg-[var(--surface)] p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(45,255,194,0.08)] transition-all duration-200">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cool/[0.03] rounded-full translate-x-24 -translate-y-24 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-cool font-body">Flagship · Open Source · PyPI</span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-3">Mnemo</h3>
                <p className="text-[13px] text-accent-cool/70 font-body mt-1">Persistent Engineering Cognition for AI Agents</p>

                <p className="text-sm text-[var(--text-secondary)] mt-5 font-body leading-[1.8]">
                  Gives AI coding agents persistent memory, a knowledge graph, and semantic search across sessions.
                  Eliminates context loss — the #1 frustration of AI-assisted development.
                </p>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="metric-glow">
                    <span className="block font-display text-xl font-bold text-accent-cool"><AnimatedCounter value={100} suffix="%" /></span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">recall@5</span>
                  </div>
                  <div className="metric-glow">
                    <span className="block font-display text-xl font-bold text-accent-cool"><AnimatedCounter value={2} suffix="ms" /></span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">latency</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-accent-cool"><AnimatedCounter value={8} suffix="x" /></span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">init speedup</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-accent-cool">14,000+</span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">lines of Python</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-accent-cool"><AnimatedCounter value={222} /></span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">passing tests</span>
                  </div>
                </div>

                {/* Tech stack pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {mnemoTech.map((t, i) => (
                    <span
                      key={t}
                      className="tech-pill px-2 py-1 text-[9px] uppercase tracking-wider text-accent-cool/70 border border-accent-cool/[0.15] font-body"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expandable details */}
                <ExpandableSection label="technical details">
                  <div className="text-sm text-[var(--text-secondary)] font-body leading-[1.8] space-y-3">
                    <p><span className="text-accent-cool">Triple-stream search engine</span> — fuses ONNX dense embeddings (all-MiniLM-L6-v2), BM25 keyword search, and Dijkstra graph traversal via Reciprocal Rank Fusion for 100% recall.</p>
                    <p><span className="text-accent-cool">Natural memory decay</span> — Ebbinghaus-inspired retention scoring (salience × exp(-0.01 × days) + access frequency) with automatic eviction.</p>
                    <p><span className="text-accent-cool">Knowledge graph</span> — NetworkX with Leiden community detection. <code className="text-accent-cool/80">mnemo_lookup</code> returns full service architecture in one call.</p>
                    <p><span className="text-accent-cool">16 agent-facing tools</span> — consolidated from 60 internal tools. 5 AI client integrations (Kiro, Claude Code, Cursor, Copilot, Amazon Q).</p>
                  </div>
                </ExpandableSection>

                <a href="https://github.com/Mnemo-mcp/Mnemo" target="_blank" rel="noopener noreferrer" className="github-link inline-flex items-center gap-2 mt-6 text-xs text-accent-cool font-body group/link relative">
                  <span className="relative">
                    View on GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-cool group-hover/link:w-full transition-all duration-200" />
                  </span>
                  <span className="group-hover/link:rotate-12 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Kiro Harness — secondary */}
          <div
            ref={harnessRef}
            className="lg:mt-16 section-reveal"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="group relative p-8 border border-white/[0.06] bg-white/[0.01] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(232,93,47,0.06)] hover:border-accent-warm/20 transition-all duration-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-warm/[0.03] rotate-12 -translate-x-16 -translate-y-16 group-hover:rotate-45 transition-transform duration-700" />

              <div className="relative">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-warm font-body">Systems Thinking · Multi-Agent</span>
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-3">Kiro Harness</h3>
                <p className="text-[13px] text-accent-warm/70 font-body mt-1">Multi-agent adversarial loop for autonomous website generation</p>

                <p className="text-sm text-[var(--text-secondary)] mt-4 font-body leading-[1.8]">
                  Generator↔Evaluator adversarial architecture producing complete sites through iterative refinements — zero manual coding.
                </p>

                {/* Metrics */}
                <div className="mt-5 grid grid-cols-3 gap-4">
                  <div>
                    <span className="block font-display text-xl font-bold text-accent-warm"><AnimatedCounter value={12} /></span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">iterations</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-accent-warm">3.5 hours</span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">to complete</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-accent-warm">0</span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">manual code</span>
                  </div>
                </div>

                {/* Tech stack pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {harnessTech.map((t, i) => (
                    <span
                      key={t}
                      className="tech-pill px-2 py-1 text-[9px] uppercase tracking-wider text-accent-warm/70 border border-accent-warm/[0.15] font-body"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expandable details */}
                <ExpandableSection label="details">
                  <div className="text-sm text-[var(--text-secondary)] font-body leading-[1.8] space-y-3">
                    <p><span className="text-accent-warm">Shell-based orchestrator</span> — spawns fresh Kiro CLI sessions per agent with clean-slate architecture and file-based communication.</p>
                    <p><span className="text-accent-warm">Playwright MCP integration</span> — evaluator browses the running site headlessly, verifying layout, interactions, and responsive behavior.</p>
                    <p><span className="text-accent-warm">Reusable templates</span> — for both frontend (GAN-style iteration loop) and full-stack (sprint-based with contracts) harness architectures.</p>
                  </div>
                </ExpandableSection>

                <a href="https://github.com/Mnemo-mcp/Harness" target="_blank" rel="noopener noreferrer" className="github-link inline-flex items-center gap-2 mt-5 text-xs text-accent-warm font-body group/link relative">
                  <span className="relative">
                    View on GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-warm group-hover/link:w-full transition-all duration-200" />
                  </span>
                  <span className="group-hover/link:rotate-12 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
