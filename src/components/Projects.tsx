"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, suffix = "", duration = 1.2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const ms = duration * 1000;
    const animate = (now: number) => {
      const progress = Math.min((now - start) / ms, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
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
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>▾</motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="pt-4">{children}</div>
      </motion.div>
    </div>
  );
}

const pillContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const pillVariant = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const mnemoTech = ["Python", "ONNX Runtime", "tree-sitter", "NetworkX", "NumPy", "MCP Protocol", "Next.js", "TypeScript"];
  const harnessTech = ["Shell scripting", "Kiro CLI", "Playwright MCP", "Next.js", "Tailwind", "Framer Motion"];

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      <div className="relative">
        <h2 className="font-display text-[clamp(4rem,8vw,7rem)] font-bold text-white/[0.03] absolute -top-6 -left-2 select-none pointer-events-none leading-none" aria-hidden="true">
          CRAFT
        </h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-16 pt-8"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-start">
          {/* Mnemo — flagship */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1], delay: 0.2 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(45,255,194,0.08)", transition: { duration: 0.3 } }}
            className="mnemo-card group relative rounded-sm"
            style={{ padding: "2px", background: "conic-gradient(from var(--conic-angle, 0deg), var(--accent-cool), transparent 30%, var(--accent-cool) 50%, transparent 80%, var(--accent-cool))" }}
          >
            <div className="relative bg-[var(--surface)] p-8 md:p-10 lg:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cool/[0.04] rounded-full translate-x-24 -translate-y-24 group-hover:scale-150 transition-transform duration-700" />

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
                  {[
                    { value: 100, suffix: "%", label: "recall@5" },
                    { value: 2, suffix: "ms", label: "latency" },
                    { value: 8, suffix: "x", label: "init speedup" },
                    { value: 14000, suffix: "+", label: "lines of Python" },
                    { value: 222, suffix: "", label: "passing tests" },
                  ].map((m, idx) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className={idx < 2 ? "metric-glow" : ""}
                    >
                      <span className="block font-display text-xl font-bold text-accent-cool">
                        <AnimatedCounter value={m.value} suffix={m.suffix} />
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">{m.label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech pills */}
                <motion.div
                  className="mt-6 flex flex-wrap gap-2"
                  variants={pillContainer}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {mnemoTech.map((t) => (
                    <motion.span key={t} variants={pillVariant} className="px-2 py-1 text-[9px] uppercase tracking-wider text-accent-cool/70 border border-accent-cool/[0.15] font-body">
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                <ExpandableSection label="technical details">
                  <div className="text-sm text-[var(--text-secondary)] font-body leading-[1.8] space-y-3">
                    <p><span className="text-accent-cool">Triple-stream search engine</span> — fuses ONNX dense embeddings (all-MiniLM-L6-v2), BM25 keyword search, and Dijkstra graph traversal via Reciprocal Rank Fusion for 100% recall.</p>
                    <p><span className="text-accent-cool">Natural memory decay</span> — Ebbinghaus-inspired retention scoring (salience × exp(-0.01 × days) + access frequency) with automatic eviction.</p>
                    <p><span className="text-accent-cool">Knowledge graph</span> — NetworkX with Leiden community detection. <code className="text-accent-cool/80">mnemo_lookup</code> returns full service architecture in one call.</p>
                    <p><span className="text-accent-cool">16 agent-facing tools</span> — consolidated from 60 internal tools. 5 AI client integrations (Kiro, Claude Code, Cursor, Copilot, Amazon Q).</p>
                  </div>
                </ExpandableSection>

                <a href="https://github.com/Mnemo-mcp/Mnemo" target="_blank" rel="noopener noreferrer" aria-label="View Mnemo on GitHub" className="inline-flex items-center gap-2 mt-6 text-xs text-accent-cool font-body group/link relative focus:outline-none focus:ring-2 focus:ring-accent-cool/50 rounded px-1">
                  <span className="relative">
                    View on GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-cool group-hover/link:w-full transition-all duration-200" aria-hidden="true" />
                  </span>
                  <span className="group-hover/link:rotate-12 group-hover/link:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Kiro Harness */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0, 1], delay: 0.5 }}
            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(232,93,47,0.06)", transition: { duration: 0.3 } }}
            className="lg:mt-24"
          >
            <div className="group relative p-7 border border-white/[0.06] bg-white/[0.01] hover:border-accent-warm/20 transition-all duration-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-warm/[0.03] rotate-12 -translate-x-16 -translate-y-16 group-hover:rotate-45 transition-transform duration-700" />

              <div className="relative">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-warm font-body">Systems Thinking · Multi-Agent</span>
                <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-3">Kiro Harness</h3>
                <p className="text-[13px] text-accent-warm/70 font-body mt-1">Multi-agent adversarial loop for autonomous website generation</p>

                <p className="text-sm text-[var(--text-secondary)] mt-4 font-body leading-[1.8]">
                  Generator↔Evaluator adversarial architecture producing complete sites through iterative refinements — zero manual coding.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block font-display text-xl font-bold text-accent-warm"><AnimatedCounter value={12} /></span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">iterations</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl font-bold text-accent-warm">3.5 hours</span>
                    <span className="text-[9px] uppercase tracking-wider text-[var(--text-secondary)] font-body">to complete</span>
                  </div>
                </div>

                <motion.div
                  className="mt-5 flex flex-wrap gap-2"
                  variants={pillContainer}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {harnessTech.map((t) => (
                    <motion.span key={t} variants={pillVariant} className="px-2 py-1 text-[9px] uppercase tracking-wider text-accent-warm/70 border border-accent-warm/[0.15] font-body">
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                <ExpandableSection label="details">
                  <div className="text-sm text-[var(--text-secondary)] font-body leading-[1.8] space-y-3">
                    <p><span className="text-accent-warm">Shell-based orchestrator</span> — spawns fresh Kiro CLI sessions per agent with clean-slate architecture and file-based communication.</p>
                    <p><span className="text-accent-warm">Playwright MCP integration</span> — evaluator browses the running site headlessly, verifying layout, interactions, and responsive behavior.</p>
                    <p><span className="text-accent-warm">Reusable templates</span> — for both frontend (GAN-style iteration loop) and full-stack (sprint-based with contracts) harness architectures.</p>
                  </div>
                </ExpandableSection>

                <a href="https://github.com/Mnemo-mcp/Harness" target="_blank" rel="noopener noreferrer" aria-label="View Kiro Harness on GitHub" className="inline-flex items-center gap-2 mt-5 text-xs text-accent-warm font-body group/link relative focus:outline-none focus:ring-2 focus:ring-accent-warm/50 rounded px-1">
                  <span className="relative">
                    View on GitHub
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-warm group-hover/link:w-full transition-all duration-200" aria-hidden="true" />
                  </span>
                  <span className="group-hover/link:rotate-12 group-hover/link:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
