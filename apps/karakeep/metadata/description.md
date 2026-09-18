# Karakeep

A self-hostable bookmark-everything app: links, notes, images, PDFs. With optional AI-based automatic tagging (OpenAI or local Ollama) and full-text search via Meilisearch. Native iOS and Android apps talk directly to your server; share-sheet capture on iOS is the killer feature.

Use cases: keep historical notes on brands you like (e.g. a particular blue cheese), restaurants worth returning to (the killer cubano at X), products, recipes, anything that benefits from a quick tag and search later. Karakeep replaces your brain's "I should remember that" stack.

## Features

- Bookmark links, take simple notes, store images and PDFs
- Automatic fetching for link titles, descriptions, images
- Sort bookmarks into lists, full-text search across everything
- Optional AI auto-tagging (OpenAI cloud or local Ollama)
- Chrome, Firefox, and Safari extensions for quick bookmarking
- Native iOS app (https://apps.apple.com/us/app/karakeep-app/id6479258022) and Android app
- Full page archival (via monolith) to protect against link rot
- Bulk actions, dark mode, multi-user
- Self-hosting first

## Components

- `karakeep` (main web app, Next.js) — port 3000 internally
- `karakeep-chrome` (headless Chrome for page archival) — separate container
- `karakeep-meilisearch` (search index) — separate container

## Setup

After install:

1. Open the app at the assigned domain
2. Sign up for the first account (signups are enabled by default)
3. Flip the `DISABLE_SIGNUPS` form field to `true` so no one else can register
4. Optional: configure AI tagging by setting `OPENAI_API_KEY` (cloud) or `OLLAMA_BASE_URL` (local)
5. Install the iOS app, point it at your server URL
6. Install the browser extension if you want quick captures from your desktop browser

## AI Tagging

Two options, both optional:

- **OpenAI**: paste an API key into the `OpenAI API Key` form field
- **Local Ollama**: point `Ollama Base URL` at any reachable Ollama instance (e.g. `http://100.126.40.64:11434`). No data leaves your network.

Either way, Karakeep auto-tags new bookmarks so you don't have to maintain a taxonomy manually. Tags are suggestions — edit at will.

## Versioning Note

Pinned to upstream `v0.33.2` (2026-08-11 release). Renovate does not currently auto-bump Karakeep because the image registry pattern doesn't match the regex in `renovate.json` — bump manually by editing `apps/karakeep/{config.json,docker-compose.json}` and opening a PR.

## Volumes

All persistent data lives under `${APP_DATA_DIR}/data/`:

- `app/` — Karakeep's data dir (bookmarks DB, uploads, etc.)
- `meili_data/` — Meilisearch index data

Back these up together to fully restore.

## Security

`NEXTAUTH_SECRET` and `MEILI_MASTER_KEY` are auto-generated as random hex strings on first install. Save them somewhere safe (1Password) — losing them invalidates all sessions and the search index.
