export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-foreground">
          About Me
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-sky" />

        <div className="mt-8 sm:mt-10 space-y-5 text-[15px] sm:text-lg leading-relaxed text-muted">
          <p>
            I got into software development because I love making things. I went
            through an immersive coding program, dove into JavaScript and React,
            and never looked back. Building for the web scratches every itch I
            have &mdash; problem-solving, design, creativity, and the instant
            feedback of seeing something come to life in a browser.
          </p>
          <p>
            I&rsquo;m drawn to projects at the intersection of technology and
            creativity &mdash; whether that&rsquo;s an interactive booking
            system, a generative art sketch, or a tool that makes
            someone&rsquo;s workflow easier. I&rsquo;m passionate about AI in
            software and always looking to learn more about what people are
            building.
          </p>
          <p>
            Outside of code, I&rsquo;m curious about storytelling, design,
            and how technology brings people together. Right now I&rsquo;m
            focused on building in public, mentoring other developers, and
            creating content.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8">
          <Stat label="GitHub Repos" value="45+" color="bg-rose-light" />
          <Stat label="Primary Stack" value="React / TS" color="bg-sky-light" />
          <Stat label="Focus" value="Mentoring" color="bg-mint-light" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className={`text-center rounded-xl ${color} py-4 px-2`}>
      <p className="text-xl sm:text-2xl font-semibold text-foreground">{value}</p>
      <p className="mt-0.5 text-xs sm:text-sm text-muted">{label}</p>
    </div>
  );
}
