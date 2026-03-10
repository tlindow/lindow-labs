"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const pillars = [
  {
    title: "Start with model behavior",
    description:
      "Define what good, bad, and risky outputs look like before adding layers of architecture around the model.",
    tags: ["rubrics", "failure modes", "examples"],
    accent: "group-hover:border-rose/40",
    hover: "group-hover:text-rose",
    glow: "group-hover:shadow-rose/10",
  },
  {
    title: "Treat prompts like software",
    description:
      "Version prompts, review them, diff them, and connect them to the exact evaluations they are expected to pass.",
    tags: ["versioning", "review", "change control"],
    accent: "group-hover:border-peach/40",
    hover: "group-hover:text-peach",
    glow: "group-hover:shadow-peach/10",
  },
  {
    title: "Build evals before scale",
    description:
      "Regression sets and adversarial cases should arrive early so teams can iterate with signal instead of instinct.",
    tags: ["regression", "scorecards", "adversarial"],
    accent: "group-hover:border-mint/40",
    hover: "group-hover:text-mint",
    glow: "group-hover:shadow-mint/10",
  },
  {
    title: "Keep humans in the loop",
    description:
      "High-leverage review systems turn expert judgment into structured feedback, better prompts, and better datasets.",
    tags: ["review queues", "annotation", "feedback"],
    accent: "group-hover:border-sky/40",
    hover: "group-hover:text-sky",
    glow: "group-hover:shadow-sky/10",
  },
  {
    title: "Instrument production paths",
    description:
      "Trace latency, cost, context size, and failure patterns so deployment becomes an observed system, not a black box.",
    tags: ["tracing", "latency", "cost"],
    accent: "group-hover:border-indigo/40",
    hover: "group-hover:text-indigo",
    glow: "group-hover:shadow-indigo/10",
  },
  {
    title: "Specialize by domain",
    description:
      "The real opportunity is not generic prompting. It is domain-specific playbooks that understand the workflow, stakes, and language of a vertical.",
    tags: ["playbooks", "taxonomy", "determinism"],
    accent: "group-hover:border-violet/40",
    hover: "group-hover:text-violet",
    glow: "group-hover:shadow-violet/10",
  },
];

export default function Portfolio() {
  return (
    <section id="operating-model" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Operating Model
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-peach" />
          <p className="mt-3 sm:mt-4 text-muted text-[15px] sm:text-lg max-w-xl">
            A working model for how AI-native teams can turn raw model capability
            into dependable systems with clearer feedback loops.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div
                className={`group flex flex-col justify-between rounded-2xl bg-surface border border-border p-5 sm:p-6 hover:shadow-xl ${p.accent} ${p.glow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className={`text-base sm:text-lg font-semibold text-foreground ${p.hover} transition-colors`}>
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
