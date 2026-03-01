import type { Metadata } from "next";
import {
  Users,
  ArrowRight,
  Target,
  Compass,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Mentoring",
  description: `Book a mentoring session with ${siteConfig.name}. Get career guidance, IT leadership advice, and support for your professional growth.`,
};

export default function MentoringPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/20 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <Users size={32} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Mentoring
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            I&rsquo;ve been fortunate to learn from great mentors throughout my
            career. Now I want to pay it forward — helping IT professionals
            navigate their careers, build leadership skills, and find fulfillment
            in their work.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">
              Request a Session <ArrowRight size={16} />
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What I can help with */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Focus Areas"
            title="How I Can Help"
            description="Whether you're just starting out in IT or navigating the transition to management, I'm here to share what I've learned."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: <Compass size={24} />,
                title: "Career Navigation",
                description:
                  "Thinking about your next move? Let's map out a path that aligns with your skills, values, and goals — whether that's going deeper technically or moving into leadership.",
              },
              {
                icon: <Target size={24} />,
                title: "IT Leadership",
                description:
                  "Making the leap from individual contributor to manager is one of the hardest transitions in tech. I can help you build the skills and mindset you need to lead effectively.",
              },
              {
                icon: <MessageCircle size={24} />,
                title: "General Guidance",
                description:
                  "Sometimes you just need someone in your corner. Whether it's navigating a tricky situation at work, preparing for a big presentation, or thinking through a career decision.",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{area.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-500">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Process"
            title="How It Works"
            description="Mentoring should be simple and accessible. Here's what to expect."
          />
          <div className="mt-14 space-y-8">
            {[
              {
                step: "01",
                title: "Reach Out",
                description:
                  "Send me a message through the contact page with a brief intro and what you'd like to discuss. No pressure, no formality.",
              },
              {
                step: "02",
                title: "Schedule a Chat",
                description:
                  "We'll find a time that works for both of us. Sessions are typically 30–45 minutes via video call or phone.",
              },
              {
                step: "03",
                title: "Grow Together",
                description:
                  "We'll work through your questions and challenges together. Follow-up sessions are always welcome as you make progress.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Mentees Say"
            description="As I begin my formal mentoring practice, testimonials will appear here."
          />
          <div className="mt-14 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
              <MessageCircle size={24} />
            </div>
            <p className="font-medium text-slate-500">
              Testimonials from mentees will appear here
            </p>
            <p className="mt-1 text-sm text-slate-400">
              After working with mentees, ask them for a short quote about the
              experience
            </p>
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/contact">
              Let&rsquo;s Work Together <ArrowRight size={16} />
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
