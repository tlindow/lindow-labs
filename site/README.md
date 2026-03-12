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
2. (Recommended for deployed persistence) configure Upstash Redis:
   - `UPSTASH_REDIS_REST_URL=...`
   - `UPSTASH_REDIS_REST_TOKEN=...`
3. Open `/cms`, sign in, and edit Hero/Events/Footer content from desktop or phone.

### Storage behavior

- With Upstash env vars: content saves to Redis (persistent across deployments).
- Without Upstash env vars: content saves to `content/site-content.json` (good for local development).
