"use client";

import { Mic, ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const topics = [
  {
    title: "Interactive Worlds",
    description:
      "Playful systems, exhibit thinking, and web experiences that invite participation instead of passive scrolling.",
    bg: "bg-rose-light",
  },
  {
    title: "Creative Technology",
    description:
      "Using code as a medium for visual systems, storytelling, and interfaces that feel alive.",
    bg: "bg-amber-light",
  },
  {
    title: "Applied AI Literacy",
    description:
      "Learning how AI fits into real creative and technical practice without pretending certainty where there is still study to do.",
    bg: "bg-sky-light",
  },
  {
    title: "Apprenticeship and Learning",
    description:
      "Exploring how shared study, real projects, and generous critique can form better pathways into meaningful work.",
    bg: "bg-mint-light",
  },
];

export default function Speaking() {
  return (
    <section id="speaking" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <Mic size={24} className="text-rose sm:w-7 sm:h-7" />
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
              Research Themes
            </h2>
          </div>
          <div className="mt-2 ml-9 sm:ml-10 h-1 w-16 rounded-full bg-rose" />

          <p className="mt-5 sm:mt-6 text-muted text-[15px] sm:text-lg max-w-2xl">
            Areas of inquiry shaping the lab right now. These themes inform the
            experiments, writing, and future programs.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2" staggerDelay={0.1}>
          {topics.map((t) => (
            <StaggerItem key={t.title}>
              <div
                className={`rounded-2xl ${t.bg} p-5 sm:p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">
                  {t.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 sm:mt-10">
            <a
              href="mailto:tyler.lindow@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet hover:underline group"
            >
              Want to build around one of these themes? Let&rsquo;s talk
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
