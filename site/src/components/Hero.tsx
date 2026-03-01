import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Software Developer &middot; Builder &middot; Creator
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-foreground">
          Hey, I&rsquo;m Tyler.
        </h1>

        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted max-w-2xl mx-auto">
          I build things for the web and love sharing what I learn along the way.
          I&rsquo;m focused on growing as a developer, creating content, and
          finding ways to help others on their journey.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/tlindow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-light transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/tlindow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-alt transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-alt transition-colors"
          >
            <Mail size={16} />
            Contact
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 mt-16 text-sm text-muted hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
