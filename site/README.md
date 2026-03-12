# Tyler Lindow — Personal Website

Built with [Next.js](https://nextjs.org/), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

## Phone-friendly CMS (`/cms`)

This project now includes a lightweight CMS at `http://localhost:3000/cms`.

1. Set a password:
   - `CMS_PASSWORD=your-secure-password`
2. Configure shared CMS storage (recommended for Vercel):
   - `CMS_UPSTASH_REDIS_REST_URL=...`
   - `CMS_UPSTASH_REDIS_REST_TOKEN=...`
   - `CMS_CONTENT_KEY=site:content:global:v1`
3. Open `/cms`, sign in, and edit Hero/Events/Footer content from desktop or phone.

### Storage behavior

- With Upstash env vars: content saves to Redis (persistent across deployments).
- Without Upstash env vars: content saves to `content/site-content.json` (good for local development).

## Vercel setup (Preview + Production sharing)

To make Preview edits show in Production, both environments must point at the same CMS storage key in the same Redis database.

1. In Vercel, open your project: **Settings → Environment Variables**.
2. Add `CMS_PASSWORD` and target **Preview** (and optionally Production with same or different password).
3. Add `CMS_UPSTASH_REDIS_REST_URL` and `CMS_UPSTASH_REDIS_REST_TOKEN`, and target both **Preview** and **Production** with the same values.
4. Add `CMS_CONTENT_KEY` with the same value for both **Preview** and **Production** (example: `site:content:global:v1`).
5. Redeploy Preview + Production so env changes apply.

After this, editing content on any Preview deployment `/cms` writes to the same shared content key that Production reads.
