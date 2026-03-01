"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to your newsletter provider (ConvertKit, Mailchimp, Buttondown, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-teal-200 bg-teal-50 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <Check size={24} />
        </div>
        <p className="text-lg font-semibold text-teal-900">You&rsquo;re on the list!</p>
        <p className="text-sm text-teal-700">
          Thanks for subscribing. I&rsquo;ll be in touch when the first issue is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Subscribe <ArrowRight size={16} />
      </button>
    </form>
  );
}
