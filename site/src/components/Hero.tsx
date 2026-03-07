"use client";

import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GradientBeam from "@/components/animations/GradientBeam";
import AnimatedText from "@/components/animations/AnimatedText";
import MagneticButton from "@/components/animations/MagneticButton";
import LabGlyph from "@/components/LabGlyph";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24">
      <FloatingOrbs />
      <GradientBeam />

      <div className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-6xl items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        <div className="text-center lg:text-left">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.28em] text-violet sm:text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Creative technology lab / public experiments / emerging programs
          </motion.p>

          <AnimatedText
            text="Hapi Labs"
            as="h1"
            className="mt-4 font-display text-5xl leading-none tracking-tight text-foreground sm:mt-5 sm:text-7xl md:text-8xl"
            delay={0.45}
          />

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            An emerging lab for creative technology, interactive systems, and
            joyful research-in-public. Hapi Labs is where experiments, field
            notes, and larger creative projects begin to take shape.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {["Interactive systems", "Research notes", "Playful tools", "Early cohort"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm sm:text-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <MagneticButton
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo hover:shadow-lg hover:shadow-violet/25 sm:w-auto"
            >
              See Experiments
            </MagneticButton>
            <MagneticButton
              href="#content"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-violet/30 sm:w-auto"
            >
              Read Field Notes
            </MagneticButton>
            <MagneticButton
              href="#join"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-violet/30 sm:w-auto"
            >
              Join the Lab
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <MagneticButton
              href="https://www.linkedin.com/in/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/65 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-violet/30"
            >
              <Linkedin size={16} />
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href="https://github.com/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/65 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-violet/30"
            >
              <Github size={16} />
              GitHub
            </MagneticButton>
            <MagneticButton
              href="mailto:tyler.lindow@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/65 px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-violet/30"
            >
              <Mail size={16} />
              Email
            </MagneticButton>
          </motion.div>

          <motion.a
            href="#about"
            className="mt-12 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground sm:mt-16"
            aria-label="Scroll down"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 1.4 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
            }}
          >
            <ArrowDown size={20} />
          </motion.a>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <LabGlyph className="h-[380px] sm:h-[430px] lg:h-[520px]" />
        </motion.div>
      </div>

      {/* Gradient fade into the next section for a seamless scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
