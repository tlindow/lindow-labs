"use client";

import { Terminal, ArrowRight, CircuitBoard } from "lucide-react";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

export default function Idea() {
  return (
    <section id="idea" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            The gap between shipping code and making a thing.
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-amber" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            <p>
              You know how to ship software. You&rsquo;ve pushed code on a
              Friday and lived. You&rsquo;ve debugged a race condition at 1am.
              You can reason about a system that exists mostly as text.
            </p>
            <p>
              But the physical world has its own grammar. Voltage drops, cold
              solder joints, thermal margins, tolerances, the stubbornness of
              a 3D print that just won&rsquo;t stick to the bed. Code
              compiles. Atoms negotiate.
            </p>
            <p>
              The Tinker Hub exists for engineers who want the other half of
              the craft &mdash; a bench, a soldering iron, a workshop full of
              people who already shipped today and now want to make something
              that clicks when you press it.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="mt-10 sm:mt-12 grid sm:grid-cols-3 gap-4 sm:gap-6"
          staggerDelay={0.12}
        >
          <StaggerItem>
            <Step
              icon={<Terminal size={22} strokeWidth={1.75} />}
              label="Start"
              title="You write software."
              tint="bg-sky-light"
              dot="text-sky"
            />
          </StaggerItem>
          <StaggerItem>
            <Step
              icon={<ArrowRight size={22} strokeWidth={1.75} />}
              label="Here"
              title="You get your hands on it."
              tint="bg-amber-light"
              dot="text-amber"
            />
          </StaggerItem>
          <StaggerItem>
            <Step
              icon={<CircuitBoard size={22} strokeWidth={1.75} />}
              label="End"
              title="You ship a thing."
              tint="bg-mint-light"
              dot="text-mint"
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

function Step({
  icon,
  label,
  title,
  tint,
  dot,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  tint: string;
  dot: string;
}) {
  return (
    <div className={`rounded-2xl ${tint} p-5 sm:p-6 h-full`}>
      <div className={`${dot} mb-3`}>{icon}</div>
      <p className="text-[11px] font-semibold tracking-widest uppercase text-muted">
        {label}
      </p>
      <p className="mt-1 text-base sm:text-lg font-medium text-foreground leading-snug">
        {title}
      </p>
    </div>
  );
}
