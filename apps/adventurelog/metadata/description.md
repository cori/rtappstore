# AdventureLog

**The ultimate travel companion — log where you've been, plan what's next, and see your whole world on one map.**

AdventureLog is a modern open-source travel companion built for travelers who want to track, plan, and remember their travel experiences.

## Features

### 📍 Locations & Visits
Pin places on the map with dates, notes, photos, categories, tags, and multi-visit history

### 🗺️ Interactive Map
Filter by visited/planned, add locations by click, 2D & 3D views

### ✈️ Trip Itineraries
Multi-day collections with flights, lodging, checklists, links & calendar views

### 🤝 Collaboration
Share locations and itineraries via public links or invite other users to edit together

### 🌍 World Travel Book
Track countries, regions, and cities — with stats and progress milestones

### 🥾 Trails & Activities
Attach hiking routes, GPX tracks, distance, elevation & outdoor activity logs

### 🔍 Search & Organize
Full-text search, custom categories, public/private visibility

### 🔐 Security
MFA, API keys, social auth (Google, GitHub, Authelia & more)

## Integrations

- **Immich** - Link photos from your self-hosted media library
- **Strava** - Import activities with GPX tracks & stats
- **Endurain** - Import activities with GPX tracks & stats
- **Wanderer** - Attach trails with distance & elevation data
- **Google Maps** - Geocoding & location search

## Tech Stack

- **Backend**: Django + Django REST Framework + PostGIS
- **Frontend**: SvelteKit + Tailwind CSS + DaisyUI
- **Database**: PostgreSQL + PostGIS
- **Deployment**: Docker + Nginx + Supervisor

## Quick Start

1. Install via Runtipi app store
2. Configure the form fields (especially `POSTGRES_PASSWORD` and `SITE_URL`)
3. Deploy the app
4. Access at your configured `SITE_URL`
5. Default login: `admin` / `admin` — **change immediately after first sign-in**

## Default Credentials

- Username: `admin`
- Password: `admin`

⚠️ **Important**: Change the default password immediately after first login!

## Configuration

The app uses the upstream `ghcr.io/seanmorley15/adventurelog` Docker image (v0.13.0). All configuration is handled via environment variables exposed through Runtipi's form fields.

## Links

- **Website**: https://adventurelog.app
- **Documentation**: https://adventurelog.app/docs
- **Source**: https://github.com/seanmorley15/AdventureLog
- **Live Demo**: https://demo.adventurelog.app
- **Discord**: https://discord.gg/wRbQ9Egr8C
- **License**: GPL-3.0