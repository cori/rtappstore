# Dopplerprint

Find where an audio recording was made from the aircraft heard in it.

A passing propeller plane or helicopter leaves a tone in a recording whose pitch
falls as it goes by. The shape of that curve fixes the aircraft's speed, its
closest distance and the moment it was closest. Dopplerprint fits those curves,
looks up which aircraft were flying at that time in the public **adsb.lol**
ADS-B archives, models the wind and temperature from **Open-Meteo**, and
searches the ground for the point that would have heard every one of them at
the right time and pitch — then reports the best location (OpenStreetMap link),
a calibrated 90% region, the mirror solution for single passes, and the
aircraft matched to each pass.

The Runtipi app runs the built-in `dopplerprint serve` web UI: drag a recording
(WAV, MP3, FLAC, OGG, M4A/AAC; up to 1 GB) onto the page, say when it started
("2026-05-14 10:02 -07:00", plus an optional "±10m" for a rough time) and
roughly where (place name, `lat,lon`, `lat,lon,radius_km`, or a bounding box),
and press Locate. The page shows progress, the result, the `result.html` map
and GeoJSON/JSON downloads.

## What it downloads

- adsb.lol archive days not yet cached: **~3.5 GB per UTC day** the recording
  touches (cap 20 GB by default; the download starts automatically because the
  page cannot ask the yes/no question). The cache lives under the app's data
  directory, so it survives restarts.
- Weather profiles from Open-Meteo (only rounded lat/lon and the date are
  sent; free non-commercial tier).

With a `--near` area the search usually finishes in minutes. Without one, the
whole contiguous US is searched (15–20 min per hour of audio). Single passes
and wide time windows can return inconclusive results — the report says why.

## Notes

- The web UI is **unauthenticated**: anyone who reaches the subdomain can
  upload recordings and see results. Keep it LAN/Tailnet-facing.
- Image built from source at `forge.407.lol/cori/dopplerprint` (MIT). Renovate
  cannot see that registry — bump `version`/`tipi_version` in config.json and
  the image tag in docker-compose.json manually when the fork's main moves.
- Data licences: adsb.lol ODbL; Open-Meteo CC BY 4.0.
