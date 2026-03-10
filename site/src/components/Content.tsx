"use client";

import { Video, FileText, Rss, ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";

const formats = [
  {
    icon: Video,
    title: "Briefings",
    description:
      "Concise explanations of prompt systems, evaluation design, and the operating choices that matter in production.",
    iconBg: "bg-rose-light",
    iconColor: "text-rose",
  },
  {
    icon: FileText,
    title: "Experiment Notes",
    description:
      "Working notes from testing frameworks, prompts, failure cases, and attempts to make model behavior more deterministic.",
    iconBg: "bg-sky-light",
    iconColor: "text-sky",
  },
  {
    icon: Rss,
    title: "Operator Network",
    description:
      "A place for practitioners, researchers, and curious builders to compare notes on AI-native workflows.",
    iconBg: "bg-amber-light",
    iconColor: "text-amber",
  },
];

export default function Content() {
  return (
    <section id="join" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Library & Community
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-mint" />

          <p className="mt-5 sm:mt-6 text-muted text-[15px] sm:text-lg max-w-2xl">
            The first release should look like a living library: foundational
            notes, practical experiments, and a gathering point for people
            building the operating layer of AI.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-3" staggerDelay={0.12}>
          {formats.map((f) => {
            const Icon = f.icon;
            return (
              <StaggerItem key={f.title}>
                <div className="text-center sm:text-left group">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${f.iconBg} ${f.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-3 text-base sm:text-lg font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 sm:mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg font-medium text-foreground">
              The first circle is forming now.
            </p>
            <p className="mt-2 text-sm text-muted">
              Reach out if you want to follow the research, contribute ideas, or
              help shape the first version of the platform.
            </p>
            <MagneticButton
              href="mailto:tyler.lindow@gmail.com?subject=AI%20Foundations"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
            >
              Join by Email
              <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
