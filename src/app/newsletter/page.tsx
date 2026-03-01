import type { Metadata } from "next";
import { Mail, BookOpen, Zap, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/siteConfig";
import NewsletterForm from "./NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter",
  description: `Subscribe to ${siteConfig.name}'s newsletter for insights on IT leadership, career growth, and community impact.`,
};

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/20 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <Mail size={32} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Newsletter
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            A periodic newsletter where I share what I&rsquo;m learning about IT
            leadership, community impact, career growth, and the human side of
            technology. No spam, no fluff — just honest insights from someone
            figuring it out in real time.
          </p>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-xl px-6">
          <SectionHeading
            title="Stay in the Loop"
            description="Enter your email to get notified when the first issue drops."
          />
          <div className="mt-10">
            <NewsletterForm />
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            No spam, ever. Unsubscribe anytime. Your email is safe with me.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What You'll Get"
            title="Newsletter Topics"
            description="Here's the kind of content I'm planning to share."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <BookOpen size={24} />,
                title: "Career Learnings",
                description:
                  "Honest reflections on what I'm learning as an IT leader — the wins, the mistakes, and everything in between.",
              },
              {
                icon: <Zap size={24} />,
                title: "Industry Insights",
                description:
                  "Curated thoughts on trends in IT, leadership, and the intersection of technology and community impact.",
              },
              {
                icon: <Users size={24} />,
                title: "Community Stories",
                description:
                  "Updates on mentoring, speaking, and initiatives like the equipment donation program — stories of tech doing good.",
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-500">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past issues placeholder */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Archive"
            title="Past Issues"
            description="Previous newsletter editions will appear here as they're published."
          />
          <div className="mt-14 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <BookOpen size={24} />
            </div>
            <p className="font-medium text-slate-500">
              Issue #1 is in the works
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Subscribe above to be the first to know when it launches
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
