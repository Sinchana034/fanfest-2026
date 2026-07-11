# FanFest 2026 — Creator Application Site

A pixel-close recreation of [fan-fest-2026.vercel.app](https://fan-fest-2026.vercel.app/), built with React + Vite.

Replicates every section of the reference site: sticky nav, animated hero (live countdown + auto-scrolling niche ticker), "What Is FanFest" feature grid, creator perks, eligibility pill grid, application timeline, a fully validated multi-section application form, an FAQ accordion, and footer — all responsive from mobile through desktop.

## Tech Stack

- **React 19** + **Vite** — component structure, fast dev/build
- Plain CSS with design tokens (CSS custom properties) — no UI framework, for full control over the visual identity
- No backend: the application form validates client-side and shows a confirmation screen on submit (the reference site has no visible backend either). To wire it to a real backend, see "Connecting the form" below.

## Project Structure

```
fanfest-2026/
├── index.html
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx                # Page composition
│   ├── index.css              # Design tokens + global styles
│   └── components/
│       ├── Header.jsx/.css        # Sticky nav + mobile menu
│       ├── Hero.jsx/.css          # Hero, countdown timer, ticker, stats
│       ├── About.jsx/.css         # "What Is FanFest" feature grid
│       ├── Perks.jsx/.css         # Creator perks grid
│       ├── Eligibility.jsx/.css   # Niche pill grid
│       ├── Timeline.jsx/.css      # Application timeline
│       ├── ApplyForm.jsx/.css     # Multi-section validated form
│       ├── FAQ.jsx/.css           # Accordion
│       └── Footer.jsx/.css
├── package.json
└── vite.config.js
```

## Setup & Local Development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build for Production

```bash
npm run build     # outputs static files to dist/
npm run preview   # serve the production build locally to sanity-check it
```


## Notes on Accuracy

- Copy has been rewritten in original wording (content, structure, and information architecture match the reference; exact sentences do not, to avoid duplicating another site's text verbatim).
- Visual direction (dark festival palette, condensed display type, gradient accents, marquee ticker, animated countdown) is an original interpretation built to match the reference's tone and layout, not a literal pixel clone of its CSS.
- Fully responsive: tested at desktop (1440px), tablet (820px), and mobile (390px) widths.
