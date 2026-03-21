"use client";

import { ExternalLink } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import portfolioContent from "@/content/portfolio.json";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Portfolio
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-peach" />
          <p className="mt-3 sm:mt-4 text-muted text-[15px] sm:text-lg max-w-xl">
            {portfolioContent.intro}{" "}
            <a
              href={portfolioContent.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet hover:underline font-medium"
            >
              GitHub
            </a>
            .
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
          {portfolioContent.projects.map((p) => (
            <StaggerItem key={p.title}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col justify-between rounded-2xl bg-surface border border-border p-5 sm:p-6 hover:shadow-xl ${p.accent} ${p.glow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className={`text-base sm:text-lg font-semibold text-foreground ${p.hover} transition-colors`}>
                      {p.title}
                    </h3>
                    <ExternalLink
                      size={15}
                      className="mt-0.5 shrink-0 text-muted opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
