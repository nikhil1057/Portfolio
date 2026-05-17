"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto relative"
    >
      {/* Top border */}
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-[1px] bg-gradient-to-r from-accent-warm/30 via-white/10 to-accent-cool/30" />

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            Let&apos;s build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-warm to-accent-cool">
              something.
            </span>
          </h2>
          <p className="mt-6 text-sm text-[var(--text-secondary)] font-body leading-[1.8] max-w-md">
            Building something interesting? I&apos;m always open to discussing healthcare tech,
            AI tooling, or open-source collaboration.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:nikhiltiwari1057@gmail.com"
            className="group flex items-center gap-4 p-5 border border-white/[0.06] hover:border-accent-warm/30 hover:bg-accent-warm/[0.02] transition-all duration-300"
          >
            <span className="flex items-center justify-center w-10 h-10 border border-accent-warm/20 text-accent-warm text-sm font-body">@</span>
            <div>
              <span className="block text-sm text-[var(--text-primary)] group-hover:text-accent-warm transition-colors font-body">
                nikhiltiwari1057@gmail.com
              </span>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-body">Email</span>
            </div>
          </a>
          <a
            href="https://github.com/nikhil1057"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 border border-white/[0.06] hover:border-accent-cool/30 hover:bg-accent-cool/[0.02] transition-all duration-300"
          >
            <span className="flex items-center justify-center w-10 h-10 border border-accent-cool/20 text-accent-cool text-sm font-body">&lt;/&gt;</span>
            <div>
              <span className="block text-sm text-[var(--text-primary)] group-hover:text-accent-cool transition-colors font-body">
                github.com/nikhil1057
              </span>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-body">GitHub</span>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/nikhiltiwari1057"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 border border-white/[0.06] hover:border-accent-cool/30 hover:bg-accent-cool/[0.02] transition-all duration-300"
          >
            <span className="flex items-center justify-center w-10 h-10 border border-accent-cool/20 text-accent-cool text-sm font-body">in</span>
            <div>
              <span className="block text-sm text-[var(--text-primary)] group-hover:text-accent-cool transition-colors font-body">
                linkedin.com/in/nikhiltiwari1057
              </span>
              <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-body">LinkedIn</span>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-body">
          © 2026 Nikhil Tiwari
        </span>
        <span className="text-[10px] text-[var(--text-secondary)] font-body">
          Built with Next.js + Tailwind CSS + Framer Motion
        </span>
      </div>
    </motion.section>
  );
}
