"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function About() {
  return (
    <section id="thesis" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            The Thesis
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-sky" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            <p>
              The next wave of durable advantage will not come only from training
              better models. It will come from organizations that learn how to
              turn model capability into repeatable operating systems inside
              real products, real workflows, and real businesses.
            </p>
            <p>
              That means treating prompt engineering as interface design,
              evaluation as product QA, and human review as a compounding source
              of data, judgment, and refinement. The teams that can operationalize
              those layers will be the ones that make frontier models useful in
              context, not just impressive in demos.
            </p>
            <p>
              AI Foundations exists to study that layer. The goal is to build a
              research-driven educational platform around prompt systems, MLOps,
              evaluation loops, and the playbooks AI-native companies need to
              operate with more determinism.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
          <StaggerItem>
            <Stat label="Year this becomes table stakes" value="2026" color="bg-rose-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Core layers: prompt, eval, ops" value="3" color="bg-sky-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Goal: more reliable model behavior" value="1" color="bg-mint-light" />
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
