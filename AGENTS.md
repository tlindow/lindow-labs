## Cursor Cloud specific instructions

This repository contains **Tyler Lindow's personal website**, built with Next.js, TypeScript, and Tailwind CSS. It serves as a marketing landing page — the front door to future products and services.

### Planning mode

The first prompt of the session should always enter a planning mode, unless otherwise stated.

When planning, treat Markdown notes as the primary source of intent before relying on anything user-facing in the app.

Planning priority order:

1. `/logs/*.md` entries, especially `## Context`, `## Reflections`, `## Decisions`, and `## Next`
2. `README.md`, `site/README.md`, and other repository Markdown that explains direction or constraints
3. The current frontend implementation in `site/src/components/` and `site/src/app/`

Planning questions should be concise, synthesis-oriented, and based on the underlying thoughts captured in Markdown files. Do not simply restate or overfit to the exact wording currently printed on the frontend unless the task is explicitly about UI copy or presentation.

When there is tension between written reflections and the current UI, assume the Markdown captures broader intent and use the UI as the current expression of that intent rather than the sole source of truth.

### Project structure

- `site/` — the Next.js application
  - `src/app/` — App Router pages and layout
  - `src/components/` — React components (Navbar, Hero, About, Portfolio, Speaking, Mentoring, Content, TechStack, Footer)
  - `src/components/animations/` — Reusable animation components (ScrollReveal, AnimatedText, CountUp, FloatingOrbs, GradientBeam, MagneticButton)
  - `public/` — static assets (favicon, images)
- `logs/` — Personal build logs and reflections (chronological Markdown entries)
- `README.md` — GitHub profile README (also rendered on the GitHub profile page)

### Environment setup

```bash
cd site
npm install
```

### Running the dev server

```bash
cd site
npm run dev
```

The site runs at `http://localhost:3000`.

### Building for production

```bash
cd site
npm run build
npm start
```

### Linting

```bash
cd site
npm run lint
```

### Testing

- No automated test suite is configured yet.
- Manual testing: run the dev server and verify pages render correctly in the browser.
- For Cursor Cloud agents: run `npm run build` in the `site/` directory to verify the build passes. Use the `computerUse` subagent to manually test UI changes at `http://localhost:3000`.

### Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (scroll-triggered animations, gestures, spring physics)
- **lucide-react** (icons)

### Animation architecture

The site uses a composable animation system built on Framer Motion:

- `ScrollReveal` — fade/slide-in on scroll with configurable direction, delay, and blur
- `StaggerContainer` / `StaggerItem` — stagger children animations on scroll
- `AnimatedText` — word-by-word text reveal
- `CountUp` — animated number counter on scroll
- `FloatingOrbs` — ambient drifting gradient blobs with grid overlay
- `GradientBeam` — slow-rotating radial gradient with pulse
- `MagneticButton` — cursor-following spring-based button effect

All animation components are client components (`"use client"`) and are located in `site/src/components/animations/`.

### Build logs

Personal build logs live in `/logs/`. See `logs/README.md` for the entry format and purpose. These capture decisions, reflections, and context for future reference when building into product spaces or services.
