# Sagi Dahan Fitness Landing Page

Professional Hebrew RTL landing page for Sagi Dahan online fitness coaching.

## Edit checklist

- Replace the WhatsApp number in `app/page.tsx` inside `whatsappUrl`.
- Replace placeholder images in `public/images/`.
- Edit sections, packages, FAQ, and testimonials in the arrays near the top of `app/page.tsx`.
- SEO title and description are in `app/layout.tsx`.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy to Vercel

This is a standard Next.js app. In Vercel, import the project and keep the default settings:

- Framework Preset: Next.js
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave empty/default
