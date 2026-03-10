"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function About() {
  return (
    <section id="why" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Why after the demo matters
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-sky" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            <p>
              Shipping an AI feature is the easy part compared to what happens
              next. The harder job is helping the tool survive contact with real
              customers, ambiguous tickets, account-specific workflows, and the
              long tail of failure modes that only show up in production.
            </p>
            <p>
              That is where post-sales teams become strategic. Support,
              solutions, and implementation engineers already know how to gather
              context, reproduce issues, decide whether something is a bug or
              expected behavior, and explain the next step clearly to a customer.
            </p>
            <p>
              Agent evals turn that instinct into a repeatable system. Instead of
              relying on vibes, you can capture an investigation artifact, score
              it, compare runs over time, and gradually improve the prompts,
              runbooks, and customer workflows that sit around the model.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
          <StaggerItem>
            <Stat label="Core steps in the support loop" value="4" color="bg-rose-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Outputs worth scoring" value="3" color="bg-sky-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Small eval set needed to start" value="1" color="bg-mint-light" />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className={`text-center rounded-xl ${color} py-4 px-2 hover:shadow-md transition-shadow`}>
      <CountUp value={value} className="text-xl sm:text-2xl font-semibold text-foreground block" />
      <p className="mt-0.5 text-xs sm:text-sm text-muted">{label}</p>
    </div>
  );
}
