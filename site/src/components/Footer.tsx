import { Linkedin, Github, Mail } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tlindow",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tlindow",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:tyler.lindow@gmail.com",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Speaking", href: "#speaking" },
  { label: "Mentoring", href: "#mentoring" },
  { label: "Content", href: "#content" },
];

export default function Footer() {
  return (
    <footer id="connect" className="py-16 px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-12">
          <div>
            <p className="font-display text-2xl text-foreground">
              Tyler Lindow
            </p>
            <p className="mt-2 text-sm text-muted max-w-xs">
              Developer, builder, lifelong learner. Always open to a good
              conversation.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Tyler Lindow. Built with Next.js
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
