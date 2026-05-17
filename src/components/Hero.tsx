"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      {/* Geometric accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <h1 className="anim-name font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[var(--text-primary)]">
        Nikhil Tiwari
      </h1>

      {/* Dual identity */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <span className="anim-identity-left inline-block px-4 py-2 border border-accent/40 text-accent font-mono text-sm md:text-base tracking-wide">
          Full Stack Developer
        </span>
        <span className="hidden md:block text-[var(--text-secondary)] text-2xl">&amp;</span>
        <span className="md:hidden text-[var(--text-secondary)] text-lg">&amp;</span>
        <span className="anim-identity-right inline-block px-4 py-2 border border-accent/40 text-accent font-mono text-sm md:text-base tracking-wide">
          AI Engineer
        </span>
      </div>

      {/* Tagline */}
      <p className="anim-tagline mt-8 max-w-2xl text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
        Full Stack Developer who builds healthcare platforms by day and AI developer tools by night
        — shipping production systems on Azure/AWS while creating open-source tools that give AI
        agents persistent memory.
      </p>

      {/* Meta */}
      <div className="anim-tagline mt-6 flex gap-6 text-xs text-[var(--text-secondary)]">
        <span>Bangalore, India</span>
        <span>6+ years</span>
      </div>

      {/* Scroll indicator */}
      <div className="anim-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-secondary)]">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
