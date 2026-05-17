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
      className="anim-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-surface/90 backdrop-blur-sm border-b border-white/5"
    >
      <a href="#home" className="font-display text-lg text-accent font-bold">
        NT
      </a>
      <ul className="flex gap-6 md:gap-8" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-[var(--text-secondary)] hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface rounded px-1"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
