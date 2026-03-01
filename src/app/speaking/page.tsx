import type { Metadata } from "next";
import { Mic, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Speaking",
  description: `Book ${siteConfig.name} for your next event. Topics include IT leadership, corporate responsibility, and community impact through technology.`,
};

export default function SpeakingPage() {
  const topics = [
    {
      title: "Technology for Good",
      description:
        "How IT teams can drive social impact — from equipment donation programs to community partnerships.",
    },
    {
      title: "People-First IT Leadership",
      description:
        "Building empathetic, high-performing teams in a fast-changing technology landscape.",
    },
    {
      title: "Corporate Responsibility in IT",
      description:
        "Practical strategies for turning end-of-lifecycle assets into community opportunities.",
    },
    {
      title: "The IT Manager's Playbook",
      description:
        "Lessons learned from the trenches — balancing operations, strategy, and the human side of technology.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/20 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <Mic size={32} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Speaking
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            I&rsquo;m building my speaking practice around the topics I care about
            most — technology leadership, community impact, and the human side of
            IT. I&rsquo;d love to share these ideas at your next event.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">
              Book Me to Speak <ArrowRight size={16} />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Topics"
            title="What I Speak About"
            description="These talks draw from real experience managing IT teams and building community programs. Each can be customized for your audience."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-500">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Working Together"
            title="What to Expect"
            description="When you book me to speak, here's what I bring to your event."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              "Engaging, story-driven presentations",
              "Practical takeaways your audience can act on",
              "Flexibility to tailor content to your audience",
              "Availability for virtual and in-person events",
              "Q&A sessions and audience interaction",
              "Post-event follow-up and resources",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="mt-0.5 shrink-0 text-teal-500"
                />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past & Upcoming — placeholder */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Events"
            title="Past & Upcoming Talks"
            description="As I grow my speaking practice, events will appear here. Stay tuned!"
          />
          <div className="mt-14 space-y-4">
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <Calendar size={24} />
              </div>
              <p className="font-medium text-slate-500">
                Your first event could go here
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Add events as you book them — include the date, venue, and topic
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/contact">
              Invite Me to Speak <ArrowRight size={16} />
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
