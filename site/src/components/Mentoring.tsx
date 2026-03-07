"use client";

import {
  Code2,
  Compass,
  FolderOpen,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import LabGlyph from "@/components/LabGlyph";

const offerings = [
  {
    icon: Code2,
    title: "Research Collaborations",
    description:
      "Partner on creative technology, cultural ideas, or product questions that deserve more exploration than a standard client brief.",
    color: "bg-sky-light",
    iconColor: "text-sky",
  },
  {
    icon: Compass,
    title: "Interactive Commissions",
    description:
      "Build web experiences, playful systems, and digital artifacts that feel closer to an exhibit or prototype than a brochure site.",
    color: "bg-peach-light",
    iconColor: "text-peach",
  },
  {
    icon: FolderOpen,
    title: "Apprenticeship Track",
    description:
      "A future pathway for builders who want to learn through real projects, close reading, and shared study inside an active lab.",
    color: "bg-mint-light",
    iconColor: "text-mint",
  },
  {
    icon: MessageCircle,
    title: "Lab Circle",
    description:
      "An early group forming around notes, critiques, demos, and the kind of conversations that push ambitious work forward.",
    color: "bg-violet-light",
    iconColor: "text-violet",
  },
];

export default function Mentoring() {
  return (
    <section id="join" className="relative overflow-hidden">
      {/* Pastel violet banner */}
      <div className="relative bg-gradient-to-br from-violet via-indigo to-sky py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet/0 via-white/10 to-violet/0"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal direction="none">
            <div className="mx-auto mb-6 max-w-sm sm:mb-8">
              <LabGlyph
                className="h-[220px] sm:h-[260px]"
                labels={["cohort", "signals", "programs"]}
              />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-6 backdrop-blur-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                <Sparkles size={12} className="shrink-0 text-white" />
              </span>
              An early cohort is forming
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Join Hapi Labs
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
              Hapi Labs is taking shape as a space for creative projects,
              research prompts, apprenticeship, and people who want to make
              ambitious things in public. If that sounds like your kind of room,
              reach out.
            </p>

            <MagneticButton
              href="mailto:tyler.lindow@gmail.com?subject=Hapi%20Labs"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-violet hover:bg-white/90 transition-all hover:shadow-xl hover:shadow-white/20"
            >
              Start a Conversation
              <ArrowRight size={15} />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>

      {/* Offerings grid on cream */}
      <div className="bg-surface-alt py-14 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-violet mb-10 sm:mb-12">
              Ways to step into the lab
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid gap-4 sm:gap-6 sm:grid-cols-2" staggerDelay={0.1}>
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <StaggerItem key={o.title}>
                  <div className="rounded-2xl bg-surface p-5 sm:p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${o.color} ${o.iconColor}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-3 text-base sm:text-lg font-semibold text-foreground">
                      {o.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">
                      {o.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 sm:mt-12 rounded-2xl bg-surface border border-border p-6 sm:p-8 text-center">
              <p className="text-base sm:text-lg font-medium text-foreground">
                No polished program deck yet. Just momentum.
              </p>
              <p className="mt-2 text-sm text-muted max-w-lg mx-auto">
                This is an invitation to people who care about interactive
                systems, public learning, and larger creative technology work.
                If the direction resonates, send a note and say hello.
              </p>
              <a
                href="mailto:tyler.lindow@gmail.com"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet hover:underline group"
              >
                Reach out to join the conversation
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
