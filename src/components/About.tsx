"use client";

import { useEffect, useRef, useState, useCallback } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function CountUp({ end, suffix = "", duration = 1200 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const { ref, inView } = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4); // easeOutExpo approximation
      setVal(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 6, suffix: "+", label: "Years shipping production" },
  { value: 14000, suffix: "+", label: "Lines in Mnemo" },
  { value: 222, suffix: "", label: "Passing tests" },
  { value: 5, suffix: "", label: "Microservices built from scratch" },
  { value: 100, suffix: "%", label: "Search recall@5" },
  { value: 85, suffix: "", label: "Commits as primary architect" },
];

const skillCategories = [
  { label: "Languages", items: "C#, Python, TypeScript/JavaScript, SQL" },
  { label: "Backend", items: ".NET Core / .NET 8, FastAPI, ASP.NET Core Web API, Entity Framework" },
  { label: "Frontend", items: "Angular, Vue 3, Next.js, React, Tailwind CSS" },
  { label: "Cloud", items: "Azure (Cosmos DB, APIM, Functions, Key Vault, Entra ID), AWS (ECS/EKS)" },
  { label: "AI & Data", items: "ONNX Runtime, tree-sitter, NetworkX, MCP Protocol" },
  { label: "Patterns", items: "Microservices, circuit breakers, cache-first with TTL, payer strategy pattern" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSectionVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto"
      style={{
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {/* Section heading */}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-16">
        About
      </h2>

      {/* Dual Identity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div
          className="p-8 border border-accent-warm/20 bg-accent-warm/[0.03] relative overflow-hidden"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateX(0)" : "translateX(-60px)",
            transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
          }}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent-warm/60" />
          <h3 className="font-display text-xl md:text-2xl font-bold text-accent-warm mb-2">
            Full Stack Developer
          </h3>
          <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
            Healthcare systems, .NET, Azure, production microservices
          </p>
        </div>
        <div
          className="p-8 border border-accent-cool/20 bg-accent-cool/[0.03] relative overflow-hidden"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateX(0)" : "translateX(60px)",
            transition: "opacity 0.7s ease-out 0.4s, transform 0.7s ease-out 0.4s",
          }}
        >
          <div className="absolute top-0 right-0 w-1 h-full bg-accent-cool/60" />
          <h3 className="font-display text-xl md:text-2xl font-bold text-accent-cool mb-2">
            AI Engineer
          </h3>
          <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
            Mnemo, knowledge graphs, semantic search, harness engineering
          </p>
        </div>
      </div>

      {/* Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1px_1fr] gap-12 lg:gap-0">
        {/* Left — Story */}
        <div className="lg:pr-12 space-y-6 font-body">
          <p
            className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s",
            }}
          >
            I build things at two scales. At work, I architect healthcare microservices that process
            real insurance workflows — provider search, eligibility checks, prior authorizations —
            across Aetna, BCBS, Humana, and UHC on Azure.
          </p>
          <p
            className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 0.8s, transform 0.5s ease-out 0.8s",
            }}
          >
            After hours, I build tools that change how developers work with AI — persistent memory
            systems, knowledge graphs, and autonomous coding harnesses.
          </p>
          <blockquote
            className="relative pl-5 border-l-2 border-accent-warm/40 italic text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]"
            style={{
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 1.1s, transform 0.5s ease-out 1.1s",
            }}
          >
            Six years of shipping production systems taught me that good architecture is invisible.
            The best code I&apos;ve written is code that other developers (and now AI agents) never
            have to think about — it just works, remembers, and adapts.
          </blockquote>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Right — Stats */}
        <div className="lg:pl-12">
          <h4 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-6">
            By the numbers
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="p-4 border border-white/[0.06] bg-white/[0.02] hover:border-accent-cool/20 transition-colors"
                style={{
                  opacity: sectionVisible ? 1 : 0,
                  transform: sectionVisible ? "scale(1)" : "scale(0.95)",
                  transition: `opacity 0.4s ease-out ${0.6 + i * 0.1}s, transform 0.3s ease-out ${0.6 + i * 0.1}s`,
                }}
              >
                <span className="block font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  <CountUp end={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)] font-body">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mt-20">
        <h4 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-8">
          Technical Skills
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="space-y-2"
              style={{
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease-out ${1.0 + i * 0.15}s, transform 0.4s ease-out ${1.0 + i * 0.15}s`,
              }}
            >
              <h5 className="text-xs uppercase tracking-[0.2em] text-accent-warm font-display font-semibold">
                {cat.label}
              </h5>
              <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
                {cat.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
