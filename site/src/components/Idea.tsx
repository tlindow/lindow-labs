"use client";

import { Users, User, Wrench } from "lucide-react";
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
            A tinkerer builds for themselves.
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-amber" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            <p>
              You spend your day building for someone else. An employer, a
              user, a roadmap, a stakeholder with opinions. The work is real.
              The audience isn&rsquo;t you.
            </p>
            <p>
              A tinkerer builds for themselves. The project is the point.
              There&rsquo;s no ticket, no standup, no user story &mdash; just
              the thing you want to exist, and the stubbornness to make it.
              No deadline except bedtime. No definition of done except the
              one in your head.
            </p>
            <p>
              The Tinker Hub is the bench for that. The tools, the space, and
              the people &mdash; so the project you&rsquo;d build for yourself
              anyway finally gets built, and gets built well.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="mt-10 sm:mt-12 grid sm:grid-cols-3 gap-4 sm:gap-6"
          staggerDelay={0.12}
        >
          <StaggerItem>
            <Step
              icon={<Users size={22} strokeWidth={1.75} />}
              label="Day job"
              title="You build for someone else."
              tint="bg-sky-light"
              dot="text-sky"
            />
          </StaggerItem>
          <StaggerItem>
            <Step
              icon={<Wrench size={22} strokeWidth={1.75} />}
              label="Here"
              title="You build for you."
              tint="bg-amber-light"
              dot="text-amber"
            />
          </StaggerItem>
          <StaggerItem>
            <Step
              icon={<User size={22} strokeWidth={1.75} />}
              label="After"
              title="You keep what you made."
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
