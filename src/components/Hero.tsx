"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Split background — two contrasting zones */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Left warm zone */}
        <div className="absolute top-0 left-0 w-1/2 h-full hero-split-warm" />
        {/* Right cool zone */}
        <div className="absolute top-0 right-0 w-1/2 h-full hero-split-cool" />
        {/* Center divider — glowing seam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        {/* Geometric accents — asymmetric placement */}
        <div className="hidden md:block absolute top-[12%] left-[6%] w-40 h-40 border border-accent-warm/[0.07] rotate-12" />
        <div className="hidden md:block absolute bottom-[15%] right-[8%] w-28 h-28 rounded-full border border-accent-cool/[0.07]" />
        <div className="hidden md:block absolute top-[55%] left-[15%] w-20 h-[1px] bg-accent-warm/20" />
        <div className="hidden md:block absolute top-[25%] right-[12%] w-[1px] h-20 bg-accent-cool/20" />
        {/* Large faded type — background texture */}
        <div className="absolute top-[20%] left-[5%] font-display text-[12vw] font-bold text-white/[0.015] select-none leading-none whitespace-nowrap">
          BUILD
        </div>
        <div className="absolute bottom-[15%] right-[5%] font-display text-[10vw] font-bold text-white/[0.015] select-none leading-none whitespace-nowrap">
          SHIP
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        {/* Name — oversized with gradient surname */}
        <h1 className="anim-name font-display text-[clamp(3.5rem,9vw,9rem)] font-bold leading-[0.82] tracking-[-0.04em] text-[var(--text-primary)]">
          Nikhil
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-warm via-white/90 to-accent-cool">
            Tiwari
          </span>
        </h1>

        {/* Dual identity — split treatment with visual tension */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
          <div className="anim-title-left relative">
            <span className="font-display text-xl md:text-2xl lg:text-[2rem] font-semibold text-accent-warm glow-warm tracking-tight">
              Full Stack Developer
            </span>
            <span className="block mt-1 text-[10px] uppercase tracking-[0.3em] text-accent-warm/50 font-body">
              Healthcare · Azure · .NET
            </span>
          </div>
          <span className="anim-ampersand hidden md:flex mx-6 w-10 h-10 items-center justify-center border border-white/10 rounded-full font-display text-lg text-white/40">
            &amp;
          </span>
          <div className="anim-title-right relative">
            <span className="font-display text-xl md:text-2xl lg:text-[2rem] font-semibold text-accent-cool glow-cool tracking-tight">
              AI Engineer
            </span>
            <span className="block mt-1 text-[10px] uppercase tracking-[0.3em] text-accent-cool/50 font-body">
              Mnemo · Knowledge Graphs · MCP
            </span>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="anim-line-reveal mt-10 h-[1px] w-full max-w-md bg-gradient-to-r from-accent-warm via-white/20 to-accent-cool" />

        {/* Bio */}
        <p className="anim-bio mt-8 max-w-xl text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.8] font-body">
          Full Stack Developer who builds healthcare platforms by day and AI developer tools by night
          — shipping production systems on Azure/AWS while creating open-source tools that give AI
          agents persistent memory.
        </p>

        {/* Social links */}
        <div className="anim-social mt-8 flex items-center gap-6">
          <a
            href="https://github.com/nikhil1057"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-accent-cool transition-colors font-body"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span className="group-hover:underline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/nikhiltiwari1057"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-accent-cool transition-colors font-body"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span className="group-hover:underline">LinkedIn</span>
          </a>
          <a
            href="mailto:nikhiltiwari1057@gmail.com"
            className="group flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-accent-warm transition-colors font-body"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
            <span className="group-hover:underline">Email</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="anim-scroll-indicator absolute bottom-8 left-1/2"
        aria-hidden="true"
        role="presentation"
      >
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-[var(--text-secondary)]">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="10" cy="8" r="2" fill="currentColor" opacity="0.6">
            <animate attributeName="cy" values="8;18;8" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}
