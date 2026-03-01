"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Connect to a form backend (Formspree, Formspark, email API, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-teal-200 bg-teal-50 p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <Check size={24} />
        </div>
        <p className="text-lg font-semibold text-teal-900">Message sent!</p>
        <p className="text-sm text-teal-700">
          Thanks for reaching out. I&rsquo;ll get back to you soon.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Subject
        </label>
        <select id="subject" className={inputClasses} defaultValue="">
          <option value="" disabled>
            What is this about?
          </option>
          <option value="speaking">Speaking Engagement</option>
          <option value="mentoring">Mentoring</option>
          <option value="collaboration">Collaboration</option>
          <option value="other">Something Else</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className={inputClasses + " resize-y"}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Send Message <ArrowRight size={16} />
      </button>
    </form>
  );
}
