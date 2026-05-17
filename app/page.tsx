"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Mnemo", href: "#mnemo" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop nav */}
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-48 flex-col items-start justify-center gap-6 border-r border-border bg-background/80 px-6 backdrop-blur-sm lg:flex">
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, x: -20 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className="font-heading text-sm text-text-muted transition-colors hover:text-accent"
          >
            <span className="text-accent mr-2 text-xs">0{i + 1}.</span>
            {link.label}
          </motion.a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <div className="fixed right-4 top-4 z-50 lg:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-border bg-surface"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-40 flex w-64 flex-col items-start justify-center gap-6 border-l border-border bg-surface px-8 lg:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-base text-text-muted transition-colors hover:text-accent"
              >
                <span className="text-accent mr-2 text-xs">0{i + 1}.</span>
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 1500 / text.length);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      <span className={`cursor-blink inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle ${done ? "" : ""}`}>|</span>
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center lg:pl-48">
      <div className="mx-auto w-full max-w-content px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-4 font-heading text-sm text-accent"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              className="font-heading text-4xl font-bold text-text-primary md:text-6xl"
            >
              Nikhil Tiwari
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-4 font-heading text-2xl text-text-muted md:text-4xl"
            >
              <TypeWriter
                text="Full Stack Developer & AI Engineer"
                delay={400}
              />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="mt-6 max-w-xl font-body text-lg leading-relaxed text-text-muted"
            >
              Full Stack Developer who builds healthcare platforms by day and AI
              developer tools by night — shipping production systems on Azure/AWS
              while creating open-source tools that give AI agents persistent
              memory.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="mt-8"
            >
              <a
                href="#about"
                className="inline-block rounded border border-accent px-6 py-3 font-heading text-sm text-accent transition-colors hover:bg-accent/10"
              >
                Explore my work
              </a>
            </motion.div>
          </div>

          {/* Floating terminal block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="w-full max-w-sm rounded-lg border border-border bg-surface p-4 shadow-2xl lg:w-80"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-code text-xs text-text-muted">
                terminal
              </span>
            </div>
            <div className="font-code text-sm">
              <p className="text-text-muted">
                <span className="text-accent">$</span> pip install mnemo-dev
              </p>
              <p className="mt-1 text-text-muted/60">
                Successfully installed mnemo-dev
              </p>
              <p className="mt-2 text-text-muted">
                <span className="text-accent">$</span> mnemo init
              </p>
              <p className="mt-1 text-accent/80">
                ✓ Knowledge graph initialized
              </p>
              <p className="text-accent/80">✓ Memory engine ready</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />

        <section id="about" className="min-h-[50vh] py-24 md:py-32 lg:pl-48">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-heading text-2xl text-text-primary">About</h2>
          </div>
        </section>

        <section id="experience" className="min-h-[50vh] py-24 md:py-32 lg:pl-48">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-heading text-2xl text-text-primary">Experience</h2>
          </div>
        </section>

        <section id="projects" className="min-h-[50vh] py-24 md:py-32 lg:pl-48">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-heading text-2xl text-text-primary">Projects</h2>
          </div>
        </section>

        <section id="mnemo" className="min-h-[50vh] py-24 md:py-32 lg:pl-48">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-heading text-2xl text-text-primary">Mnemo</h2>
          </div>
        </section>

        <section id="contact" className="min-h-[50vh] py-24 md:py-32 lg:pl-48">
          <div className="mx-auto max-w-content px-6">
            <h2 className="font-heading text-2xl text-text-primary">Contact</h2>
          </div>
        </section>
      </main>
    </>
  );
}
