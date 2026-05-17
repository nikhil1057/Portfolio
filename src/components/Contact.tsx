"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const linkVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.4, 0, 1], delay: 0.3 + i * 0.1 },
  }),
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto relative">
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-[1px] bg-gradient-to-r from-accent-warm/30 via-white/10 to-accent-cool/30" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
          >
            Let&apos;s build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-warm to-accent-cool">
              something.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 text-sm text-[var(--text-secondary)] font-body leading-[1.8] max-w-md"
          >
            Building something interesting? I&apos;m always open to discussing healthcare tech,
            AI tooling, or open-source collaboration.
          </motion.p>
        </div>

        <motion.div className="flex flex-col gap-4" initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.a
            custom={0}
            variants={linkVariant}
            href="mailto:nikhiltiwari1057@gmail.com"
            aria-label="Email Nikhil Tiwari at nikhiltiwari1057@gmail.com"
            className="group flex items-center gap-4 p-5 border border-white/[0.06] hover:border-accent-warm/30 hover:bg-accent-warm/[0.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-warm/50"
          >
            <span className="flex items-center justify-center w-10 h-10 border border-accent-warm/20 text-accent-warm text-sm font-body" aria-hidden="true">@</span>
            <div>
              <span className="block text-sm text-[var(--text-primary)] group-hover:text-accent-warm transition-colors font-body">
                nikhiltiwari1057@gmail.com
              </span>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-body">Email</span>
            </div>
          </motion.a>
          <motion.a
            custom={1}
            variants={linkVariant}
            href="https://github.com/nikhil1057"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nikhil Tiwari on GitHub"
            className="group flex items-center gap-4 p-5 border border-white/[0.06] hover:border-accent-cool/30 hover:bg-accent-cool/[0.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cool/50"
          >
            <span className="flex items-center justify-center w-10 h-10 border border-accent-cool/20 text-accent-cool text-sm font-body" aria-hidden="true">&lt;/&gt;</span>
            <div>
              <span className="block text-sm text-[var(--text-primary)] group-hover:text-accent-cool transition-colors font-body">
                github.com/nikhil1057
              </span>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-body">GitHub</span>
            </div>
          </motion.a>
          <motion.a
            custom={2}
            variants={linkVariant}
            href="https://linkedin.com/in/nikhiltiwari1057"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nikhil Tiwari on LinkedIn"
            className="group flex items-center gap-4 p-5 border border-white/[0.06] hover:border-accent-cool/30 hover:bg-accent-cool/[0.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-cool/50"
          >
            <span className="flex items-center justify-center w-10 h-10 border border-accent-cool/20 text-accent-cool text-sm font-body" aria-hidden="true">in</span>
            <div>
              <span className="block text-sm text-[var(--text-primary)] group-hover:text-accent-cool transition-colors font-body">
                linkedin.com/in/nikhiltiwari1057
              </span>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-body">LinkedIn</span>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
