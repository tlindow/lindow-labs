"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
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
}

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const slowParallax = useTransform(scrollY, [0, 700], [0, 110]);
  const fastParallax = useTransform(scrollY, [0, 700], [0, 180]);

  return (
    <section className="paper-grain relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-[60vh] w-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,162,77,0.16),transparent_68%)]"
        style={{ y: prefersReducedMotion ? 0 : slowParallax }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-[22vh] h-[65vh] w-[72vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(172,139,65,0.24),transparent_70%)]"
        style={{ y: prefersReducedMotion ? 0 : fastParallax }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="max-w-4xl"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.03] text-foreground sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.11em] text-foreground transition-colors duration-500 hover:bg-accent-strong"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="glass inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] text-foreground transition-colors duration-500 hover:bg-white/65"
            >
              {secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
