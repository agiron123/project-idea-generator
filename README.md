# Project Idea Generator

A web app to discover and save project ideas for your next build. Browse by category, search by keyword, or shuffle for random inspiration.

## Stack

- **Web**: Next.js 15 + React + TypeScript + Tailwind CSS v4 + shadcn/ui
- **API**: Hono (Cloudflare Workers)
- **DB**: Drizzle ORM + SQLite (Neon Postgres in production)

## Setup

```bash
# Install dependencies
npm install

# Run web dev server
npm run dev --filter=web

# Run API dev server
npm run dev --filter=api
```

## Structure

```
apps/
  web/       Next.js frontend
  api/       Hono backend
packages/
  db/        Drizzle schema
```

## Deploy

The API deploys to Cloudflare Workers. The web app can be deployed to Vercel.
