"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileCode2, PlayCircle } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import {
  inlineTutorialSteps,
  tutorialProjectFiles,
} from "@/content/agentEvalsTutorial";

const highlights = [
  "Support-flavored benchmark",
  "Real walkthrough clip",
  "Code blocks inline",
  "No repo hopping required",
];

export default function Speaking() {
  return (
    <section id="tutorial" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <PlayCircle size={24} className="text-rose sm:w-7 sm:h-7" />
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
              Inline tutorial
            </h2>
          </div>
          <div className="mt-2 ml-9 sm:ml-10 h-1 w-16 rounded-full bg-rose" />

          <p className="mt-5 sm:mt-6 text-muted text-[15px] sm:text-lg max-w-2xl">
            You should be able to understand the loop without leaving the page.
            This section shows the same hello-world agent eval project in a more
            visual, inline way, then links out to the full tutorial page if you
            want the longer walkthrough.
          </p>
        </ScrollReveal>

        <div className="mt-8 sm:mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal>
            <div className="rounded-3xl border border-border bg-surface p-5 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-border">
                <Image
                  src="/media/after-the-demo-tutorial-steps.webp"
                  alt="Inline tutorial code steps"
                  width={1280}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {tutorialProjectFiles.slice(0, 4).map((item) => (
                  <div
                    key={item.path}
                    className="rounded-2xl border border-border bg-surface-alt p-4"
                  >
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-violet">
                      <FileCode2 size={15} />
                      <code>{item.path}</code>
                    </div>
                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-4" staggerDelay={0.08}>
            {inlineTutorialSteps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div
                  className={`rounded-3xl border border-border bg-surface p-5 sm:p-6 ${
                    index === 0
                      ? "shadow-lg shadow-violet/5"
                      : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
                    Step {step.number}
                  </p>
                  <h3 className="mt-3 text-lg sm:text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  <pre className="mt-4 overflow-x-auto rounded-2xl bg-foreground px-4 py-4 text-sm leading-relaxed text-background">
                    <code>{step.code}</code>
                  </pre>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/tutorials/agent-evals-hello-world"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
            >
              Open the full tutorial page
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/media/after-the-demo-walkthrough.mp4"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
            >
              Watch the clip directly
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
