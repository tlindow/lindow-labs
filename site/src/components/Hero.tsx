"use client";

import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GradientBeam from "@/components/animations/GradientBeam";
import AnimatedText from "@/components/animations/AnimatedText";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-14 sm:pt-16 overflow-hidden">
      <FloatingOrbs />
      <GradientBeam />

      <div className="max-w-4xl text-center">
        <motion.div
          className="mb-6 sm:mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="relative group max-w-2xl w-full">
            <motion.div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet/30 via-indigo/20 to-sky/30 blur-xl"
              animate={{ scale: [1, 1.04, 1], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative rounded-[2rem] border border-border/80 glass px-5 py-5 sm:px-7 sm:py-6 shadow-lg">
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-violet">
                <span className="rounded-full bg-violet-light px-3 py-1">Prompt systems</span>
                <span className="rounded-full bg-sky-light px-3 py-1">Evaluation loops</span>
                <span className="rounded-full bg-mint-light px-3 py-1">Human review ops</span>
              </div>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted max-w-xl mx-auto">
                Research and education for teams trying to make model behavior
                more legible, more reliable, and more useful in production.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Prompt engineering &middot; Evaluation design &middot; MLOps
        </motion.p>

        <AnimatedText
          text="AI Foundations"
          as="h1"
          className="font-display text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-foreground"
          delay={0.5}
        />

        <motion.p
          className="mt-4 sm:mt-6 text-lg sm:text-2xl leading-relaxed text-foreground max-w-3xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Building the operating layer for AI-native companies.
        </motion.p>

        <motion.p
          className="mt-3 text-base sm:text-xl leading-relaxed text-muted max-w-3xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          AI Foundations studies the systems between frontier models and business
          outcomes: prompt architecture, evaluation design, deployment workflows,
          and the human feedback loops that make AI products durable.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <MagneticButton
            href="#thesis"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
          >
            Read the Thesis
          </MagneticButton>
          <div className="flex gap-3 w-full sm:w-auto">
            <MagneticButton
              href="https://www.linkedin.com/in/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-5 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
            >
              <Linkedin size={16} />
              <span className="sm:inline">LinkedIn</span>
            </MagneticButton>
            <MagneticButton
              href="https://github.com/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-5 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
            >
              <Github size={16} />
              <span className="sm:inline">GitHub</span>
            </MagneticButton>
            <MagneticButton
              href="mailto:tyler.lindow@gmail.com"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-5 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
            >
              <Mail size={16} />
              <span className="sm:inline">Email</span>
            </MagneticButton>
          </div>
        </motion.div>

        <motion.a
          href="#thesis"
          className="inline-flex items-center gap-2 mt-12 sm:mt-16 text-sm text-muted hover:text-foreground transition-colors"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>

      {/* Gradient fade into the next section for a seamless scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
