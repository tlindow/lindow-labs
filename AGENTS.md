## Cursor Cloud specific instructions

This repository contains **Tyler Lindow's personal website**, built with Next.js, TypeScript, and Tailwind CSS.

### Project structure

- `site/` — the Next.js application
  - `src/app/` — App Router pages and layout
  - `src/components/` — React components (Navbar, Hero, About, Portfolio, Speaking, Mentoring, Content, TechStack, Footer)
  - `public/` — static assets (favicon, images)
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
- **lucide-react** (icons)
