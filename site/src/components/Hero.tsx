import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-14 sm:pt-16 overflow-hidden">
      {/* Watercolor-inspired gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[60%] h-[60%] rounded-full bg-teal/8 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-coral/8 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[40%] h-[40%] rounded-full bg-lavender/6 blur-[100px]" />
      </div>

      <div className="max-w-3xl text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-teal mb-3 sm:mb-4">
          Software Developer &middot; Builder &middot; Mentor
        </p>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-foreground">
          Hey, I&rsquo;m Tyler.
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-xl leading-relaxed text-muted max-w-2xl mx-auto px-2">
          I build things for the web, mentor developers, and love sharing what
          I learn along the way. Based in San Diego, currently at{" "}
          <span className="text-foreground font-medium">Affirm</span>.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#mentoring"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-medium text-white hover:bg-teal-dark transition-colors"
          >
            Work With Me
          </a>
          <div className="flex gap-3 w-full sm:w-auto">
            <a
              href="https://www.linkedin.com/in/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              <Linkedin size={16} />
              <span className="sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/tlindow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              <Github size={16} />
              <span className="sm:inline">GitHub</span>
            </a>
            <a
              href="mailto:tyler.lindow@gmail.com"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              <Mail size={16} />
              <span className="sm:inline">Email</span>
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 mt-12 sm:mt-16 text-sm text-muted hover:text-foreground transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
