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
