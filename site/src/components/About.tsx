"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";
import aboutContent from "@/content/about.json";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            About Me
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-sky" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
          {aboutContent.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <Stat label={stat.label} value={stat.value} color={stat.color} />
            </StaggerItem>
          ))}
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
