# photomap

Plot the photos from an iCloud shared album on a map, clustered by location, and click through to any photo with its full geodata.

Paste a shared album link (`https://www.icloud.com/sharedalbum/#TOKEN`) and the map builds itself.

## Where the coordinates come from

Apple's shared-album API returns captions, timestamps and image URLs — but no location. The location is still in the photos themselves: shared albums preserve the original EXIF, GPS block included.

So the browser reads the EXIF itself. Apple's CDN sends CORS headers and honours HTTP `Range`, so the page fetches only the first ~192 KB of each photo — enough for the EXIF segment — parses the GPS block, and drops pins as they resolve. Full-size photos are never downloaded just to find out where they were taken, and coordinates are cached in `localStorage` so a repeat visit maps instantly.

## Features

- **Zoom-aware clustering** — clusters are computed in screen pixels, not fixed geography, so a cluster always means "these would overlap right now". Zooming genuinely pulls clusters apart into smaller piles and then into individual photos.
- **Spiderfy** — photos taken within ~4 m of each other fan out in place instead of forcing you to zoom forever.
- **Route line** — chronological track through the located photos, so a trip reads as a trip.
- **Full photo view** — coordinates in DMS and decimal, altitude, heading drawn as a compass cone on an inset map, speed, GPS accuracy, reverse-geocoded place name, camera, lens and exposure. Arrow keys move through the album.
- **Filters** — by album and by date range, with a live thumbnail strip of what's in view.
- **Honest about gaps** — photos with no GPS block (screenshots, scans, location services off) are listed separately rather than silently dropped.
- **Other inputs** — drag and drop local photos (parsed in-browser, never uploaded), or paste direct image URLs.
- **Shareable** — loaded albums are carried in the URL as `#album=TOKEN`, so a mapped trip is a bookmarkable link.

## Basemaps

OpenStreetMap (with a dark variant), OpenTopoMap and Esri World Imagery — all keyless.

## Configuration

| Field | Env Var | Default |
|-------|---------|---------|
| Timezone | TZ | UTC |

## Data

The only writable state is a reverse-geocode cache in `/data`, which exists so a restart doesn't re-ask Nominatim about places it already knows. It's safe to delete. Everything the app actually shows lives in your browser — no accounts, no telemetry, no server-side photo storage.

## Notes

- Individual `share.icloud.com/photos/…` links are not supported; those use a different single-asset flow. Shared albums are the supported path.
- Videos are skipped for location — their coordinates live in a container atom, not EXIF.
- The container reaches out to Apple's iCloud endpoints for album data and to Nominatim for place names (rate-limited to one request per second, per their usage policy).
