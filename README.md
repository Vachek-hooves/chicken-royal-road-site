# Chicken Royal Road — Website

Marketing / partner-pitch site for the **Chicken Royal Road** crash-style game, built with React + Vite and deployed to GitHub Pages on the custom domain `chicken-royal-road.com`.

## Stack

- Vite + React (plain JS, no framework router — single scrolling page with anchor links)
- Plain CSS with a token file (`src/styles/tokens.css`) matching the brand's official colors (`#FEC610`, `#E9141B`, …), Rubik One for headings and Inter for body text
- Real exported artwork from the Figma file lives in `src/assets/*`, converted to WebP

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. The custom domain is set via `public/CNAME` (`chicken-royal-road.com`) — at your DNS provider, point the domain at GitHub Pages:

- `A` records for the apex domain → GitHub Pages IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`), **or**
- a `CNAME` record for a `www` subdomain → `<github-username>.github.io`

GitHub Pages must be enabled with source **"GitHub Actions"** in the repo's Settings → Pages (done automatically by this repo's setup, double-check after the first deploy).

## Things to plug in later

Both are centralized in `src/config/site.js` so no component needs touching:

- **Trailer video** — set `TRAILER_YOUTUBE_ID` to the YouTube video id once it's uploaded. Until then, "Play Demo" just scrolls to the How to Play section.
- **Contact form backend** — set `CONTACT_FORM_ENDPOINT` to a real endpoint (Formspree, your own API, etc.). Until then, the form runs in mock mode: it validates and shows a success state without sending anything over the network.
