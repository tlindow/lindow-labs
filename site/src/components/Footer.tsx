"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const navLinks = [
  { label: "Top", href: "#" },
  { label: "Events", href: "#events" },
  { label: "Sign Up", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="px-4 py-14 sm:px-6 sm:py-16">
      <div className="luxury-divider mx-auto max-w-6xl" />
      <div className="mx-auto mt-8 max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
            <div className="max-w-md">
              <p className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
                Tyler Lindow
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Studio-standard digital experiences with a calm, premium point
                of view.
              </p>
            </div>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">
                Navigate
              </p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm uppercase tracking-[0.08em] text-muted transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs uppercase tracking-[0.1em] text-muted">
            &copy; {new Date().getFullYear()} Tyler Lindow Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
