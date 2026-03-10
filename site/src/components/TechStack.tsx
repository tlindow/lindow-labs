"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const technologies = [
  { name: "Support investigations", bg: "bg-sky-light", dot: "bg-sky" },
  { name: "Known-issue search", bg: "bg-amber-light", dot: "bg-amber" },
  { name: "Agent evals", bg: "bg-sky-light", dot: "bg-sky" },
  { name: "Failure-point triage", bg: "bg-violet-light", dot: "bg-violet" },
  { name: "Customer-safe replies", bg: "bg-mint-light", dot: "bg-mint" },
  { name: "Bug ticket drafting", bg: "bg-indigo-light", dot: "bg-indigo" },
  { name: "Runbooks", bg: "bg-peach-light", dot: "bg-peach" },
  { name: "Traces and logs", bg: "bg-sky-light", dot: "bg-sky" },
  { name: "Regression sets", bg: "bg-sky-light", dot: "bg-sky" },
  { name: "Prompt revisions", bg: "bg-indigo-light", dot: "bg-indigo" },
  { name: "Docs feedback", bg: "bg-rose-light", dot: "bg-rose" },
  { name: "Post-sales AI ops", bg: "bg-violet-light", dot: "bg-violet" },
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Coverage
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-amber" />
          <p className="mt-3 sm:mt-4 text-muted text-[15px] sm:text-lg max-w-2xl">
            The focus is not generic AI education. It is the operational layer
            around live tools: how teams investigate failures, write safer
            replies, improve prompts, and keep shipping after launch.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-8 sm:mt-12 flex flex-wrap gap-2.5 sm:gap-3" staggerDelay={0.05}>
          {technologies.map((t) => (
            <StaggerItem key={t.name} direction="none" distance={0}>
              <span
                className={`inline-flex items-center gap-2 rounded-full ${t.bg} px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-default`}
              >
                <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${t.dot}`} />
                {t.name}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
