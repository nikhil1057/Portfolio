"use client";

import { useEffect, useRef } from "react";

export default function Work() {
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
    <section id="work" ref={ref} className="anim-section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Work</h2>
          <div className="mt-3 h-[2px] w-16 bg-gradient-to-r from-accent-cool to-accent-warm" />
        </div>
        <div>
          <p className="text-[var(--text-secondary)] text-sm md:text-base">
            Detailed projects coming in Sprint 3 — healthcare platforms, AI tooling, and open-source work.
          </p>
        </div>
      </div>
    </section>
  );
}
