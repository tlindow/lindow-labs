import type { Metadata } from "next";
import {
  Briefcase,
  GraduationCap,
  Heart,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — IT Manager, community builder, and technology advocate.`,
};

function TimelineItem({
  title,
  org,
  period,
  description,
}: {
  title: string;
  org: string;
  period: string;
  description: string;
}) {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-teal-500 after:absolute after:left-[5px] after:top-5 after:h-full after:w-0.5 after:bg-slate-200 last:after:hidden">
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
        {period}
      </p>
      <h3 className="mt-1 text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm font-medium text-slate-500">{org}</p>
      <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                About Me
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                The Story So Far
              </h1>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  I&rsquo;m an IT Manager who believes that technology is most
                  meaningful when it serves people. Over the years, I&rsquo;ve built
                  and led teams that keep complex systems running while never losing
                  sight of the humans behind the screens.
                </p>
                <p>
                  Beyond the day-to-day of IT operations, I&rsquo;m passionate about
                  corporate responsibility — particularly finding ways to turn
                  end-of-lifecycle technology into opportunities for communities in
                  need. I&rsquo;ve championed initiatives to donate retired laptops
                  and equipment to foster care organizations, combining practical
                  asset management with real social impact.
                </p>
                <p>
                  I&rsquo;m building this site as a home base for my growing
                  interests in speaking, mentoring, and sharing what I&rsquo;ve
                  learned. It&rsquo;s a work in progress — just like me.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton
                  href={siteConfig.links.linkedin}
                  external
                >
                  <Linkedin size={16} /> View Full Profile
                </CTAButton>
                <CTAButton href="/contact" variant="secondary">
                  Get in Touch <ArrowRight size={16} />
                </CTAButton>
              </div>
            </div>

            {/* Quick facts sidebar */}
            <div className="space-y-6 lg:col-span-2">
              {[
                {
                  icon: <Briefcase size={20} />,
                  label: "Current Role",
                  value: "IT Manager",
                },
                {
                  icon: <Heart size={20} />,
                  label: "Passion",
                  value: "Corporate Responsibility & Community Impact",
                },
                {
                  icon: <GraduationCap size={20} />,
                  label: "Always",
                  value: "Learning & Growing",
                },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {fact.label}
                    </p>
                    <p className="mt-0.5 font-semibold text-slate-900">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            eyebrow="Experience"
            title="Career Journey"
            description="A snapshot of the roles and experiences that have shaped my approach to IT leadership and community impact. Visit my LinkedIn for the full story."
          />
          <div className="mt-14 space-y-10">
            <TimelineItem
              period="Present"
              title="IT Manager"
              org="Update with your company"
              description="Leading IT operations, managing infrastructure, and championing initiatives at the intersection of technology and corporate responsibility."
            />
            <TimelineItem
              period="Previous"
              title="IT Administrator"
              org="Update with your company"
              description="Managed systems, supported end users, and developed processes that improved efficiency and reliability across the organization."
            />
            <TimelineItem
              period="Earlier"
              title="IT Support & Systems"
              org="Update with your company"
              description="Built the technical foundation — hands-on experience with hardware, networking, and user support that informed my people-first approach to technology."
            />
          </div>
          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            <strong>Placeholder content:</strong> Update these entries with your actual
            experience from{" "}
            <a
              href={siteConfig.links.linkedin}
              className="underline hover:text-amber-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              your LinkedIn profile
            </a>
            .
          </div>
        </div>
      </section>
    </>
  );
}
