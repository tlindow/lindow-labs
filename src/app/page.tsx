import {
  Mic,
  Users,
  Video,
  Mail,
  ArrowRight,
  Laptop,
  Heart,
  Lightbulb,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
              Welcome
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Hi, I&rsquo;m{" "}
              <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                Tim Lindow
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/about">
                Learn More <ArrowRight size={16} />
              </CTAButton>
              <CTAButton
                href={siteConfig.links.linkedin}
                variant="secondary"
                external
              >
                <Linkedin size={16} /> LinkedIn
              </CTAButton>
            </div>
          </div>

          {/* Hero visual — abstract card grid */}
          <div className="hidden lg:col-span-2 lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Laptop size={28} />, label: "IT Leadership" },
                { icon: <Mic size={28} />, label: "Speaking" },
                { icon: <Heart size={28} />, label: "Community" },
                { icon: <Lightbulb size={28} />, label: "Mentoring" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    {icon}
                  </div>
                  <span className="mt-3 text-sm font-medium text-slate-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection() {
  const highlights = [
    {
      icon: <Mic size={22} />,
      title: "Speaking",
      description:
        "Sharing insights on IT leadership, corporate responsibility, and bridging the gap between technology and community impact.",
      href: "/speaking",
    },
    {
      icon: <Users size={22} />,
      title: "Mentoring",
      description:
        "Guiding the next generation of IT professionals through one-on-one mentoring sessions and career advice.",
      href: "/mentoring",
    },
    {
      icon: <Video size={22} />,
      title: "Video Portfolio",
      description:
        "Building a library of video content covering IT best practices, leadership lessons, and community initiatives.",
      href: "/portfolio",
    },
    {
      icon: <Mail size={22} />,
      title: "Newsletter",
      description:
        "A periodic newsletter sharing career learnings, industry insights, and stories from the intersection of tech and community.",
      href: "/newsletter",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="Building at the Intersection of Tech & Community"
          description="I believe technology is most powerful when it brings people together and creates opportunities for those who need it most."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all group-hover:border-teal-200 group-hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600 transition-colors group-hover:text-teal-700">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Values"
          title="What Drives Me"
          description="These are the principles that guide my work, my leadership, and how I show up for the people around me."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Corporate Responsibility",
              description:
                "I champion initiatives like donating retired IT equipment to foster care organizations — finding ways technology can create lasting impact beyond the office.",
            },
            {
              title: "Continuous Learning",
              description:
                "The IT landscape never stops evolving. I stay curious, invest in growth, and share what I learn with my team and the broader community.",
            },
            {
              title: "People-First Leadership",
              description:
                "Technology is ultimately about people. I lead with empathy, build inclusive teams, and create environments where everyone can do their best work.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let&rsquo;s Connect
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-teal-100">
          Whether you&rsquo;re interested in speaking collaborations, mentoring, or
          just want to chat about tech and community — I&rsquo;d love to hear from
          you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton href="/contact">
            Get in Touch <ArrowRight size={16} />
          </CTAButton>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <Linkedin size={16} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
