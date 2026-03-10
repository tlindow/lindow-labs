"use client";

import { Mic, ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const topics = [
  {
    title: "Read the support scenarios",
    description:
      "Start with four small tickets that cover a known issue, expected behavior, a real bug, and a needs-more-info case.",
    bg: "bg-rose-light",
  },
  {
    title: "Ask your agent for a run artifact",
    description:
      "Use Cursor, Claude Code, or a similar tool to generate a structured support investigation rather than an unscored blob of chat.",
    bg: "bg-amber-light",
  },
  {
    title: "Score the run deterministically",
    description:
      "Check the artifact for failure-point accuracy, evidence quality, safe reply language, follow-up questions, and escalation behavior.",
    bg: "bg-sky-light",
  },
  {
    title: "Tighten the prompt and repeat",
    description:
      "Use the failing checks as feedback, then improve the prompt or schema until the run passes the same benchmark consistently.",
    bg: "bg-mint-light",
  },
];

export default function Speaking() {
  return (
    <section id="tutorial" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <Mic size={24} className="text-rose sm:w-7 sm:h-7" />
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
              Public tutorial
            </h2>
          </div>
          <div className="mt-2 ml-9 sm:ml-10 h-1 w-16 rounded-full bg-rose" />

          <p className="mt-5 sm:mt-6 text-muted text-[15px] sm:text-lg max-w-2xl">
            The first tutorial on the site is a small hello-world project for
            agent evals. It assumes you already use Cursor or Claude Code in daily
            troubleshooting and want a concrete way to score improvements.
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
              href="/tutorials/agent-evals-hello-world"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet hover:underline group"
            >
              Open the hello world tutorial
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
