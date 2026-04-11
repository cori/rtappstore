# FPV Rate Profile Playground

A web-based tool for visualizing, comparing, and sharing Betaflight Actual Rates profiles in real time.

## Features

- **Interactive rate curves** — Roll, pitch, and yaw overlaid on a single graph with live updates as you adjust sliders
- **Throttle curve** — Adjustable mid-point and expo with visual feedback
- **Multi-profile comparison** — Load up to 5 profiles simultaneously; first profile is editable, additional profiles appear as dashed reference overlays
- **Shareable URLs** — Every profile state is encodable as a URL you can bookmark or share
- **CLI import / export** — Paste a Betaflight dump to populate all sliders; copy CLI commands to apply settings on your FC
- **LLM-friendly REST API** — POST rate profiles to `/api/share`, receive a visualization URL back

## API

The app exposes a small REST API for programmatic use:

| Endpoint | Description |
|---|---|
| `POST /api/share` | Submit 1–5 profiles, receive a shareable comparison URL |
| `GET /openapi.json` | OpenAPI 3.0 spec for the API |
| `GET /.well-known/ai-plugin.json` | AI plugin manifest for LLM discoverability |

### Example: compare two profiles

```bash
curl -s -X POST http://your-server:8386/api/share \
  -H 'Content-Type: application/json' \
  -d '{
    "profiles": [
      {"name":"Freestyle","roll_rc_rate":70,"roll_rate":670,"roll_expo":0,
       "pitch_rc_rate":70,"pitch_rate":670,"pitch_expo":0,
       "yaw_rc_rate":70,"yaw_rate":600,"yaw_expo":0,"thr_mid":50,"thr_expo":0},
      {"name":"Cinematic","roll_rc_rate":40,"roll_rate":400,"roll_expo":40,
       "pitch_rc_rate":40,"pitch_rate":400,"pitch_expo":40,
       "yaw_rc_rate":40,"yaw_rate":350,"yaw_expo":40,"thr_mid":55,"thr_expo":30}
    ]
  }' | jq -r .url
```

Open the returned URL in a browser to see both profiles compared side-by-side.

## Rate Parameters

| Field | Range | Description |
|---|---|---|
| `roll_rc_rate` / `pitch_rc_rate` / `yaw_rc_rate` | 0–255 | Center sensitivity |
| `roll_rate` / `pitch_rate` / `yaw_rate` | 200–2000 | Max rate in deg/s |
| `roll_expo` / `pitch_expo` / `yaw_expo` | 0–100 | Expo (0 = linear) |
| `thr_mid` | 0–100 | Throttle mid-point |
| `thr_expo` | 0–100 | Throttle expo |

## Resources

- [Source Code](https://github.com/cori/fpv-rate-profile-playground)
- [API Spec](/openapi.json)
