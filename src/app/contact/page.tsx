import type { Metadata } from "next";
import { Mail, Linkedin, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. Reach out for speaking, mentoring, collaborations, or just to say hello.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-teal-50/20 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <MessageCircle size={32} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Let&rsquo;s Connect
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Whether you&rsquo;re interested in working together, booking a
            speaking engagement, starting a mentoring relationship, or just
            want to say hi — I&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900">
                Send a Message
              </h2>
              <p className="mt-2 text-slate-500">
                Fill out the form below and I&rsquo;ll get back to you as soon as
                I can.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Other Ways to Reach Me
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-700 transition-all hover:border-teal-200 hover:shadow-sm"
                  >
                    <Linkedin size={20} className="text-teal-600" />
                    <div>
                      <p className="text-sm font-semibold">LinkedIn</p>
                      <p className="text-xs text-slate-400">
                        Connect with me professionally
                      </p>
                    </div>
                  </a>
                  <a
                    href={siteConfig.links.email}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-700 transition-all hover:border-teal-200 hover:shadow-sm"
                  >
                    <Mail size={20} className="text-teal-600" />
                    <div>
                      <p className="text-sm font-semibold">Email</p>
                      <p className="text-xs text-slate-400">
                        hello@timlindow.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  What I&rsquo;m Open To
                </h3>
                <ul className="mt-4 space-y-2">
                  {[
                    "Speaking engagements",
                    "Mentoring conversations",
                    "Podcast guest appearances",
                    "Collaboration ideas",
                    "Just saying hello",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <ArrowRight size={14} className="text-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
