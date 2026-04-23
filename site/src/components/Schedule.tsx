"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";

const days = [
  {
    day: "Mon",
    name: "Open Bench",
    hours: "5pm – 10pm",
    note: "Drop in. Work on your own thing. Help or get helped.",
    tint: "bg-amber-light",
    accent: "text-amber",
  },
  {
    day: "Tue",
    name: "Teardown Tuesday",
    hours: "6pm – 9pm",
    note: "One donated device, opened in front of everyone. Bring your own curiosity.",
    tint: "bg-peach-light",
    accent: "text-peach",
  },
  {
    day: "Wed",
    name: "Firmware First",
    hours: "6pm – 9pm",
    note: "Cohort night. Microcontroller track. Members + enrolled guests.",
    tint: "bg-sky-light",
    accent: "text-sky",
  },
  {
    day: "Thu",
    name: "Solder Up",
    hours: "6pm – 9pm",
    note: "Cohort night. Intro electronics track. Members + enrolled guests.",
    tint: "bg-mint-light",
    accent: "text-mint",
  },
  {
    day: "Fri",
    name: "Show & Tell",
    hours: "7pm – 9pm",
    note: "Five-minute demos, warm pizza, cold drinks. Open to the public.",
    tint: "bg-violet-light",
    accent: "text-violet",
  },
  {
    day: "Sat",
    name: "Build Day",
    hours: "10am – 6pm",
    note: "The shop, all day. Members can bring up to two guests.",
    tint: "bg-indigo-light",
    accent: "text-indigo",
  },
  {
    day: "Sun",
    name: "Closed",
    hours: "Recovery",
    note: "We go to the beach. You probably should too.",
    tint: "bg-rose-light",
    accent: "text-rose",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-violet">
            Schedule
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            A week at the Hub.
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-violet" />
          <p className="mt-5 text-[15px] sm:text-lg text-muted max-w-2xl">
            Same rhythm every week. You&rsquo;ll know when to show up without
            checking a calendar.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="mt-10 sm:mt-14 grid gap-3"
          staggerDelay={0.06}
        >
          {days.map((d) => (
            <StaggerItem key={d.day}>
              <div className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[96px_1fr_auto] items-center gap-4 sm:gap-6 rounded-2xl bg-surface border border-border px-4 sm:px-6 py-4 sm:py-5 hover:border-foreground/20 hover:shadow-sm transition-all">
                <div
                  className={`flex items-center justify-center w-14 sm:w-20 h-14 sm:h-16 rounded-xl ${d.tint}`}
                >
                  <span
                    className={`font-display text-lg sm:text-xl font-bold ${d.accent}`}
                  >
                    {d.day}
                  </span>
                </div>
                <div>
                  <p className="font-display text-base sm:text-lg text-foreground">
                    {d.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted mt-0.5">
                    {d.note}
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-medium text-muted whitespace-nowrap">
                  {d.hours}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
