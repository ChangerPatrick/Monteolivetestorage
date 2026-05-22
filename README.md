# Valencia Managed Storage

Managed-storage MVP website for a Valencia business that stores and manages specific customer items instead of renting individual trasteros.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- App Router
- Local mock data only
- No database, authentication, paid APIs, or Stripe

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Project Structure

- `app/` contains App Router pages and page metadata.
- `components/` contains shared UI components such as header, footer, cards, FAQ accordion, forms, and service-area list.
- `src/lib/siteConfig.ts` contains the business name, quote manager, contact details, and service area.
- `data/storage.ts` contains mock pricing, FAQs, use cases, prohibited items, quote options, and sample booking requests.
- `public/storage-hub-hero.png` is a local generated hero visual.
- `scripts/generate-hero-image.mjs` regenerates the hero PNG with `npm run generate:hero`.

## MVP Notes

The quote form does not send through a backend yet. It validates basic required fields, prints submitted data to the browser console, and creates WhatsApp/email handoff links to the storage manager for MVP testing.

This website is an MVP concept. Actual operation requires professional review of licensing, fire safety, insurance, contracts, and local activity compatibility.
