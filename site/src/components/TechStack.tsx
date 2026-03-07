"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

const stackGroups = [
  {
    title: "Web engineering",
    description: "Core technologies I use to design, build, and ship products on the web.",
    items: [
      { name: "TypeScript", bg: "bg-sky-light", dot: "bg-sky" },
      { name: "JavaScript", bg: "bg-amber-light", dot: "bg-amber" },
      { name: "React", bg: "bg-sky-light", dot: "bg-sky" },
      { name: "Next.js", bg: "bg-violet-light", dot: "bg-violet" },
      { name: "Node.js", bg: "bg-mint-light", dot: "bg-mint" },
      { name: "Python", bg: "bg-indigo-light", dot: "bg-indigo" },
      { name: "HTML5", bg: "bg-peach-light", dot: "bg-peach" },
      { name: "CSS3", bg: "bg-sky-light", dot: "bg-sky" },
      { name: "Tailwind", bg: "bg-sky-light", dot: "bg-sky" },
      { name: "Docker", bg: "bg-indigo-light", dot: "bg-indigo" },
      { name: "Git", bg: "bg-rose-light", dot: "bg-rose" },
      { name: "SQL", bg: "bg-violet-light", dot: "bg-violet" },
    ],
  },
  {
    title: "Enterprise tooling",
    description: "Platforms I use to coordinate delivery, monitor systems, and support teams in production.",
    items: [
      { name: "Buildkite", bg: "bg-mint-light", dot: "bg-mint" },
      { name: "Snowflake", bg: "bg-sky-light", dot: "bg-sky" },
      { name: "Jira", bg: "bg-indigo-light", dot: "bg-indigo" },
      { name: "Chronosphere", bg: "bg-violet-light", dot: "bg-violet" },
      { name: "Grafana", bg: "bg-peach-light", dot: "bg-peach" },
      { name: "Rootly", bg: "bg-rose-light", dot: "bg-rose" },
      { name: "PagerDuty", bg: "bg-amber-light", dot: "bg-amber" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Tech & Tools
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-amber" />
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted">
            Lindow Labs spans both modern product engineering and the enterprise
            tooling that keeps delivery, observability, and incident response
            moving.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-2">
          {stackGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 0.1}>
              <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {group.description}
                </p>

                <StaggerContainer
                  className="mt-5 flex flex-wrap gap-2.5 sm:gap-3"
                  staggerDelay={0.04}
                >
                  {group.items.map((t) => (
                    <StaggerItem key={t.name} direction="none" distance={0}>
                      <span
                        className={`inline-flex cursor-default items-center gap-2 rounded-full ${t.bg} px-3.5 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:px-4 sm:py-2 sm:text-sm`}
                      >
                        <span className={`h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5 ${t.dot}`} />
                        {t.name}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
