"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "skills", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-[#080808]/80 backdrop-blur-lg border-b border-white/[0.04]"
    >
      <a
        href="#home"
        onClick={(e) => handleClick(e, "#home")}
        className="font-display text-lg font-bold text-[var(--text-primary)] hover:text-accent-warm transition-colors"
      >
        NT<span className="text-accent-warm">.</span>
      </a>
      <ul className="flex gap-6 md:gap-8" role="list">
        {links.map((link, i) => (
          <motion.li
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 + i * 0.1 }}
          >
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-body transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-warm/50 rounded px-1"
              style={{
                color: active === link.href ? "var(--accent-warm)" : "var(--text-secondary)",
              }}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
