"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work With Me", href: "#mentoring" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Speaking", href: "#speaking" },
  { label: "Content", href: "#content" },
  { label: "Connect", href: "#connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a
          href="#"
          className="font-display text-lg sm:text-xl tracking-tight text-foreground"
        >
          Tyler Lindow
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2 text-muted hover:text-foreground"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col py-3 px-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-[15px] font-medium text-muted hover:text-foreground hover:bg-surface-alt transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
