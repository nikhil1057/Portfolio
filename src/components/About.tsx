"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ end, suffix = "", duration = 1.2 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const ms = duration * 1000;
    const step = (now: number) => {
      const t = Math.min((now - start) / ms, 1);
      const eased = 1 - Math.pow(1 - t, 3);
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
  { value: 5, suffix: "", label: "Microservices from scratch" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1], delay: i * 0.2 },
  }),
};

const statVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0, 1], delay: 0.4 + i * 0.15 },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0, 1] }}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-16"
      >
        About
      </motion.h2>

      {/* Dual Identity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1], delay: 0.2 }}
          className="p-8 border border-accent-warm/20 bg-accent-warm/[0.03] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-accent-warm/60" />
          <h3 className="font-display text-xl md:text-2xl font-bold text-accent-warm mb-2">
            Full Stack Developer
          </h3>
          <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
            Healthcare systems, .NET, Azure, production microservices
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1], delay: 0.4 }}
          className="p-8 border border-accent-cool/20 bg-accent-cool/[0.03] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1 h-full bg-accent-cool/60" />
          <h3 className="font-display text-xl md:text-2xl font-bold text-accent-cool mb-2">
            AI Engineer
          </h3>
          <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
            Mnemo, knowledge graphs, semantic search, harness engineering
          </p>
        </motion.div>
      </div>

      {/* Narrative + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1px_1fr] gap-12 lg:gap-0">
        <motion.div
          className="lg:pr-12 space-y-6 font-body"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p custom={0} variants={fadeUp} className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]">
            I build things at two scales. At work, I architect healthcare microservices that process
            real insurance workflows — provider search, eligibility checks, prior authorizations —
            across Aetna, BCBS, Humana, and UHC on Azure.
          </motion.p>
          <motion.p custom={1} variants={fadeUp} className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]">
            After hours, I build tools that change how developers work with AI — persistent memory
            systems, knowledge graphs, and autonomous coding harnesses.
          </motion.p>
          <motion.blockquote
            custom={2}
            variants={fadeUp}
            className="relative pl-5 border-l-2 border-accent-warm/40 italic text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.9]"
          >
            Six years of shipping production systems taught me that good architecture is invisible.
            The best code I&apos;ve written is code that other developers (and now AI agents) never
            have to think about — it just works, remembers, and adapts.
          </motion.blockquote>
        </motion.div>

        <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        {/* Stats */}
        <div className="lg:pl-12">
          <motion.h4
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display text-lg font-semibold text-[var(--text-primary)] mb-6"
          >
            By the numbers
          </motion.h4>
          <motion.div className="grid grid-cols-3 gap-4" initial="hidden" animate={inView ? "visible" : "hidden"}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={statVariant}
                className="p-4 border border-white/[0.06] bg-white/[0.02] hover:border-accent-cool/20 transition-colors"
              >
                <span className="block font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  <CountUp end={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-[var(--text-secondary)] font-body">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
