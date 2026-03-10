"use client";

import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tlindow",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tlindow",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:tyler.lindow@gmail.com",
  },
];

const navLinks = [
  { label: "Why", href: "/#why" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Tutorial", href: "/tutorials/agent-evals-hello-world" },
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
              <div className="mt-5 flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border text-muted hover:text-violet hover:border-violet/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
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
