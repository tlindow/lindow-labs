"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";

const navLinks = [
  { label: "Why", href: "/#why" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Tutorial", href: "/#tutorial" },
  { label: "Loops", href: "/#loops" },
  { label: "Join", href: "/#join" },
];

export default function Footer() {
  return (
    <footer id="connect" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-12">
            <div>
              <p className="font-display font-semibold text-xl sm:text-2xl text-foreground">
                After the Demo
              </p>
              <p className="mt-2 text-sm text-muted max-w-xs">
                Playbooks and tutorials for optimizing AI tools after they are
                deployed into real customer workflows.
              </p>
              <p className="mt-5 text-sm text-muted max-w-sm">
                Real walkthroughs, genuine notes, and inline tutorials matter
                more here than another synthetic landing page.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                Navigation
              </p>
              <ul className="mt-3 space-y-1.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} After the Demo. Built with Next.js
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
