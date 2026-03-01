# Tim Lindow — Personal Website

A modern personal website framework built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/).

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, highlights, values, CTA |
| `/about` | Bio, career timeline, quick facts |
| `/speaking` | Topics, what to expect, event listings |
| `/mentoring` | Focus areas, process, testimonials |
| `/portfolio` | Video content, projects, content roadmap |
| `/newsletter` | Subscribe form, topic preview, archive |
| `/blog` | Post listings, categories |
| `/contact` | Contact form, sidebar with social links |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Edit `src/lib/siteConfig.ts` to update your name, tagline, description, and social links. All pages pull from this central config.

## Customization Guide

- **Add real experience:** Update the timeline in `src/app/about/page.tsx` with your actual career history.
- **Add blog posts:** Create files in `src/app/blog/[slug]/page.tsx` or connect a CMS.
- **Embed videos:** Replace placeholder video cards in `src/app/portfolio/page.tsx` with real YouTube/LinkedIn embeds.
- **Connect newsletter:** Wire up the form in `src/app/newsletter/NewsletterForm.tsx` to ConvertKit, Mailchimp, Buttondown, etc.
- **Connect contact form:** Wire up `src/app/contact/ContactForm.tsx` to Formspree, Formspark, or a custom API route.
- **Add events:** Populate the speaking events section with real dates and venues.

## Deployment

Deploy to [Vercel](https://vercel.com/) with one click, or any platform that supports Next.js:

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** TypeScript
- **Font:** Inter (via `next/font`)
