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

const offerings = [
  {
    icon: Code2,
    title: "Prompt Systems",
    description:
      "Designing reusable prompt patterns, context packing strategies, and instruction hierarchies that make model behavior easier to reason about.",
    color: "bg-sky-light",
    iconColor: "text-sky",
  },
  {
    icon: Compass,
    title: "Evaluation Loops",
    description:
      "Building rubrics, regression sets, and adversarial tests so teams can measure quality instead of arguing about vibes.",
    color: "bg-peach-light",
    iconColor: "text-peach",
  },
  {
    icon: FolderOpen,
    title: "Human Review Operations",
    description:
      "Studying how domain experts, reviewers, and operators can continuously improve outputs without becoming the bottleneck.",
    color: "bg-mint-light",
    iconColor: "text-mint",
  },
  {
    icon: MessageCircle,
    title: "Deployment Playbooks",
    description:
      "Mapping the operational patterns that move AI systems from prototypes into context-specific, reliable production workflows.",
    color: "bg-violet-light",
    iconColor: "text-violet",
  },
];

export default function Mentoring() {
  return (
    <section id="research" className="relative overflow-hidden">
      <div className="relative bg-gradient-to-br from-violet via-indigo to-sky py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet/0 via-white/10 to-violet/0"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal direction="none">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-6 backdrop-blur-sm">
              <Sparkles size={14} className="animate-float" />
              Founding research agenda
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              What the platform studies
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
              This is not a frontier model lab. It is a practical research layer
              focused on the work between the model and the business:
              prompt engineering, evaluation systems, workflow instrumentation,
              and the human processes that make AI products compound.
            </p>

            <MagneticButton
              href="#join"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-violet hover:bg-white/90 transition-all hover:shadow-xl hover:shadow-white/20"
            >
              Explore the Curriculum
              <ArrowRight size={15} />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>

      <div className="bg-surface-alt py-14 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-violet mb-10 sm:mb-12">
              Research tracks
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
                Building in this space already?
              </p>
              <p className="mt-2 text-sm text-muted max-w-lg mx-auto">
                Send a note about the workflows, failure modes, or evaluation
                questions your team is seeing. The goal is to compare notes and
                sharpen the playbooks together.
              </p>
              <a
                href="mailto:tyler.lindow@gmail.com"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet hover:underline group"
              >
                Start the conversation
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
