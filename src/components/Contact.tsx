"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
    <section id="contact" ref={ref} className="anim-section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">Contact</h2>
          <div className="mt-3 h-[2px] w-16 bg-gradient-to-r from-accent-warm to-accent-cool" />
        </div>
        <div className="flex flex-col gap-4">
          <a href="mailto:nikhiltiwari1057@gmail.com" className="text-sm text-[var(--text-secondary)] hover:text-accent-warm transition-colors">
            nikhiltiwari1057@gmail.com
          </a>
          <a href="https://github.com/nikhil1057" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-secondary)] hover:text-accent-cool transition-colors">
            GitHub →
          </a>
          <a href="https://linkedin.com/in/nikhiltiwari1057" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-secondary)] hover:text-accent-cool transition-colors">
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
