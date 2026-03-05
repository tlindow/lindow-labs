import { Mic, ArrowRight } from "lucide-react";

const topics = [
  {
    title: "Building in Public",
    description:
      "Lessons from learning, failing, and shipping — the honest version of the developer journey.",
    bg: "bg-rose-light",
  },
  {
    title: "Creative Coding",
    description:
      "Using code as a medium for art, storytelling, and interactive experiences.",
    bg: "bg-amber-light",
  },
  {
    title: "Career Transitions",
    description:
      "Navigating the path into software development from a non-traditional background.",
    bg: "bg-sky-light",
  },
  {
    title: "Developer Tooling & Workflow",
    description:
      "What makes teams productive and developers happy — tools, habits, and culture.",
    bg: "bg-mint-light",
  },
];

export default function Speaking() {
  return (
    <section id="speaking" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <Mic size={24} className="text-rose sm:w-7 sm:h-7" />
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Speaking
          </h2>
        </div>
        <div className="mt-2 ml-9 sm:ml-10 h-1 w-16 rounded-full bg-rose" />

        <p className="mt-5 sm:mt-6 text-muted text-[15px] sm:text-lg max-w-2xl">
          I&rsquo;m building toward sharing ideas on stage and in virtual
          events. Here are topics I&rsquo;m excited to talk about.
        </p>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2">
          {topics.map((t) => (
            <div
              key={t.title}
              className={`rounded-2xl ${t.bg} p-5 sm:p-6 hover:shadow-md transition-shadow`}
            >
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                {t.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">
                {t.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <a
            href="mailto:tyler.lindow@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet hover:underline"
          >
            Interested in having me speak? Let&rsquo;s talk
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
