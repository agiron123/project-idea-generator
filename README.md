# Project Idea Generator

A web app to discover and save project ideas for your next build. Browse by category, search by keyword, or shuffle for random inspiration.

## Stack

- **Web**: Next.js 15 + React + TypeScript + Tailwind CSS v4 + shadcn/ui
- **API**: Hono (Vercel serverless functions)
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

## Deploy

Both the API and web app deploy to Vercel:

```bash
# Deploy API
cd apps/api && vercel --prod

# Deploy Web
cd apps/web && vercel --prod
```

## Structure

```
apps/
  web/       Next.js frontend
  api/       Hono backend (Vercel serverless)
packages/
  db/        Drizzle schema
```
