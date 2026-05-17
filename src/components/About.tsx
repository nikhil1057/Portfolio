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
    <section id="about" ref={ref} className="anim-section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-accent mb-8">About</h2>
      <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
        I build things at two scales. At work, I architect healthcare microservices that process
        real insurance workflows — provider search, eligibility checks, prior authorizations —
        across Aetna, BCBS, Humana, and UHC on Azure. After hours, I build tools that change how
        developers work with AI — persistent memory systems, knowledge graphs, and autonomous
        coding harnesses.
      </p>
    </section>
  );
}
