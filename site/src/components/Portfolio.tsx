"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const pillars = [
  {
    title: "Turn escalations into evals",
    description:
      "A repeated support case should become a scored example, not a story that disappears into Slack after the ticket closes.",
    tags: ["scenarios", "tickets", "benchmarks"],
    accent: "group-hover:border-rose/40",
    hover: "group-hover:text-rose",
    glow: "group-hover:shadow-rose/10",
  },
  {
    title: "Capture the run cleanly",
    description:
      "Score structured investigation artifacts so you can check reasoning, evidence, reply safety, and escalation quality in one place.",
    tags: ["artifacts", "json", "traces"],
    accent: "group-hover:border-peach/40",
    hover: "group-hover:text-peach",
    glow: "group-hover:shadow-peach/10",
  },
  {
    title: "Keep the benchmark small",
    description:
      "You do not need a giant dataset to begin. A tight set of representative tickets is enough to surface regressions quickly.",
    tags: ["small sets", "signal", "regressions"],
    accent: "group-hover:border-mint/40",
    hover: "group-hover:text-mint",
    glow: "group-hover:shadow-mint/10",
  },
  {
    title: "Version the instructions",
    description:
      "The prompt, schema, and expected outputs should evolve together so the agent gets better at the exact work you care about.",
    tags: ["prompting", "schemas", "reviews"],
    accent: "group-hover:border-sky/40",
    hover: "group-hover:text-sky",
    glow: "group-hover:shadow-sky/10",
  },
  {
    title: "Protect customer-facing language",
    description:
      "A useful eval does more than classify the issue. It also checks that the reply stays calm, actionable, and free from internal-only jargon.",
    tags: ["tone", "safety", "replies"],
    accent: "group-hover:border-indigo/40",
    hover: "group-hover:text-indigo",
    glow: "group-hover:shadow-indigo/10",
  },
  {
    title: "Feed the system back",
    description:
      "Good support work improves prompts, runbooks, docs, escalation paths, and the next version of the benchmark at the same time.",
    tags: ["docs", "tickets", "playbooks"],
    accent: "group-hover:border-violet/40",
    hover: "group-hover:text-violet",
    glow: "group-hover:shadow-violet/10",
  },
];

export default function Portfolio() {
  return (
    <section id="loops" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            The optimization loops
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-peach" />
          <p className="mt-3 sm:mt-4 text-muted text-[15px] sm:text-lg max-w-xl">
            After deployment, the wins come from turning repeated failures into
            tighter evals, safer responses, and better workflows around the model.
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
