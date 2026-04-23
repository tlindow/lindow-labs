"use client";

import { ArrowDown, Wrench, Waves } from "lucide-react";
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
        <motion.div
          className="mb-6 sm:mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber/40 via-peach/30 to-sky/40 blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-surface ring-4 ring-amber/30 ring-offset-4 ring-offset-background shadow-lg flex items-center justify-center">
              <Wrench size={44} className="text-foreground" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-sky-light ring-2 ring-background flex items-center justify-center">
                <Waves size={18} className="text-sky" strokeWidth={2} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          San Diego &middot; A maker space for tech
        </motion.p>

        <AnimatedText
          text="Where engineers become tinkers."
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
          The Tinker Hub is a hands-on shop in San Diego for software
          engineers, IT technologists, and the kind of people who&rsquo;d
          rather open the case than replace it. Solder, print, retrofit, and
          ship hardware alongside people who already know the commit message.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <MagneticButton
            href="#membership"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-amber hover:text-foreground transition-colors hover:shadow-lg hover:shadow-amber/25"
          >
            Book a tour
          </MagneticButton>
          <MagneticButton
            href="#space"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-medium text-foreground hover:border-amber/50 transition-all"
          >
            See the space
          </MagneticButton>
        </motion.div>

        <motion.a
          href="#idea"
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

      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
