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
    <section id="work" ref={ref} className="anim-section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-accent mb-8">Work</h2>
      <p className="text-[var(--text-secondary)] text-sm md:text-base">Projects coming in Sprint 3.</p>
    </section>
  );
}
