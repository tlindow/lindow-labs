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
    className: "top-[5%] left-[5%] w-[40%] h-[40%] bg-indigo/30",
    x: ["0%", "3%"],
    y: ["0%", "4%"],
    scale: [1, 1.1],
    duration: 14,
  },
  {
    className: "top-[10%] right-[10%] w-[35%] h-[35%] bg-sky/20",
    x: ["0%", "-3%"],
    y: ["0%", "3%"],
    scale: [1, 1.08],
    duration: 18,
  },
  {
    className: "bottom-[15%] left-[20%] w-[30%] h-[30%] bg-violet/25",
    x: ["0%", "4%"],
    y: ["0%", "-3%"],
    scale: [1, 1.12],
    duration: 20,
  },
  {
    className: "bottom-[5%] right-[15%] w-[35%] h-[35%] bg-mint/15",
    x: ["0%", "-3%"],
    y: ["0%", "-4%"],
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
          className={`absolute rounded-full blur-[80px] ${orb.className}`}
          style={{ willChange: "transform" }}
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

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
