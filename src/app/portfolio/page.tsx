import type { Metadata } from "next";
import {
  Video,
  Play,
  Film,
  Linkedin,
  Youtube,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Video portfolio and project showcase from ${siteConfig.name}. Content on IT leadership, community impact, and technology best practices.`,
};

function VideoCard({
  title,
  description,
  platform,
  placeholder,
}: {
  title: string;
  description: string;
  platform: string;
  placeholder?: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-teal-200 hover:shadow-md">
      <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200">
        {placeholder ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400">
            <Film size={32} />
            <span className="text-xs font-medium">Coming Soon</span>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-teal-600 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
              <Play size={24} className="ml-1" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {platform}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/20 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <Video size={32} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            I&rsquo;m building a library of video content and projects that
            showcase what I&rsquo;m learning, building, and thinking about. This
            is where it all comes together — shareable content for LinkedIn and
            beyond.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton
              href={siteConfig.links.linkedin}
              external
            >
              <Linkedin size={16} /> Follow on LinkedIn
            </CTAButton>
            <CTAButton href="#" variant="secondary">
              <Youtube size={16} /> YouTube (Coming Soon)
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Videos"
            title="Video Content"
            description="Short-form and long-form videos covering IT leadership, community projects, and professional development."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <VideoCard
              title="Your First Video"
              description="Record a short introduction about who you are, what you do, and what kind of content people can expect from you."
              platform="LinkedIn"
              placeholder
            />
            <VideoCard
              title="IT Equipment Donation Guide"
              description="A walkthrough of how IT teams can set up equipment donation programs for foster care organizations."
              platform="LinkedIn"
              placeholder
            />
            <VideoCard
              title="From IC to Manager"
              description="Lessons learned from the transition from individual contributor to IT management."
              platform="YouTube"
              placeholder
            />
          </div>
          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            <strong>Getting started:</strong> These are suggested video ideas.
            Replace them with your actual videos by embedding LinkedIn or YouTube
            links. Each card can link directly to the video.
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Projects"
            title="Things I&rsquo;ve Built & Led"
            description="Notable projects and initiatives — from technical implementations to community programs."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "IT Equipment Donation Program",
                description:
                  "Championed an initiative to donate retired corporate laptops and devices to foster care organizations — creating impact while solving asset disposal challenges.",
                tags: ["Corporate Responsibility", "Asset Management"],
              },
              {
                title: "Infrastructure Modernization",
                description:
                  "Led IT infrastructure upgrades and modernization efforts, improving reliability and security while keeping costs manageable.",
                tags: ["IT Operations", "Leadership"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-500">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            <strong>Placeholder content:</strong> Add your own projects here.
            Include links, images, or case studies as your portfolio grows.
          </div>
        </div>
      </section>

      {/* Content roadmap */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Roadmap"
            title="Content I&rsquo;m Planning"
            description="Here's what's on the horizon. Follow along as I build this out."
          />
          <div className="mt-14 space-y-4">
            {[
              {
                status: "planned",
                title: "LinkedIn video series on IT leadership",
              },
              {
                status: "planned",
                title: "Equipment donation program case study",
              },
              { status: "idea", title: "YouTube channel relaunch" },
              {
                status: "idea",
                title: "Guest appearances on tech podcasts",
              },
              {
                status: "idea",
                title: "Written guides for new IT managers",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    item.status === "planned"
                      ? "bg-teal-50 text-teal-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {item.status === "planned" ? "Planned" : "Idea"}
                </span>
                <p className="font-medium text-slate-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
