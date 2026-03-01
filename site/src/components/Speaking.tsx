import { Mic, ArrowRight } from "lucide-react";

const topics = [
  {
    title: "Building in Public",
    description:
      "Lessons from learning, failing, and shipping — the honest version of the developer journey.",
  },
  {
    title: "Creative Coding",
    description:
      "Using code as a medium for art, storytelling, and interactive experiences.",
  },
  {
    title: "Career Transitions",
    description:
      "Navigating the path into software development from a non-traditional background.",
  },
  {
    title: "Developer Tooling & Workflow",
    description:
      "What makes teams productive and developers happy — tools, habits, and culture.",
  },
];

export default function Speaking() {
  return (
    <section id="speaking" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <Mic size={28} className="text-accent" />
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Speaking
          </h2>
        </div>
        <div className="mt-2 ml-10 h-1 w-16 rounded-full bg-accent" />

        <p className="mt-6 text-muted text-base sm:text-lg max-w-2xl">
          I&rsquo;m building toward sharing ideas on stage and in virtual
          events. Here are topics I&rsquo;m excited to talk about.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {topics.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/tlindow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Interested in having me speak? Let&rsquo;s talk
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
