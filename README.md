# AI Artifacts Showcase

A curated showcase of AI-generated artifacts — interactive demos, visualizations, tools, and creative experiments built with AI assistants like Claude, ChatGPT, Gemini, and more.

## Features

- Browse artifacts by category (Game, Visualization, Tool, Creative, Education, Productivity)
- Filter by AI tool used
- View artifacts embedded directly in the page or via external links
- Local HTML artifacts served from `public/artifacts/`

## Artifacts

### Swiggy Order Dashboard
A personal analytics dashboard that visualizes your Swiggy order history. Upload your exported `swiggy_orders.json` to see:
- Spending trends over time
- Top restaurants and cuisines
- Most ordered items and veg vs non-veg breakdown
- Payment method distribution
- Order size distribution and hourly patterns
- Detailed savings breakdown

## Adding Artifacts

Artifacts can be added in `src/data/artifacts.ts` with three display modes:

- **External link** — set `externalUrl` to open in a new tab
- **Embedded URL** — set `embedUrl` to load in an iframe (works for local files in `public/artifacts/`)
- **Embedded HTML** — set `embedHtml` with raw HTML rendered via `srcdoc`

## Getting Started

```shell
npm install
npm run dev
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bharathnayak03/artifacts-showcase)

```shell
vercel
```

## Tech Stack

- React + TypeScript
- Vite
- Chart.js (used in Swiggy dashboard artifact)
