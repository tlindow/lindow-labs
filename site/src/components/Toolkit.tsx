"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const groups = [
  {
    heading: "Electronics",
    items: [
      "Hakko FX-888D",
      "Weller WE1010",
      "Rigol DS1054Z",
      "Fluke 117",
      "Reflow hot plate",
      "Bench PSU ×6",
    ],
    bg: "bg-amber-light",
    dot: "bg-amber",
  },
  {
    heading: "Fabrication",
    items: [
      "Prusa MK4 ×3",
      "Bambu X1C",
      "Formlabs Form 3+",
      "Shaper Origin",
      "Glowforge Pro",
      "Dremel & jigsaw",
    ],
    bg: "bg-peach-light",
    dot: "bg-peach",
  },
  {
    heading: "Compute & firmware",
    items: [
      "Raspberry Pi 5",
      "ESP32 / ESP32-S3",
      "RP2040 (Pico)",
      "Jetson Orin Nano",
      "STM32 dev kits",
      "Arduino fleet",
    ],
    bg: "bg-sky-light",
    dot: "bg-sky",
  },
  {
    heading: "Measure & debug",
    items: [
      "Saleae Logic Pro 16",
      "J-Link + ST-Link",
      "USB-C power analyzers",
      "Thermal camera",
      "Bench microscope",
      "Calipers & gauges",
    ],
    bg: "bg-mint-light",
    dot: "bg-mint",
  },
];

export default function Toolkit() {
  return (
    <section id="toolkit" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-peach">
            Toolkit
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            What&rsquo;s on the bench.
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-peach" />
          <p className="mt-5 text-[15px] sm:text-lg text-muted max-w-2xl">
            A working list of the gear we run. If something&rsquo;s missing
            and you&rsquo;d use it weekly, we probably want it too.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="mt-10 sm:mt-14 grid sm:grid-cols-2 gap-4 sm:gap-5"
          staggerDelay={0.1}
        >
          {groups.map((g) => (
            <StaggerItem key={g.heading}>
              <div className={`h-full rounded-2xl ${g.bg} p-6 sm:p-7`}>
                <p className="text-xs font-semibold tracking-widest uppercase text-foreground/70">
                  {g.heading}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-surface/80 border border-border/70 px-3 py-1.5 text-xs sm:text-sm font-medium text-foreground"
                    >
                      <span className={`w-2 h-2 rounded-full ${g.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
