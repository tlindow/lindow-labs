"use client";

import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface EventsProps {
  eyebrow: string;
  title: string;
  description: string;
  items: Array<{
    date: string;
    title: string;
    format: string;
    description: string;
  }>;
  signup: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
  };
}

export default function Events({
  eyebrow,
  title,
  description,
  items,
  signup,
}: EventsProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="events" className="relative px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal direction="up" distance={34} duration={0.95}>
          <div className="max-w-3xl">
            <p className="text-[0.7rem] uppercase tracking-[0.25em] text-muted">{eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <div className="luxury-divider mt-14 sm:mt-16" />

        <div className="mt-4">
          {items.map((event, index) => (
            <ScrollReveal
              key={event.title}
              direction="up"
              delay={index * 0.08}
              distance={26}
              duration={0.85}
            >
              <motion.article
                className="grid gap-3 border-b border-border/70 py-8 sm:grid-cols-[200px_1fr] sm:gap-6"
                whileHover={prefersReducedMotion ? undefined : { x: 6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-sm font-medium text-accent">{event.date}</p>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.15em] text-muted">
                    {event.format}
                  </p>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted">
                    {event.description}
                  </p>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.18} distance={34} duration={0.95}>
          <div
            id="contact"
            className="glass mt-12 rounded-md px-6 py-8 sm:mt-16 sm:px-10 sm:py-10"
          >
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted">
              {signup.eyebrow}
            </p>
            <h3 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              {signup.title}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {signup.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={signup.primaryCta.href}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold tracking-[0.04em] text-foreground transition-colors duration-500 hover:bg-accent-strong"
              >
                {signup.primaryCta.label}
              </a>
              <a
                href={signup.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-md border border-border bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition-colors duration-500 hover:bg-surface"
              >
                {signup.secondaryCta.label}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
