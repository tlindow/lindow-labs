"use client";

import { motion } from "framer-motion";

type EmbeddingAnimationProps = {
  className?: string;
};

const sourceCards = [
  { x: 56, y: 78, w: 132, h: 78, tone: "#F9A8D4" },
  { x: 70, y: 202, w: 124, h: 74, tone: "#7DD3FC" },
  { x: 66, y: 324, w: 136, h: 82, tone: "#6EE7B7" },
  { x: 200, y: 144, w: 112, h: 72, tone: "#FDE68A" },
  { x: 206, y: 286, w: 116, h: 70, tone: "#A5B4FC" },
];

const outputCards = [
  { x: 610, y: 88, w: 122, h: 80, tone: "#A5B4FC" },
  { x: 598, y: 210, w: 134, h: 84, tone: "#7DD3FC" },
  { x: 606, y: 336, w: 126, h: 78, tone: "#F9A8D4" },
  { x: 470, y: 140, w: 112, h: 72, tone: "#6EE7B7" },
  { x: 470, y: 300, w: 112, h: 72, tone: "#FDE68A" },
];

const incomingParticles = [
  { startX: 188, startY: 112, midX: 326, midY: 176, endX: 404, endY: 260, color: "#F9A8D4", delay: 0 },
  { startX: 194, startY: 240, midX: 326, midY: 226, endX: 404, endY: 260, color: "#7DD3FC", delay: 0.45 },
  { startX: 202, startY: 366, midX: 326, midY: 336, endX: 404, endY: 260, color: "#6EE7B7", delay: 0.95 },
  { startX: 312, startY: 180, midX: 340, midY: 192, endX: 404, endY: 260, color: "#FDE68A", delay: 1.35 },
  { startX: 322, startY: 322, midX: 342, midY: 320, endX: 404, endY: 260, color: "#A5B4FC", delay: 1.8 },
];

const outgoingParticles = [
  { startX: 404, startY: 260, midX: 518, midY: 184, endX: 610, endY: 128, color: "#A5B4FC", delay: 1.2 },
  { startX: 404, startY: 260, midX: 520, midY: 244, endX: 598, endY: 252, color: "#7DD3FC", delay: 1.7 },
  { startX: 404, startY: 260, midX: 516, midY: 342, endX: 606, endY: 374, color: "#F9A8D4", delay: 2.15 },
  { startX: 404, startY: 260, midX: 492, midY: 198, endX: 470, endY: 176, color: "#6EE7B7", delay: 2.55 },
  { startX: 404, startY: 260, midX: 486, midY: 326, endX: 470, endY: 336, color: "#FDE68A", delay: 3.05 },
];

const contextNodes = [
  { baseX: 358, baseY: 192, dx: 12, dy: -10, color: "#F9A8D4", delay: 0 },
  { baseX: 446, baseY: 188, dx: -10, dy: 16, color: "#7DD3FC", delay: 0.35 },
  { baseX: 482, baseY: 252, dx: -16, dy: -10, color: "#6EE7B7", delay: 0.7 },
  { baseX: 446, baseY: 334, dx: 8, dy: -14, color: "#FDE68A", delay: 1.05 },
  { baseX: 352, baseY: 332, dx: 14, dy: 12, color: "#A5B4FC", delay: 1.4 },
  { baseX: 316, baseY: 258, dx: -10, dy: -14, color: "#F9A8D4", delay: 1.75 },
];

