"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background split — two contrasting zones */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-accent-warm/[0.04] to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-accent-cool/[0.04] to-transparent" />
        {/* Diagonal divider */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        {/* Name — dramatic display type */}
        <h1 className="anim-name font-display text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tight text-[var(--text-primary)] leading-[0.9]">
          Nikhil Tiwari
        </h1>

        {/* Gradient line separator */}
        <div className="anim-line mt-6 h-[2px] w-full max-w-md bg-gradient-to-r from-accent-warm via-accent-cool to-transparent" />

        {/* Dual identity — split layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-3xl">
          <div className="anim-identity-left">
            <span className="block text-xs uppercase tracking-[0.3em] text-accent-warm/70 mb-1">Day</span>
            <span className="block font-display text-xl md:text-2xl font-semibold text-accent-warm">
              Full Stack Developer
            </span>
            <span className="block mt-1 text-xs text-[var(--text-secondary)]">
              Healthcare systems · .NET · Azure
            </span>
          </div>
          <div className="anim-identity-right">
            <span className="block text-xs uppercase tracking-[0.3em] text-accent-cool/70 mb-1">Night</span>
            <span className="block font-display text-xl md:text-2xl font-semibold text-accent-cool">
              AI Engineer
            </span>
            <span className="block mt-1 text-xs text-[var(--text-secondary)]">
              Mnemo · Knowledge graphs · Semantic search
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="anim-tagline mt-10 max-w-2xl text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
          Full Stack Developer who builds healthcare platforms by day and AI developer tools by night
          — shipping production systems on Azure/AWS while creating open-source tools that give AI
          agents persistent memory.
        </p>

        {/* Meta */}
        <div className="anim-tagline mt-6 flex gap-6 text-xs text-[var(--text-secondary)] font-body">
          <span>Bangalore, India</span>
          <span className="text-white/20">|</span>
          <span>6+ years</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="anim-scroll-indicator absolute bottom-10 left-1/2" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--text-secondary)]">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
