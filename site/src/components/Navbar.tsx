"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

const links = [
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.div
        className="glass mx-auto max-w-6xl rounded-md"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                width: scrolled ? "min(95vw, 72rem)" : "min(98vw, 74rem)",
                y: scrolled ? 0 : 2,
              }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex h-16 items-center justify-between px-5 sm:px-7">
          <a
            href="#"
            className="font-display text-xl tracking-wide text-foreground sm:text-2xl"
          >
            Tyler Lindow
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium tracking-[0.08em] text-muted uppercase transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 -mr-2 text-muted transition-colors hover:text-foreground md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="glass mx-auto mt-2 max-w-6xl rounded-md md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-sm px-3 py-2.5 text-[0.8rem] font-medium uppercase tracking-[0.09em] text-muted transition-colors hover:bg-surface-elevated hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