export default function EmbeddingAnimation({
  className = "",
}: EmbeddingAnimationProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/20 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),rgba(255,255,255,0.08)_35%,rgba(255,255,255,0.02)_70%)] shadow-[0_40px_120px_-50px_rgba(36,24,92,0.6)] ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.24),transparent_55%)]"
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <motion.svg
        viewBox="0 0 800 520"
        className="relative h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#A5B4FC" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.65" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#EEF2FF" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.22" />
          </radialGradient>
        </defs>

        <motion.rect
          x="18"
          y="18"
          width="764"
          height="484"
          rx="30"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.16)"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.circle
          cx="404"
          cy="260"
          r="150"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeDasharray="14 12"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "404px 260px" }}
        />
        <motion.circle
          cx="404"
          cy="260"
          r="110"
          fill="none"
          stroke="rgba(196,181,253,0.18)"
          strokeDasharray="10 10"
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "404px 260px" }}
        />

        <motion.path
          d="M188 112 C 252 118, 288 148, 346 190"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2.5"
          strokeDasharray="12 10"
          animate={{ strokeDashoffset: [0, -44] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M194 240 C 264 240, 296 238, 346 242"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2.5"
          strokeDasharray="12 10"
          animate={{ strokeDashoffset: [0, -44] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.3 }}
        />
        <motion.path
          d="M202 366 C 264 344, 298 332, 346 286"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2.5"
          strokeDasharray="12 10"
          animate={{ strokeDashoffset: [0, -44] }}
          transition={{ duration: 2.9, repeat: Infinity, ease: "linear", delay: 0.6 }}
        />
        <motion.path
          d="M312 180 C 334 186, 344 196, 356 212"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          strokeDasharray="10 9"
          animate={{ strokeDashoffset: [0, -36] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "linear", delay: 0.2 }}
        />
        <motion.path
          d="M322 322 C 340 312, 350 300, 360 286"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          strokeDasharray="10 9"
          animate={{ strokeDashoffset: [0, -36] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: "linear", delay: 0.75 }}
        />

        <motion.path
          d="M452 214 C 510 176, 540 154, 610 128"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2.5"
          strokeDasharray="12 10"
          animate={{ strokeDashoffset: [0, -44] }}
          transition={{ duration: 2.7, repeat: Infinity, ease: "linear", delay: 1.1 }}
        />
        <motion.path
          d="M458 254 C 528 250, 560 250, 598 252"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2.5"
          strokeDasharray="12 10"
          animate={{ strokeDashoffset: [0, -44] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />
        <motion.path
          d="M450 300 C 520 334, 552 352, 606 374"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2.5"
          strokeDasharray="12 10"
          animate={{ strokeDashoffset: [0, -44] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 1.9 }}
        />
        <motion.path
          d="M444 222 C 468 208, 474 194, 470 176"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          strokeDasharray="10 9"
          animate={{ strokeDashoffset: [0, -36] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 1.3 }}
        />
        <motion.path
          d="M444 300 C 476 318, 482 328, 470 336"
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          strokeDasharray="10 9"
          animate={{ strokeDashoffset: [0, -36] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 2.1 }}
        />

        {sourceCards.map((card, index) => (
          <motion.g
            key={`source-${index}`}
            animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
            transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x={card.x}
              y={card.y}
              width={card.w}
              height={card.h}
              rx="24"
              fill="rgba(255,255,255,0.66)"
              stroke="rgba(255,255,255,0.24)"
            />
            <circle cx={card.x + 24} cy={card.y + 22} r="8" fill={card.tone} fillOpacity="0.35" />
            <rect x={card.x + 40} y={card.y + 16} width="56" height="10" rx="5" fill={card.tone} fillOpacity="0.24" />
            <rect x={card.x + 18} y={card.y + 42} width={card.w - 34} height="10" rx="5" fill="rgba(255,255,255,0.45)" />
            <rect x={card.x + 18} y={card.y + 58} width={card.w - 54} height="8" rx="4" fill="rgba(255,255,255,0.32)" />
          </motion.g>
        ))}

        {outputCards.map((card, index) => (
          <motion.g
            key={`output-${index}`}
            animate={{ y: [0, index % 2 === 0 ? 7 : -5, 0], scale: [1, 1.015, 1] }}
            transition={{ duration: 5.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect
              x={card.x}
              y={card.y}
              width={card.w}
              height={card.h}
              rx="24"
              fill="rgba(255,255,255,0.7)"
              stroke="rgba(255,255,255,0.24)"
            />
            <rect x={card.x + 18} y={card.y + 16} width={card.w - 36} height="10" rx="5" fill={card.tone} fillOpacity="0.24" />
            <rect x={card.x + 18} y={card.y + 34} width={card.w - 54} height="8" rx="4" fill="rgba(255,255,255,0.38)" />
            <rect x={card.x + 18} y={card.y + 50} width="18" height="18" rx="6" fill={card.tone} fillOpacity="0.34" />
            <rect x={card.x + 42} y={card.y + 50} width="18" height="18" rx="6" fill="rgba(255,255,255,0.38)" />
            <rect x={card.x + 66} y={card.y + 50} width="18" height="18" rx="6" fill={card.tone} fillOpacity="0.22" />
          </motion.g>
        ))}

        <motion.rect
          x="338"
          y="164"
          width="12"
          height="192"
          rx="6"
          fill="rgba(255,255,255,0.18)"
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="356"
          y="152"
          width="16"
          height="216"
          rx="8"
          fill="rgba(255,255,255,0.3)"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        <motion.circle
          cx="404"
          cy="260"
          r="78"
          fill="url(#coreGlow)"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "404px 260px" }}
        />
        <circle cx="404" cy="260" r="54" fill="rgba(255,255,255,0.8)" />
        <circle cx="404" cy="260" r="26" fill="rgba(255,255,255,0.92)" />

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "404px 260px" }}
        >
          <circle cx="404" cy="178" r="10" fill="rgba(255,255,255,0.78)" />
          <circle cx="470" cy="226" r="8" fill="rgba(255,255,255,0.68)" />
          <circle cx="448" cy="336" r="9" fill="rgba(255,255,255,0.72)" />
          <circle cx="338" cy="318" r="10" fill="rgba(255,255,255,0.68)" />
          <circle cx="322" cy="218" r="8" fill="rgba(255,255,255,0.7)" />
        </motion.g>

        {contextNodes.map((node, index) => (
          <motion.circle
            key={`context-${index}`}
            cx={node.baseX}
            cy={node.baseY}
            r="9"
            fill={node.color}
            fillOpacity="0.8"
            animate={{
              cx: [node.baseX, node.baseX + node.dx, node.baseX],
              cy: [node.baseY, node.baseY + node.dy, node.baseY],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 4.5 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}

        {incomingParticles.map((particle, index) => (
          <motion.circle
            key={`incoming-${index}`}
            cx={particle.startX}
            cy={particle.startY}
            r="6"
            fill={particle.color}
            animate={{
              cx: [particle.startX, particle.midX, particle.endX],
              cy: [particle.startY, particle.midY, particle.endY],
              opacity: [0, 0.95, 0],
              scale: [0.6, 1.15, 0.8],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        {outgoingParticles.map((particle, index) => (
          <motion.circle
            key={`outgoing-${index}`}
            cx={particle.startX}
            cy={particle.startY}
            r="6"
            fill={particle.color}
            animate={{
              cx: [particle.startX, particle.midX, particle.endX],
              cy: [particle.startY, particle.midY, particle.endY],
              opacity: [0, 0.95, 0],
              scale: [0.7, 1.2, 0.85],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        <motion.circle
          cx="404"
          cy="260"
          r="188"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeDasharray="2 12"
          animate={{ opacity: [0.18, 0.36, 0.18] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}
