import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileCode2,
  LifeBuoy,
  TerminalSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  tutorialAgentPrompt,
  tutorialProjectFiles,
  tutorialQuickStart,
  tutorialScoreManualRun,
  tutorialWorkflowCards,
} from "@/content/agentEvalsTutorial";

export const metadata: Metadata = {
  title: "After the Demo — Hello World Agent Evals Tutorial",
  description:
    "A public tutorial for learning support-flavored agent evals with Cursor, Claude Code, and similar tools after AI features are deployed.",
};

export default function AgentEvalsHelloWorldPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 sm:pt-16">
        <section className="px-4 sm:px-6 py-16 sm:py-24 bg-surface-alt">
          <div className="mx-auto max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-light px-4 py-1.5 text-sm font-medium text-violet">
              <Bot size={16} />
              Public tutorial
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground max-w-4xl">
              Hello World: agent evals for optimizing AI after deployment
            </h1>
            <p className="mt-5 max-w-3xl text-base sm:text-xl leading-relaxed text-muted">
              This tutorial is for people already using Cursor, Claude Code, or a
              similar coding agent in day-to-day debugging. The goal is to teach a
              small but real eval loop for support-style work after an AI tool has
              shipped to customers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="#quick-start"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
              >
                Start with the quick start
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/#workflow"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
              >
                See the homepage workflow
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <FeatureCard
                icon={<LifeBuoy size={18} className="text-rose" />}
                title="Support flavored"
                description="The example models the work that starts after a customer report lands, not abstract prompt advice."
              />
              <FeatureCard
                icon={<CheckCircle2 size={18} className="text-sky" />}
                title="Deterministic"
                description="You score structured artifacts with clear checks instead of debating whether a response feels better."
              />
              <FeatureCard
                icon={<TerminalSquare size={18} className="text-mint" />}
                title="Tool-native"
                description="The flow assumes your everyday development loop already runs through Cursor, Claude Code, or something similar."
              />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="Why this tutorial exists"
              title="The useful work starts after the AI feature launches"
              description="The operational challenge is not just writing a prompt. It is gathering context, locating failures, deciding what should be escalated, and making the next run better than the last one."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tutorialWorkflowCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border bg-surface p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <h2 className="text-base sm:text-lg font-semibold text-foreground">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-16 sm:py-24 bg-surface-alt">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              eyebrow="What you build"
              title="A tiny eval project that mirrors an AI-native support loop"
              description="The project lives in `examples/agent-evals-hello-world` and stays intentionally small. Four scenarios are enough to learn the loop before you bring in larger datasets, live models, or MCP-based context."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {tutorialProjectFiles.map((item) => (
                <div
                  key={item.path}
                  className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
                >
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-violet">
                    <FileCode2 size={16} />
                    <code>{item.path}</code>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quick-start" className="px-4 sm:px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="Step by step"
              title="Run the baseline, generate a manual artifact, then score it"
              description="The tutorial keeps the loop direct: look at failing examples, ask your coding agent to produce a structured run, and use the eval harness to show exactly what improved."
            />

            <div className="mt-10 space-y-10">
              <StepBlock
                number="01"
                title="Start by seeing the benchmark work"
                description="Run the intentionally rough baseline and the passing improved examples. This gives you a feel for what the eval harness actually checks."
                code={tutorialQuickStart}
              />

              <StepBlock
                number="02"
                title="Read the fixture and prompt"
                description="Open the scenario fixture and the support-investigator prompt in Cursor or Claude Code. Notice that the output is not a chat transcript. It is a structured investigation artifact with a failure point, disposition, evidence, customer reply, and optional bug report."
              />

              <StepBlock
                number="03"
                title="Ask your agent to generate one manual run"
                description="Use a single scenario, such as `repo-index-timeout`, and have the agent save the result into `runs/manual/`. This keeps the run comparable to the baseline and improved examples."
                code={tutorialAgentPrompt}
              />

              <StepBlock
                number="04"
                title="Score the manual run"
                description="Run the same harness against your manual artifact. The checks tell you whether the agent found the right failure point, cited the right sources, used safe customer-facing language, and escalated only when it should."
                code={tutorialScoreManualRun}
              />

              <StepBlock
                number="05"
                title="Tighten the prompt and repeat"
                description="If the run fails, do not hand-wave. Tighten the instruction, strengthen the schema, add a better example, or narrow the definition of done. The point is to make improvements and regressions obvious without relying on vibes."
              />
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-16 sm:py-24 bg-surface-alt">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="What to do next"
              title="Use the same loop for your own deployed AI workflows"
              description="Once the hello world feels natural, expand carefully. Add new scenarios, grade more artifacts, and let recurring tickets shape the benchmark."
            />

            <div className="mt-10 rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-muted">
                <li>Turn repeated support tickets into reusable eval scenarios.</li>
                <li>Score bug-ticket drafts, customer replies, or known-issue searches separately.</li>
                <li>Use the failing checks to decide whether to revise the prompt, the docs, or the workflow itself.</li>
                <li>Keep the benchmark small enough that you will actually run it during daily troubleshooting.</li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
                >
                  Back to After the Demo
                </Link>
                <Link
                  href="/#tutorial"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-medium text-foreground hover:border-violet/30 transition-all"
                >
                  See the inline version
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-violet">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl text-[15px] sm:text-lg leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface-alt">
        {icon}
      </div>
      <h2 className="mt-4 text-base sm:text-lg font-semibold text-foreground">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

function StepBlock({
  number,
  title,
  description,
  code,
}: {
  number: string;
  title: string;
  description: string;
  code?: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <div className="text-sm font-semibold uppercase tracking-widest text-violet">
        Step {number}
      </div>
      <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-foreground">
        {title}
      </h2>
      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
        {description}
      </p>
      {code ? (
        <pre className="mt-5 overflow-x-auto rounded-2xl bg-foreground px-4 py-4 text-sm leading-relaxed text-background">
          <code>{code}</code>
        </pre>
      ) : null}
    </div>
  );
}
