const technologies = [
  { name: "TypeScript", bg: "bg-sky-light", dot: "bg-sky" },
  { name: "JavaScript", bg: "bg-amber-light", dot: "bg-amber" },
  { name: "React", bg: "bg-sky-light", dot: "bg-sky" },
  { name: "Next.js", bg: "bg-violet-light", dot: "bg-violet" },
  { name: "Node.js", bg: "bg-mint-light", dot: "bg-mint" },
  { name: "Python", bg: "bg-indigo-light", dot: "bg-indigo" },
  { name: "HTML5", bg: "bg-peach-light", dot: "bg-peach" },
  { name: "CSS3", bg: "bg-sky-light", dot: "bg-sky" },
  { name: "Tailwind", bg: "bg-sky-light", dot: "bg-sky" },
  { name: "Docker", bg: "bg-indigo-light", dot: "bg-indigo" },
  { name: "Git", bg: "bg-rose-light", dot: "bg-rose" },
  { name: "SQL", bg: "bg-violet-light", dot: "bg-violet" },
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
          Tech & Tools
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-amber" />

        <div className="mt-8 sm:mt-12 flex flex-wrap gap-2.5 sm:gap-3">
          {technologies.map((t) => (
            <span
              key={t.name}
              className={`inline-flex items-center gap-2 rounded-full ${t.bg} px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-foreground`}
            >
              <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${t.dot}`} />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
