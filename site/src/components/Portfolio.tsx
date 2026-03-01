import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dreaming with Marisol",
    description: "A creative, story-driven application.",
    tech: ["TypeScript"],
    url: "https://github.com/tlindow/dreamingwithmarisol",
  },
  {
    title: "Booking Module",
    description:
      "Component-as-a-service handling date selection, price calculation, and reservation booking.",
    tech: ["JavaScript", "React"],
    url: "https://github.com/tlindow/booking-module",
  },
  {
    title: "Dog Breed Search",
    description: "A React app for searching and browsing dog breeds by name.",
    tech: ["React", "JavaScript"],
    url: "https://github.com/tlindow/dogbreed_search_react",
  },
  {
    title: "Memory Game",
    description: "A browser-based card-matching memory game.",
    tech: ["CSS", "JavaScript"],
    url: "https://github.com/tlindow/Memory-Game-fend",
  },
  {
    title: "Greywater Projection",
    description: "Data visualization and projection tool.",
    tech: ["JavaScript", "D3"],
    url: "https://github.com/tlindow/greywater_projection",
  },
  {
    title: "p5.js Experiments",
    description:
      "Creative coding — spiraling circles and generative art sketches.",
    tech: ["p5.js", "JavaScript"],
    url: "https://github.com/tlindow/p5jstest",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
          Portfolio
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-coral" />
        <p className="mt-3 sm:mt-4 text-muted text-[15px] sm:text-lg max-w-xl">
          A selection of projects I&rsquo;ve built. More on{" "}
          <a
            href="https://github.com/tlindow?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline font-medium"
          >
            GitHub
          </a>
          .
        </p>

        <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl bg-surface border border-border p-5 sm:p-6 hover:shadow-lg hover:border-teal/30 transition-all"
            >
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-teal transition-colors">
                    {p.title}
                  </h3>
                  <ExternalLink
                    size={15}
                    className="mt-0.5 shrink-0 text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="mt-1.5 text-sm text-muted leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
