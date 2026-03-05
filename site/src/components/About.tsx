"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            About Me
          </h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-sky" />
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
            <p>
              I got into software development because I realized I had no idea how
              software worked. At the time I was doing research at the Field
              Museum in Chicago when I saw someone pull up a terminal and open an
              application that visitors would interact with. I went through an
              immersive coding program, dove into JavaScript and React, and never
              looked back. Building for the web scratches every itch I have
              &mdash; problem-solving, design, creativity, and the instant feedback
              of seeing something come to life in a browser.
            </p>
            <p>
              My roots run through hands-on learning and computer history. I spent
              time at{" "}
              <span className="text-foreground font-medium">The Tech Interactive</span>
              &nbsp;&mdash; a museum where young people tinker with technology
              &mdash; and at the{" "}
              <span className="text-foreground font-medium">Computer History Museum</span>
              {" "}in Mountain View, where I ran workshops and led tours. That
              appreciation for how we got here informs how I think about where
              we&rsquo;re going.
            </p>
            <p>
              I&rsquo;m drawn to projects at the intersection of technology and
              creativity &mdash; whether that&rsquo;s an interactive booking
              system, a generative art sketch, or a tool that makes
              someone&rsquo;s workflow easier. I&rsquo;m passionate about AI in
              software and always looking to learn more about what people are
              building.
            </p>
            <p>
              Outside of code, I&rsquo;m curious about storytelling, design,
              and how technology brings people together. Long term, I&rsquo;m
              building toward{" "}
              <span className="text-foreground font-medium">Hapi Brewing</span>
              &nbsp;&mdash; my company (LLC) focused on hop wine. It&rsquo;s
              pre-revenue, but it&rsquo;s the vision I&rsquo;m working toward.
              Right now I&rsquo;m focused on building in public, mentoring other
              developers, and creating content &mdash; and I&rsquo;m building this
              site to eventually sell my services and point people to my products.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8" staggerDelay={0.15}>
          <StaggerItem>
            <Stat label="GitHub Repos" value="45+" color="bg-rose-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Primary Stack" value="React / TS" color="bg-sky-light" />
          </StaggerItem>
          <StaggerItem>
            <Stat label="Focus" value="Mentoring" color="bg-mint-light" />
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
