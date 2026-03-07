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

      <div className="max-w-3xl text-center">
        <motion.p
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Web development &middot; Product clarity &middot; Technical advisory
        </motion.p>

        <AnimatedText
          text="Lindow Labs"
          as="h1"
          className="font-display text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-foreground"
          delay={0.5}
        />

        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-xl leading-relaxed text-muted max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Led by Tyler Lindow, I build polished websites, help teams stay clear
          on their P0s, and bring a practical engineering lens to the business
          goals behind the work. Based in San Diego.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <MagneticButton
            href="#mentoring"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
          >
            See Services
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
          href="#about"
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
