"use client";

import { Flame, Cpu, Plug, Hammer } from "lucide-react";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const tracks = [
  {
    tag: "04 weeks",
    title: "Solder Up",
    body: "Your first circuit, end to end. Read a schematic, place components, flow solder, debug with a meter. Leaves with a working board you made.",
    forWho: "For engineers who have never used a soldering iron and are ready to change that.",
    accent: "bg-amber text-foreground",
    tint: "bg-amber-light",
    icon: "iron",
  },
  {
    tag: "06 weeks",
    title: "Firmware First",
    body: "C and Rust on microcontrollers, aimed at web and backend devs. Interrupts, peripherals, memory maps, and why the LED won't turn on.",
    forWho: "For people fluent in high-level languages who want the metal underneath.",
    accent: "bg-sky text-foreground",
    tint: "bg-sky-light",
    icon: "chip",
  },
  {
    tag: "08 weeks",
    title: "Retrofit Club",
    body: "Bring a dead appliance or a dumb gadget. Leave with it talking to your network, your home, or nothing at all &mdash; but on your terms.",
    forWho: "For IT folks and home-lab operators who want the physical half of home-lab.",
    accent: "bg-mint text-foreground",
    tint: "bg-mint-light",
    icon: "plug",
  },
  {
    tag: "Ongoing",
    title: "Build Nights",
    body: "No curriculum, no deliverable, no deck. Just the shop, open. Bring a project, bring nothing, bring someone who wants to see it.",
    forWho: "For members who already have more ideas than evenings.",
    accent: "bg-peach text-foreground",
    tint: "bg-peach-light",
    icon: "hammer",
  },
];

function TrackIcon({ name }: { name: string }) {
  const props = { size: 22, strokeWidth: 1.75 };
  switch (name) {
    case "iron":
      return <Flame {...props} />;
    case "chip":
      return <Cpu {...props} />;
    case "plug":
      return <Plug {...props} />;
    default:
      return <Hammer {...props} />;
  }
}

export default function Tracks() {
  return (
    <section id="tracks" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber">
            Tracks
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            From engineer to tinker.
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-amber" />
          <p className="mt-5 text-[15px] sm:text-lg text-muted max-w-2xl">
            Four ways in. Pick one, stack them, or skip straight to build
            nights. Every track meets weekly at the Hub.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="mt-10 sm:mt-14 grid md:grid-cols-2 gap-4 sm:gap-6"
          staggerDelay={0.1}
        >
          {tracks.map((t) => (
            <StaggerItem key={t.title}>
              <article
                className={`relative h-full rounded-2xl ${t.tint} p-6 sm:p-7 overflow-hidden`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${t.accent}`}
                  >
                    <TrackIcon name={t.icon} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-muted">
                    {t.tag}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl sm:text-2xl text-foreground">
                  {t.title}
                </h3>
                <p
                  className="mt-2 text-sm sm:text-[15px] leading-relaxed text-muted"
                  dangerouslySetInnerHTML={{ __html: t.body }}
                />
                <p className="mt-4 pt-4 border-t border-foreground/10 text-xs sm:text-sm text-foreground/80">
                  {t.forWho}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
