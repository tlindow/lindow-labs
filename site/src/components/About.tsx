export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
          About Me
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-accent" />

        <div className="mt-10 space-y-6 text-base sm:text-lg leading-relaxed text-muted">
          <p>
            I got into software development because I love making things. I went
            through an immersive coding program, dove into JavaScript and React,
            and never looked back. Building for the web scratches every itch I
            have &mdash; problem-solving, design, creativity, and the instant
            feedback of seeing something come to life in a browser.
          </p>
          <p>
            I&rsquo;m drawn to projects that sit at the intersection of
            technology and creativity &mdash; whether that&rsquo;s an
            interactive booking system, a generative art sketch, or a tool that
            makes someone&rsquo;s workflow a little easier.
          </p>
          <p>
            Outside of code, I&rsquo;m curious about storytelling, design,
            and how technology brings people together. Right now I&rsquo;m
            focused on building in public, creating video content, and looking
            for opportunities to speak and mentor.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-8">
          <Stat label="GitHub Repos" value="45+" />
          <Stat label="Primary Stack" value="React / TS" />
          <Stat label="Focus" value="Building in Public" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-2xl font-semibold text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
