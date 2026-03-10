"use client";

import Link from "next/link";
import { Video, FileText, Rss, ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const formats = [
  {
    icon: Video,
    title: "Workflow teardowns",
    description:
      "Break down a real support path from symptom to reply, then show where an eval can keep the next investigation tighter.",
    iconBg: "bg-rose-light",
    iconColor: "text-rose",
  },
  {
    icon: FileText,
    title: "Escalations to evals",
    description:
      "Turn repeated tickets, known issues, and product quirks into small benchmark cases that can be reused every week.",
    iconBg: "bg-sky-light",
    iconColor: "text-sky",
  },
  {
    icon: Rss,
    title: "Genuine media",
    description:
      "Short clips, podcast snippets, and practical notes that show the thinking in action instead of flattening everything into generic website copy.",
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
            Join the direction
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-mint" />

          <p className="mt-5 sm:mt-6 text-muted text-[15px] sm:text-lg max-w-2xl">
            The site is heading toward a community for the people optimizing AI
            after launch: support investigations, workflow fixes, agent evals,
            and customer-safe operations.
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
              More genuine media is coming here.
            </p>
            <p className="mt-2 text-sm text-muted">
              For now, the clearest way in is the walkthrough clip and the inline
              tutorial. Next up can be podcast clips, teardown snippets, and
              operator notes that feel more alive than another wall of text.
            </p>
            <Link
              href="/#tutorial"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
            >
              Jump to the inline tutorial
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
