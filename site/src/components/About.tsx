"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            About Lindow Labs
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-sky" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            <p>
              Lindow Labs is the home for my work as a web developer, builder,
              and advisor. It stays personal because I&rsquo;m the one doing the
              work. I got into software after seeing a museum terminal and
              realizing I wanted to understand how software actually worked. I
              went through an immersive coding program, dove into JavaScript and
              React, and never looked back.
            </p>
            <p>
              Today I&rsquo;m especially interested in helping people get clear
              on what matters most. Sometimes that means designing and building
              a website. Sometimes it means sorting through technical decisions,
              reviewing delivery risk, or helping a team focus on the P0s that
              actually move the business forward.
            </p>
            <p>
              I keep thinking about Lindow Labs as part studio, part career lab,
              and part practical incubator for people who want thoughtful
              execution without the noise. The goal is simple: build useful
              things, create clarity, and help good work compound over time.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
          <StaggerItem>
            <Stat label="Services" value="Web + Advisory" color="bg-rose-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Primary Stack" value="React / TS" color="bg-sky-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Operating Style" value="P0 First" color="bg-mint-light" />
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
