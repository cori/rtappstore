# Dawarich

Self-hosted alternative to Google Timeline (Google Location History). Track your location from your phone and get your travel history back: trips, visits, stats, heatmaps and a map-based timeline — without sending your data to Google.

## Features

- **Multiple tracking sources** — official Dawarich mobile apps (iOS/Android), OwnTracks, Overland, GPSLogger, PhoneTrack, Home Assistant
- **Trips & visits** — automatic trip segmentation, visit suggestions with confidence scores
- **Statistics** — distance, active days, countries & cities, days per country
- **Map v2 timeline** — Google Timeline-style map with per-day tracks, point editing, bulk selection
- **Google Takeout import** — backfill years of historical location data
- **GPS noise filtering** — automatic detection of unrealistic speeds, altitudes and sudden jumps, user-configurable, with track recalculation
- **Photo geotagging** — attach GPS positions to photos from Immich, PhotoPrism or Google Photos
- **Reverse geocoding** — point/city/country resolution
- **Export** — GeoJSON/GPX exports of points and tracks

## Pointing a tracking app at this instance

After install, use your Dawarich API key (Account section) with the endpoints:

- Overland: `https://dawarich.407.lol/api/v1/overland/batches?api_key=YOUR_KEY`
- OwnTracks: `https://dawarich.407.lol/api/v1/owntracks/points?api_key=YOUR_KEY`
- Dawarich mobile apps: enter the server URL and API key in the app

## Architecture

Four services: Rails app (web), Sidekiq (background jobs), Postgres (PostGIS) and Redis. Databases and storage persist under the app data directory.