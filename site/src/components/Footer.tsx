"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

interface FooterProps {
  brand: string;
  tagline: string;
  navigateLabel: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  copyrightName: string;
}

export default function Footer({
  brand,
  tagline,
  navigateLabel,
  links,
  copyrightName,
}: FooterProps) {
  return (
    <footer className="px-4 py-14 sm:px-6 sm:py-16">
      <div className="luxury-divider mx-auto max-w-6xl" />
      <div className="mx-auto mt-8 max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
            <div className="max-w-md">
              <p className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
                {brand}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{tagline}</p>
            </div>

            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">
                {navigateLabel}
              </p>
              <ul className="mt-3 space-y-2">
                {links.map((l) => (
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
            &copy; {new Date().getFullYear()} {copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
}
