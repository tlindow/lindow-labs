"use client";

import { Instagram, Github, Mail, MapPin, Wrench } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@thetinkerhub.co",
  },
];

const navLinks = [
  { label: "Idea", href: "#idea" },
  { label: "Space", href: "#space" },
  { label: "Tracks", href: "#tracks" },
  { label: "Schedule", href: "#schedule" },
  { label: "Membership", href: "#membership" },
  { label: "Toolkit", href: "#toolkit" },
];

export default function Footer() {
  return (
    <footer id="visit" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 font-display font-semibold text-xl sm:text-2xl text-foreground">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber/20 text-amber">
                  <Wrench size={16} strokeWidth={2} />
                </span>
                The Tinker Hub
              </p>
              <p className="mt-3 text-sm text-muted max-w-xs">
                A hands-on shop in San Diego for engineers who want the other
                half of the craft.
              </p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} strokeWidth={2} />
                Barrio Logan &middot; San Diego, CA
              </p>
              <div className="mt-5 flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  const external = s.href.startsWith("http");
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={s.label}
                      className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border text-muted hover:text-amber hover:border-amber/40 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
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
                    <a
                      href={l.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} The Tinker Hub. Built in San Diego.
          </p>
        </div>
      </div>
    </footer>
  );
}
