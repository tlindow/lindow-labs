const technologies = [
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
  { name: "SQL", color: "#4479A1" },
];

export default function TechStack() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
          Tech & Tools
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-mint" />

        <div className="mt-8 sm:mt-12 flex flex-wrap gap-2.5 sm:gap-3">
          {technologies.map((t) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-foreground"
            >
              <span
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
                style={{ backgroundColor: t.color }}
              />
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
