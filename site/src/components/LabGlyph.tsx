"use client";

import { motion } from "framer-motion";

type LabGlyphProps = {
  className?: string;
  labels?: [string, string, string];
};

export default function LabGlyph({
  className = "",
  labels = ["signals", "systems", "notes"],
}: LabGlyphProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-violet/20 via-sky/10 to-mint/20"
        animate={{ scale: [1, 1.04, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative h-full rounded-[2rem] border border-white/40 bg-white/55 p-6 shadow-[0_20px_80px_-40px_rgba(98,84,180,0.45)] backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted sm:text-xs">
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="relative mt-8 h-[260px] sm:mt-10 sm:h-[300px]">
          <motion.div
            className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/30 bg-gradient-to-br from-violet-light via-white to-sky-light shadow-lg sm:h-40 sm:w-40"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-4 rounded-full border border-dashed border-violet/20" />
            <div className="absolute inset-10 rounded-full bg-background/70" />
          </motion.div>

          <motion.div
            className="absolute left-[10%] top-[18%] h-16 w-28 rounded-2xl border border-white/60 bg-background/80 p-3 shadow-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Programs
            </div>
            <div className="mt-2 h-2 rounded-full bg-violet/15" />
            <div className="mt-2 h-2 w-3/4 rounded-full bg-sky/20" />
          </motion.div>

          <motion.div
            className="absolute right-[6%] top-[22%] h-20 w-24 rounded-2xl border border-white/60 bg-background/80 p-3 shadow-md"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Field Notes
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              <div className="h-4 rounded-md bg-peach/25" />
              <div className="h-4 rounded-md bg-amber/25" />
              <div className="h-4 rounded-md bg-mint/25" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[12%] left-[14%] h-16 w-24 rounded-2xl border border-white/60 bg-background/80 p-3 shadow-md"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Cohort
            </div>
            <div className="mt-2 flex gap-1.5">
              <div className="h-6 w-6 rounded-full bg-violet/20" />
              <div className="h-6 w-6 rounded-full bg-sky/20" />
              <div className="h-6 w-6 rounded-full bg-mint/20" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[10%] right-[10%] h-16 w-28 rounded-2xl border border-white/60 bg-background/80 p-3 shadow-md"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
              Experiments
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-violet/25 to-sky/25" />
              <div className="space-y-1.5">
                <div className="h-2 w-12 rounded-full bg-violet/15" />
                <div className="h-2 w-8 rounded-full bg-sky/20" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-[23%] top-[48%] h-3 w-3 rounded-full bg-violet shadow-[0_0_24px_rgba(196,181,253,0.8)]"
            animate={{ scale: [1, 1.5, 1], opacity: [0.45, 0.95, 0.45] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[22%] top-[52%] h-3 w-3 rounded-full bg-sky shadow-[0_0_24px_rgba(125,211,252,0.8)]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.95, 0.4] }}
            transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.div
            className="absolute left-1/2 top-[18%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-mint shadow-[0_0_24px_rgba(110,231,183,0.8)]"
            animate={{ scale: [1, 1.35, 1], opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
}
