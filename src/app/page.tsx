"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)] font-body">
          © 2026 Nikhil Tiwari
        </span>
        <div className="flex items-center gap-4">
          <a
            href="mailto:nikhiltiwari1057@gmail.com"
            className="text-[10px] text-[var(--text-secondary)] hover:text-accent-warm transition-colors font-body focus:outline-none focus:ring-2 focus:ring-accent-warm/50 rounded px-1"
            aria-label="Send email to Nikhil Tiwari"
          >
            Email
          </a>
          <a
            href="https://github.com/nikhil1057"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-[var(--text-secondary)] hover:text-accent-cool transition-colors font-body focus:outline-none focus:ring-2 focus:ring-accent-cool/50 rounded px-1"
            aria-label="Nikhil Tiwari on GitHub"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nikhiltiwari1057"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-[var(--text-secondary)] hover:text-accent-cool transition-colors font-body focus:outline-none focus:ring-2 focus:ring-accent-cool/50 rounded px-1"
            aria-label="Nikhil Tiwari on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
