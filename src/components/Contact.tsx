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
    <section id="contact" ref={ref} className="anim-section-reveal py-32 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-accent mb-8">Contact</h2>
      <div className="flex flex-col gap-3 text-sm text-[var(--text-secondary)]">
        <a href="mailto:nikhiltiwari1057@gmail.com" className="hover:text-accent transition-colors">nikhiltiwari1057@gmail.com</a>
        <a href="https://github.com/nikhil1057" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/nikhiltiwari1057" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
      </div>
    </section>
  );
}
