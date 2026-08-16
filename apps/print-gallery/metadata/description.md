# 3D Print Timelapse Gallery

A browsable timelapse gallery for 3D prints — each entry pairs a timelapse video with its source G-code file.

## Features

- **Auto-scans** for timelapse videos (MP4) + paired G-code files
- **Manifest-based metadata** — reads `manifest.json` with print details:
  - Filament type (PLA, PETG, PCTG, etc.)
  - Printer (plus4, k1, etc.)
  - Outcome (success, failed, cancelled)
  - Custom tags
  - Duration, date
- **Filter pills** — filter by filament, printer, outcome, tags (AND across fields, OR within)
- **Search + sort** — by name, date
- **Watch page** — video player with poster frame, full print metadata, G-code download link, clickable tag chips linking to filtered gallery
- **G-code download** — direct `/gcode/<file>` endpoint
- **HTTP range requests** — video streaming with seeking support

## Data Source

Mount your timelapse directory at `/data` (read-only). The gallery expects:
- `manifest.json` with print entries (id, timelapse_mp4, timelapse_jpg, gcode, metadata)
- Paired `.mp4` + `.jpg` + `.gcode` files for each print

## Configuration

| Field | Env Var | Default |
|-------|---------|---------|
| Timezone | TZ | UTC |
| Refresh Interval (s) | REFRESH_INTERVAL | 300 |
| Public Domain | PUBLIC_DOMAIN | prints.407.lol |

## Architecture

Built on `gallery-base:latest` — shared Python 3.12 + ffmpeg + Jinja2 base image. The `timelapse_processor` plugin implements print-specific logic.