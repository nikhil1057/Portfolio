"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="anim-section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Left — label */}
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">About</h2>
          <div className="mt-3 h-[2px] w-16 bg-gradient-to-r from-accent-warm to-accent-cool" />
        </div>
        {/* Right — content */}
        <div className="space-y-6">
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
            I build things at two scales. At work, I architect healthcare microservices that process
            real insurance workflows — provider search, eligibility checks, prior authorizations —
            across Aetna, BCBS, Humana, and UHC on Azure. After hours, I build tools that change how
            developers work with AI — persistent memory systems, knowledge graphs, and autonomous
            coding harnesses.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
            Six years of shipping production systems taught me that good architecture is invisible.
            The best code I&apos;ve written is code that other developers (and now AI agents) never have
            to think about — it just works, remembers, and adapts.
          </p>
          {/* Skills as asymmetric blocks */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-4">
            {["C# / .NET", "Python / FastAPI", "TypeScript", "Azure", "Docker / K8s", "ONNX / AI"].map((skill) => (
              <div key={skill} className="px-3 py-2 border border-white/[0.06] bg-white/[0.02] text-xs text-[var(--text-secondary)]">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
