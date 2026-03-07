"use client";

import {
  Code2,
  Compass,
  FolderOpen,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";

const offerings = [
  {
    icon: Code2,
    title: "Website Strategy & Builds",
    description:
      "Design and ship polished marketing sites and web experiences that communicate clearly and support real business goals.",
    color: "bg-sky-light",
    iconColor: "text-sky",
  },
  {
    icon: Compass,
    title: "P0 Planning & Delivery Support",
    description:
      "Get clarity on the highest-priority work, reduce thrash, and turn urgent asks into a plan your team can actually execute.",
    color: "bg-peach-light",
    iconColor: "text-peach",
  },
  {
    icon: FolderOpen,
    title: "Technical Reviews & Pairing",
    description:
      "Work through implementation details, delivery risk, and architecture trade-offs with a practical second set of eyes.",
    color: "bg-mint-light",
    iconColor: "text-mint",
  },
  {
    icon: MessageCircle,
    title: "Career & Leadership Coaching",
    description:
      "Talk through growth, communication, and the next move when you want someone who understands both the work and the people side.",
    color: "bg-violet-light",
    iconColor: "text-violet",
  },
];

export default function Mentoring() {
  return (
    <section id="mentoring" className="relative overflow-hidden">
      {/* Pastel violet banner */}
      <div className="relative bg-gradient-to-br from-violet via-indigo to-sky py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet/0 via-white/10 to-violet/0"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal direction="none">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white/90 mb-6 backdrop-blur-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                <Sparkles size={12} className="shrink-0 text-white" />
              </span>
              Now booking 1:1 sessions
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Work With Lindow Labs
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
              Need a polished website, sharper technical direction, or a trusted
              thought partner for the highest-priority work on your plate? I help
              founders, teams, and individual operators stay clear on the P0s and
              move them forward.
            </p>

            <MagneticButton
              href="https://calendly.com/tylerlindow/elevate"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-violet hover:bg-white/90 transition-all hover:shadow-xl hover:shadow-white/20"
            >
              Book a Strategy Session
              <ArrowRight size={15} />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>

      {/* Offerings grid on cream */}
      <div className="bg-surface-alt py-14 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-violet mb-10 sm:mb-12">
              How Lindow Labs can help
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid gap-4 sm:gap-6 sm:grid-cols-2" staggerDelay={0.1}>
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <StaggerItem key={o.title}>
                  <div className="rounded-2xl bg-surface p-5 sm:p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${o.color} ${o.iconColor}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-3 text-base sm:text-lg font-semibold text-foreground">
                      {o.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed">
                      {o.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 sm:mt-12 rounded-2xl bg-surface border border-border p-6 sm:p-8 text-center">
              <p className="text-base sm:text-lg font-medium text-foreground">
                Need a sounding board before you commit to a direction?
              </p>
              <p className="mt-2 text-sm text-muted max-w-lg mx-auto">
                Send me a note with what feels most urgent right now. We can
                figure out whether you need a website partner, technical
                advisory, or simply a focused conversation.
              </p>
              <a
                href="mailto:tyler.lindow@gmail.com"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet hover:underline group"
              >
                Send me a message
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
