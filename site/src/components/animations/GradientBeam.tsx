"use client";

import { motion } from "framer-motion";

export default function GradientBeam() {
  return (
    <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px]"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-conic from-violet/15 via-transparent via-30% to-transparent" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-indigo) 0%, transparent 70%)",
          opacity: 0.08,
          willChange: "transform, opacity",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.13, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
