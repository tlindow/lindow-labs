"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, PlayCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import FloatingOrbs from "@/components/animations/FloatingOrbs";
import GradientBeam from "@/components/animations/GradientBeam";
import AnimatedText from "@/components/animations/AnimatedText";
import MagneticButton from "@/components/animations/MagneticButton";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 overflow-hidden">
      <FloatingOrbs />
      <GradientBeam />

      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="text-center lg:text-left">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-violet-light px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-violet"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles size={14} />
            Real walkthroughs for post-sales AI ops
          </motion.div>

          <motion.div
            className="mt-5 inline-flex flex-wrap items-center gap-2 lg:justify-start justify-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-violet"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="rounded-full bg-violet-light px-3 py-1">Support investigations</span>
            <span className="rounded-full bg-sky-light px-3 py-1">Agent evals</span>
            <span className="rounded-full bg-mint-light px-3 py-1">Post-sales AI ops</span>
          </motion.div>

          <motion.p
            className="mt-6 text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Optimize AI after deployment &middot; Cursor-native workflows
          </motion.p>

          <AnimatedText
            text="After the Demo"
            as="h1"
            className="mt-4 font-display text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-foreground"
            delay={0.5}
          />

          <motion.p
            className="mt-4 text-lg sm:text-2xl leading-relaxed text-foreground max-w-3xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            How do you keep AI tools getting better after they ship?
          </motion.p>

          <motion.p
            className="mt-3 text-base sm:text-xl leading-relaxed text-muted max-w-3xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            This site is for support, solutions, and post-sales engineers using
            Cursor, Claude Code, and similar tools to debug failures, run agent
            evals, improve customer replies, and tighten the workflows around AI in
            production.
          </motion.p>

          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <MagneticButton
              href="#tutorial"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
            >
              Try the loop inline
            </MagneticButton>
            <MagneticButton
              href="#workflow"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-5 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
            >
              <ArrowDown size={16} />
              <span>See workflow</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-muted"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span className="rounded-full bg-surface/80 px-3 py-1.5 border border-border">
              Real clip on the right
            </span>
            <span className="rounded-full bg-surface/80 px-3 py-1.5 border border-border">
              Inline tutorial below
            </span>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet/30 via-indigo/20 to-sky/30 blur-xl"
              animate={{ scale: [1, 1.04, 1], opacity: [0.45, 0.75, 0.45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative rounded-[2rem] border border-border/80 glass p-3 sm:p-4 shadow-lg">
              <div className="flex items-center justify-between gap-4 px-2 pb-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
                    Genuine walkthrough
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    A real clip from the site, not synthetic filler.
                  </p>
                </div>
                <Link
                  href="/tutorials/agent-evals-hello-world"
                  className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-sm font-medium text-foreground border border-border hover:border-violet/30 transition-all"
                >
                  <PlayCircle size={16} />
                  Full page
                </Link>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-inner">
                <video
                  className="block w-full aspect-video object-cover"
                  src="/media/after-the-demo-walkthrough.mp4"
                  poster="/media/after-the-demo-hero.webp"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <MediaCard
                  src="/media/after-the-demo-hero.webp"
                  alt="After the Demo homepage hero"
                  title="Homepage framing"
                  description="The pitch now starts with a real walkthrough clip above the fold."
                />
                <MediaCard
                  src="/media/after-the-demo-tutorial-steps.webp"
                  alt="After the Demo tutorial code steps"
                  title="Inline how-to"
                  description="Code blocks and steps show the eval loop in action instead of only describing it."
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient fade into the next section for a seamless scroll */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function MediaCard({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-border bg-surface overflow-hidden">
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 320px" />
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
