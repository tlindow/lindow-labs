"use client";

import { motion } from "framer-motion";

interface Orb {
  className: string;
  x: [string, string];
  y: [string, string];
  scale: [number, number];
  duration: number;
}

const orbs: Orb[] = [
  {
    className: "top-[5%] left-[5%] w-[45%] h-[45%] bg-rose/20",
    x: ["0%", "3%"],
    y: ["0%", "4%"],
    scale: [1, 1.15],
    duration: 12,
  },
  {
    className: "top-[10%] right-[10%] w-[40%] h-[40%] bg-sky/20",
    x: ["0%", "-4%"],
    y: ["0%", "3%"],
    scale: [1, 1.1],
    duration: 15,
  },
  {
    className: "bottom-[15%] left-[20%] w-[35%] h-[35%] bg-violet/20",
    x: ["0%", "5%"],
    y: ["0%", "-3%"],
    scale: [1, 1.2],
    duration: 18,
  },
  {
    className: "bottom-[5%] right-[15%] w-[40%] h-[40%] bg-mint/15",
    x: ["0%", "-3%"],
    y: ["0%", "-4%"],
    scale: [1, 1.15],
    duration: 14,
  },
  {
    className: "top-[40%] left-[40%] w-[30%] h-[30%] bg-amber/15",
    x: ["0%", "4%"],
    y: ["0%", "5%"],
    scale: [1, 1.1],
    duration: 16,
  },
];

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] ${orb.className}`}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: orb.scale,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay for tech feel */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
