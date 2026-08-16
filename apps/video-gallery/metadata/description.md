# Video Gallery

A self-hosted video gallery for FPV drone clips, Instagram Reels, and other video content.

## Features

- **Auto-scans** a directory for video files (MP4, MOV, MKV, WebM, etc.)
- **Rich metadata** from SQLite (`gallery.db`): captions, source URLs, source type (saved/liked/viewed/youtube), 958+ hashtags
- **Tag filter pills** — click any tag to filter the grid, "All" to reset
- **Source type filter** — saved/liked/viewed/youtube
- **Search + sort** — by name, date, size
- **Watch page** — standalone player with OpenGraph/Twitter Card tags for share previews, clickable tag chips linking to filtered gallery
- **External links page** — non-media URLs from Instagram captions, grouped by domain with source caption provenance
- **Poster frames** — extracted via ffmpeg, cached in `/tmp/gallery-posters/`
- **HTTP range requests** — video streaming with seeking support

## Data Source

Mount your video directory at `/data` (read-only). The gallery expects a `gallery.db` SQLite file with the `videos` table schema (see gallery-sqlite-metadata.md).

## Configuration

| Field | Env Var | Default |
|-------|---------|---------|
| Timezone | TZ | UTC |
| Refresh Interval (s) | REFRESH_INTERVAL | 300 |
| Public Domain | PUBLIC_DOMAIN | gallery.407.lol |

## Screenshots

[Add screenshots here]

## Architecture

Built on `gallery-base:latest` — a shared Python 3.12 + ffmpeg + Jinja2 base image with plugin architecture. The `video_processor` plugin implements all video-specific logic.