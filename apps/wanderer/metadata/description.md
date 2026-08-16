# Wanderer

**Your trails. Your data. Your server.**

Wanderer is an open-source, self-hosted trail catalogue for organizing, planning, and sharing GPS tracks without any paywall or subscription.

## Features

### 📍 Trail Management
- Upload GPX, KML, FIT and more
- Full-text and map-based search
- Route planning with Valhalla routing
- Elevation profiles and statistics
- Lists, summit logs, and tags
- Photo galleries and waypoints

### 🌐 ActivityPub Federation
Follow explorers on other Wanderer instances — their public trails, comments, and summit logs appear in your feed. No account on their server required. Built on the same open standard as Mastodon and Pixelfed.

### 📱 Mobile Apps
Native iOS and Android apps available.

### 🔌 Plugin System
Integrations (Strava, Komoot, Hammerhead) run as sandboxed WASM plugins. Install plugins via `/data/plugins` volume.

## Quick Start

1. Install via Runtipi app store
2. Configure the form fields (especially `MEILI_MASTER_KEY`, `POCKETBASE_ENCRYPTION_KEY`, and `ORIGIN`)
3. Deploy the app
4. Access at your configured `ORIGIN`
5. Register an account (or disable signup via `PUBLIC_DISABLE_SIGNUP`)

## Configuration

The app uses three services:
- **Meilisearch** (search engine) - port 7700 internal
- **PocketBase** (database + auth) - port 8090 internal  
- **SvelteKit Web** (frontend) - port 3000 internal (main)

All data persists in `${APP_DATA_DIR}/data/`.

## Plugins

After deployment, install plugins (Strava, Komoot, Hammerhead) by downloading `.tar.gz` files from [GitHub releases](https://github.com/open-wanderer/wanderer/releases) and placing them in `${APP_DATA_DIR}/data/plugins/`, then activating in Wanderer's admin panel.

## Links

- **Website**: https://wanderer.to
- **Documentation**: https://wanderer.to/run/installation/quick
- **Source**: https://github.com/open-wanderer/wanderer
- **Demo**: https://demo.wanderer.to
- **Discord**: https://discord.gg/USSEBY98CP
- **License**: AGPL-3.0