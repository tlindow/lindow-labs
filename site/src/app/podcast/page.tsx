import type { Metadata } from "next";
import { ArrowLeft, Youtube } from "lucide-react";
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import FloatingOrbs from "@/components/animations/FloatingOrbs";

export const metadata: Metadata = {
  title: "Podcast — Tyler Lindow",
  description:
    "Honest conversations about improving the workplace in tech — culture, leadership, and what it actually takes to make things better.",
};

// TODO: update to your YouTube channel URL once available
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=gDWXS7orkkQ";
const FEATURED_VIDEO_ID = "gDWXS7orkkQ";

const topics = [
  {
    title: "Workplace Culture",
    description:
      "What makes a tech team actually work well — and what quietly breaks it.",
    color: "bg-violet/10 text-violet",
  },
  {
    title: "Leadership",
    description:
      "Honest takes on what good management looks like in engineering orgs.",
    color: "bg-sky/10 text-sky",
  },
  {
    title: "Career Dynamics",
    description:
      "Navigating the real, messy, unspoken parts of working in tech.",
    color: "bg-mint/10 text-mint",
  },
];

export default function PodcastPage() {
  return (
    <>
      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center h-14 sm:h-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Tyler Lindow
          </a>
        </div>
      </nav>

      <main className="pt-14 sm:pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 sm:py-32 px-4 sm:px-6">
          <FloatingOrbs />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet/10 px-4 py-1.5 text-xs font-semibold text-violet uppercase tracking-wider">
                Podcast
              </span>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                The Better{" "}
                <span className="text-gradient">Workplace</span>
              </h1>
              <p className="mt-6 text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Honest conversations about improving the workplace in tech —
                culture, leadership, and what it actually takes to make things
                better.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-8 flex items-center justify-center">
                <MagneticButton
                  href={YOUTUBE_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-80 transition-opacity"
                >
                  <Youtube size={16} />
                  Watch on YouTube
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured episode */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Latest Episode
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-violet" />
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
                    title="The Better Workplace — Latest Episode"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Topics */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-alt">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                What we talk about
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-mint" />
            </ScrollReveal>

            <StaggerContainer
              className="mt-8 grid gap-4 sm:grid-cols-3"
              staggerDelay={0.1}
            >
              {topics.map((topic) => (
                <StaggerItem key={topic.title}>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <span
                      className={`inline-flex rounded-lg px-3 py-1 text-xs font-semibold ${topic.color}`}
                    >
                      {topic.title}
                    </span>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 text-center">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  New episodes on YouTube
                </h2>
                <p className="mt-3 text-muted max-w-md mx-auto">
                  Subscribe to catch every episode as it drops.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <MagneticButton
                    href={YOUTUBE_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors hover:shadow-lg hover:shadow-violet/25"
                  >
                    <Youtube size={16} />
                    Watch on YouTube
                  </MagneticButton>
                  <MagneticButton
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted hover:text-foreground hover:border-foreground/30 transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Back to site
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 sm:px-6 border-t border-border">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Tyler Lindow.
          </p>
        </div>
      </footer>
    </>
  );
}
