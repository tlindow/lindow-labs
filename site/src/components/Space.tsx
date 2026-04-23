"use client";

import {
  Cpu,
  Printer,
  CircuitBoard,
  Coffee,
  Recycle,
  Waves,
} from "lucide-react";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const bays = [
  {
    icon: CircuitBoard,
    title: "Electronics bench",
    body: "Hakko stations, reflow hot plate, bench supplies, an oscilloscope that isn't on your kitchen table.",
    bg: "bg-amber-light",
    accent: "text-amber",
  },
  {
    icon: Printer,
    title: "Fabrication bay",
    body: "FDM + resin printers, laser cutter, CNC router, and a full rack of filament we actually keep dry.",
    bg: "bg-peach-light",
    accent: "text-peach",
  },
  {
    icon: Cpu,
    title: "Hardware lab",
    body: "ESP32, Pi, RP2040, Jetson, sensors, breakouts, cables that are already stripped.",
    bg: "bg-sky-light",
    accent: "text-sky",
  },
  {
    icon: Recycle,
    title: "Teardown corner",
    body: "Donated appliances and dead electronics, waiting to be opened, understood, and put back differently.",
    bg: "bg-mint-light",
    accent: "text-mint",
  },
  {
    icon: Coffee,
    title: "Hack lounge",
    body: "Fast Wi-Fi, quiet desks, a decent espresso machine, and whiteboards that erase.",
    bg: "bg-violet-light",
    accent: "text-violet",
  },
  {
    icon: Waves,
    title: "Coast deck",
    body: "Outdoor workspace with shade, power, and a view that reminds you it's San Diego.",
    bg: "bg-indigo-light",
    accent: "text-indigo",
  },
];

export default function Space() {
  return (
    <section id="space" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-sky">
            The Space
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Inside the Hub.
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-sky" />
          <p className="mt-5 text-[15px] sm:text-lg text-muted max-w-2xl">
            Roughly 4,800 sq ft of benches, machines, and a whiteboard for
            every argument. Open to members and guests on tour days.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          staggerDelay={0.08}
        >
          {bays.map((bay) => {
            const Icon = bay.icon;
            return (
              <StaggerItem key={bay.title}>
                <article className="group relative h-full rounded-2xl bg-surface border border-border p-6 hover:border-foreground/20 hover:shadow-md transition-all duration-300">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${bay.bg} ${bay.accent}`}
                  >
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-lg sm:text-xl text-foreground">
                    {bay.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-muted">
                    {bay.body}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
