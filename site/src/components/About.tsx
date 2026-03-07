"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            About Hapi Labs
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-sky" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            <p>
              Hapi Labs is an emerging creative technology lab shaped by web
              engineering, playful interaction design, and the feeling of a
              studio where new ideas are actively being tested. The aim is not
              simply to market services, but to create a place where systems,
              tools, and experiences can be explored in public.
            </p>
            <p>
              The reference points are closer to media labs, exhibit studios,
              and research groups than a traditional agency. Websites are still
              part of the practice, but only as one output among more expansive
              creative projects, interactive systems, and learning environments.
            </p>
            <p>
              Right now the lab is early and alive: publishing field notes,
              building experiments, and sketching toward programs that feel more
              like apprenticeship, shared study, and public inquiry than
              packaged services.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
          <StaggerItem>
            <Stat label="Mode" value="Studio x Lab" color="bg-rose-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Output" value="Experiments" color="bg-sky-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Status" value="In Motion" color="bg-mint-light" />
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
