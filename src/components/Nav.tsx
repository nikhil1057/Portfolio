"use client";

export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 bg-[#080808]/80 backdrop-blur-lg border-b border-white/[0.04]"
    >
      <a
        href="#home"
        className="font-display text-lg font-bold text-[var(--text-primary)] hover:text-accent-warm transition-colors"
      >
        NT<span className="text-accent-warm">.</span>
      </a>
      <ul className="flex gap-6 md:gap-8" role="list">
        {links.map((link) => (
          <li key={link.href} className="anim-nav-item">
            <a
              href={link.href}
              className="text-[11px] md:text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-[0.2em] font-body focus:outline-none focus:ring-2 focus:ring-accent-warm/50 rounded px-1"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
