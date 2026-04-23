# Pivot: Personal site → The Tinker Hub

**Date:** 2026-04-23
**Tags:** #pivot #scope #rebuild #sandiego #makerspace

## Context

Scope changed from a personal portfolio (Tyler Lindow: developer, builder,
mentor) to a marketing site for **The Tinker Hub** — a hands-on maker space
in San Diego where software engineers, IT technologists, and the like become
tinkers. Hardware, not just screens. Solder, print, retrofit, build.

The previous site had sections for About, Mentoring, Portfolio, Speaking,
Content, and TechStack, all anchored on one person. That framing no longer
fits. The new audience is people who already ship code and want the other
half of the craft.

## Reflections

- The interesting verb is **tinker** — not "learn," not "network," not "code."
  It implies hands, not just fingers; atoms, not just bits.
- San Diego matters as a location hook. Coastal, warm, a different energy
  than the Bay or NYC. That should show up in tone without being corny.
- The audience already has a job. The site doesn't need to explain what a
  soldering iron is. It needs to explain why engineers should care, what's
  at the space, and how to show up.
- Keeping the existing animation primitives (ScrollReveal, FloatingOrbs,
  GradientBeam, MagneticButton, AnimatedText) was a clean reuse — the
  infrastructure generalizes well across copy.

## Decisions

- **Name:** "The Tinker Hub." Direct, maps exactly to the scope statement.
- **Tagline:** "Where engineers become tinkers."
- **Sections (in order):**
  1. Hero — name, tagline, location, two CTAs (Book a tour / See the space)
  2. Idea — the gap between shipping code and making a thing
  3. Space — six bays: Electronics, Fabrication, Hardware Lab, Teardown,
     Hack Lounge, Coast Deck
  4. Tracks — Solder Up, Firmware First, Retrofit Club, Build Nights
  5. Schedule — weekly rhythm Mon–Sun
  6. Membership — Drop-in ($25/day), Resident ($149/mo),
     Founding Tinker ($99/mo, first 50 only)
  7. Toolkit — equipment list grouped by discipline
  8. Footer — location (Barrio Logan), socials, email
- **Palette:** Kept the pastel vars; repositioned accents to amber
  (workshop warmth) and sky (coast) as primary. Violet demoted to supporting.
- **Selection color:** Switched from violet to amber to match the new accent.
- **Deleted:** About.tsx, Mentoring.tsx, Portfolio.tsx, Speaking.tsx,
  Content.tsx, TechStack.tsx.
- **Added:** Idea.tsx, Space.tsx, Tracks.tsx, Schedule.tsx, Membership.tsx,
  Toolkit.tsx.
- **Rewrote:** Hero.tsx (badge instead of personal photo), Navbar.tsx (new
  links, amber accent, wrench glyph), Footer.tsx (brand, location, contact).
- **Personal imagery:** Dropped the personal photo in the hero in favor of
  a workshop-flavored badge (Wrench + Waves). Public image assets left in
  place for now; can be removed in a follow-up if not reclaimed.
- **Email:** Placeholder `hello@thetinkerhub.co`. Real domain TBD.

## Next

- Confirm name "The Tinker Hub" vs alternates (Tinker Coast, West Bench,
  Solder Club, etc.). If the name changes, it lives in Navbar, Hero,
  Footer, layout metadata, README — centralize later if needed.
- Decide actual address / neighborhood and replace "Barrio Logan."
- Decide whether there's a real waitlist / application flow, and replace
  the `mailto:` CTAs with a proper form.
- Pricing is a first draft — validate against comparable maker spaces
  (Crash Space, NYC Resistor, Nova Labs) before publishing.
- Founding Tinker tier capped at 50 — add a live counter once we have a
  backend, or a static "X of 50 claimed" number sourced from a config.
- Consider a small "apply to teach a track" CTA on the Tracks section for
  community instructors.
- `/public/IMG_0548.jpeg`, `IMG_0591.jpeg`, `IMG_0596.jpeg`, `profile.png`
  are orphaned. Delete or replace with workshop photography once we have it.
- Favicon still carries the old site's identity — swap when we have a
  Tinker Hub mark.

---

## Refinement — same day

Sharpened the core definition: **a tinkerer builds for themselves.**
That is the load-bearing idea. The physical/hardware angle is still true
but it's a *means*, not the thesis. Tinkering is defined by audience
(you), not by medium (atoms vs. bits).

### Changes

- Switched noun from "tinker" to "tinkerer" (standard English form).
  Kept "The Tinker Hub" as the brand — it reads naturally as an
  adjective-noun compound.
- Renamed membership tier "Founding Tinker" → "Founding Tinkerer".
- Rewrote Hero subhead and Idea section body around the "building for
  yourself" thesis. Day-job-vs-tinkering contrast is now the spine.
- Updated the three Idea chips to express the arc:
  "You build for someone else" → "You build for you" → "You keep what
  you made."
- Updated Tracks intro: "Whatever you make on a track is yours to keep."
- Updated metadata, README, AGENTS.md to reflect the sharper framing.

### Why this matters

The first framing (hardware vs. software) could have pulled the Hub
toward being "a hackerspace with better branding." That's a crowded
category. The "builds for themselves" framing instead positions the
Hub against the day job, not against software — which is a much larger
and emptier cultural gap. A tinkerer could be building a janky home
server, a mechanical keyboard, a pinball machine, or a CLI that only
they will ever use. All of it counts, as long as the audience is one.
