# Marketing Site Evolution — Premium Animations & Infrastructure

**Date:** 2026-03-05  
**Tags:** #ui #animations #infrastructure #marketing-site #framer-motion

## Context

The personal site has reached a point where it feels professional and solid — a clean Next.js + Tailwind CSS single-page site with sections for About, Mentoring, Portfolio, Speaking, Content, Tech Stack, and a Footer. The next step is to elevate it into something that feels more like a company marketing page — the kind of site that could eventually link out to paid products and services. Think Vercel, Linear, Stripe-level polish.

This is also the starting point for a stealth product that isn't yet represented on the site. The site itself becomes the marketing surface — the front door to whatever comes next.

## Reflections

- The site before this iteration was clean but static. No scroll animations, no entrance effects, no micro-interactions. It was functional but didn't communicate the "builder" identity.
- Major companies differentiate through motion design. Not flashy or cheesy — deliberate, physics-based animations that make you wonder how the tech works. That's the bar.
- Framer Motion was the clear choice for React-based animations. It handles scroll-triggered reveals, spring physics, layout animations, and gesture interactions cleanly.
- The pastel color palette and DM Serif Display typography already gave the site a warm, approachable feel. The animations should amplify that — not fight it.

## Decisions

1. **Framer Motion over CSS-only animations** — CSS keyframes for background effects, Framer Motion for scroll-triggered reveals, stagger effects, and interactive elements. This gives the best of both worlds: performant background animations and declarative React-based motion.

2. **Reusable animation components** — Created `ScrollReveal`, `StaggerContainer`, `StaggerItem`, `AnimatedText`, `CountUp`, `FloatingOrbs`, `GradientBeam`, and `MagneticButton` as composable building blocks. These can be reused across any future pages or product sections.

3. **Hero as the hero** — The hero section got the most dramatic treatment: floating gradient orbs that drift and breathe, a subtle grid overlay for tech feel, a gradient beam that rotates slowly, word-by-word text reveal, and a glowing profile image ring. This is the first impression and it should feel alive.

4. **Scroll progress indicator** — Added a gradient progress bar to the navbar that fills as you scroll. Small detail, big polish.

5. **Physics-based micro-interactions** — Magnetic buttons that subtly follow the cursor, cards that lift on hover with shadow and translate, arrow icons that animate on hover. These create a tactile, responsive feel.

6. **Build logs infrastructure** — Created `/logs/` as a chronological record of decisions, reflections, and context. This is for continuity — future agents or the author can reference these when building into product spaces.

## Next

- Consider adding a "Coming Soon" or "Building Something" teaser section when the stealth product is ready to hint at.
- Explore adding a dark mode toggle — the animation system is already set up to support it.
- Consider page transitions if the site evolves into a multi-page layout.
- Newsletter signup integration (email capture).
- Performance audit — ensure animations don't impact Core Web Vitals on mobile.
- The animation components are product-ready and could be extracted into a shared package if other projects need them.
