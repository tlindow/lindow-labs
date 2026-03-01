import { Video, FileText, Rss, ArrowRight } from "lucide-react";

const formats = [
  {
    icon: Video,
    title: "Video Walkthroughs",
    description:
      "Short-form demos and walkthroughs of projects, tools, and techniques — shared on LinkedIn.",
  },
  {
    icon: FileText,
    title: "Write-Ups",
    description:
      "Posts about what I'm building, the decisions behind it, and things I wish I'd known sooner.",
  },
  {
    icon: Rss,
    title: "Newsletter",
    description:
      "A regular digest of what I'm learning, links worth reading, and reflections on the developer journey.",
  },
];

export default function Content() {
  return (
    <section id="content" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
          Content & Newsletter
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-coral" />

        <p className="mt-5 sm:mt-6 text-muted text-[15px] sm:text-lg max-w-2xl">
          I&rsquo;m creating content about software development, creative
          coding, and the things I&rsquo;m learning. The goal is to build a
          library of resources that&rsquo;s genuinely useful.
        </p>

        <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-3">
          {formats.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-coral/10 text-coral">
                  <Icon size={22} />
                </div>
                <h3 className="mt-3 text-base sm:text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 rounded-2xl border border-border bg-surface p-6 sm:p-8 text-center">
          <p className="text-base sm:text-lg font-medium text-foreground">
            Follow along &mdash; I&rsquo;m publishing on LinkedIn first.
          </p>
          <p className="mt-2 text-sm text-muted">
            Videos, write-ups, and honest reflections on the developer journey.
          </p>
          <a
            href="https://www.linkedin.com/in/tlindow"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-white hover:bg-teal-dark transition-colors"
          >
            Follow on LinkedIn
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
