import { Users, ArrowRight } from "lucide-react";

const offerings = [
  {
    title: "Code Reviews & Pairing",
    description:
      "Walk through your code together, talk through trade-offs, and level up your problem-solving.",
  },
  {
    title: "Career Guidance",
    description:
      "Navigate bootcamps, self-study, the job search, and the early stages of a dev career.",
  },
  {
    title: "Portfolio Building",
    description:
      "Build a GitHub presence and project portfolio that shows what you can do.",
  },
  {
    title: "General Q&A",
    description:
      "No agenda needed — just bring your questions and we'll figure it out.",
  },
];

export default function Mentoring() {
  return (
    <section id="mentoring" className="py-24 px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <Users size={28} className="text-accent" />
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
            Mentoring
          </h2>
        </div>
        <div className="mt-2 ml-10 h-1 w-16 rounded-full bg-accent" />

        <p className="mt-6 text-muted text-base sm:text-lg max-w-2xl">
          I believe in paying it forward. Whether you&rsquo;re just starting
          out or looking to level up, I&rsquo;m happy to chat.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {o.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {o.description}
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
            Want to set up a mentoring session? Send me a message
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
