"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import EmbeddingAnimation from "@/components/animations/EmbeddingAnimation";

export default function Mentoring() {
  return (
    <section id="join" className="relative overflow-hidden">
      <div className="relative overflow-hidden bg-gradient-to-br from-violet via-indigo to-sky px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet/0 via-white/10 to-violet/0"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <ScrollReveal direction="left">
            <EmbeddingAnimation className="h-[360px] sm:h-[460px] lg:h-[560px]" />
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 text-white shadow-[0_30px_100px_-50px_rgba(14,10,60,0.8)] backdrop-blur-xl sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/16 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                  <Sparkles size={12} className="shrink-0 text-white" />
                </span>
                AI forum / education / podcasts
              </div>

              <h2 className="mt-6 font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                Join Hapi Labs
              </h2>

              <p className="mt-4 text-base leading-relaxed text-white/88 sm:text-lg">
                This is the place to discuss AI, embeddings, and the future of
                developers in the workplace.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/78 sm:text-base">
                We&rsquo;ll post video podcasts and educational material here as
                the forum grows. No selling &mdash; just a public place to engage
                with AI topics, compare notes, and learn together.
              </p>

              <div className="mt-6 rounded-2xl border border-white/16 bg-white/8 p-4 text-sm leading-relaxed text-white/76">
                If you want to help sustain the group, you can contribute tokens
                or AI usage toward continued development of the site and its
                content.
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <MagneticButton
                  href="mailto:tyler.lindow@gmail.com?subject=Join%20Hapi%20Labs%20AI%20Forum"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-white/20"
                >
                  Join the Forum
                  <ArrowRight size={15} />
                </MagneticButton>
                <MagneticButton
                  href="mailto:tyler.lindow@gmail.com?subject=Support%20Hapi%20Labs"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Support with Tokens / AI Usage
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
