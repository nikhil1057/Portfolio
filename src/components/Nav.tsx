"use client";

export default function Nav() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="anim-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#080b0e]/90 backdrop-blur-md border-b border-white/[0.04]"
    >
      <a href="#home" className="font-display text-lg font-bold bg-gradient-to-r from-accent-warm to-accent-cool bg-clip-text text-transparent">
        NT
      </a>
      <ul className="flex gap-4 md:gap-8" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs md:text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none focus:ring-2 focus:ring-accent-warm focus:ring-offset-2 focus:ring-offset-[#080b0e] rounded px-1 uppercase tracking-wider"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
