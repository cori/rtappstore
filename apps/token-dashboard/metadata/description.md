# Token Dashboard

A self-hosted analytics dashboard for [Hermes](https://github.com/cori/hermes-agent) token usage. Reads the same `token_calls.db` that Hermes writes during agent turns, and renders per-provider cost, latency, peak-burn, error timelines, and a model-picker-watch panel.

## What it shows

- **Summary cards** — total calls, total tokens, derived cost, peak 5h burn, tracked-model count
- **Provider / model breakdown** — calls, tokens, cost, effective $/M tokens, with tier badges
- **Peak rolling 5-hour burn** by tier (free / metered / subscription)
- **5-hour burn timeline chart** — area chart of recent burn
- **Error timeline** — 429s, 5xx, timeouts with reason
- **Latency distribution** — p50 / p95 / max per provider+model
- **Model Picker Watch panel** — the 9 candidate models the watcher tracks, with current verdict, drift events, and swap recommendations

## Data flow

```
LLM API → Hermes → token_capture.record_call() → ~/.hermes/token_calls.db
                                                              ↓
                                          bind-mounted into container at /data
                                                              ↓
                                          Container regenerator (every 5 min):
                                            reads DB, writes /data/index.html
                                                              ↓
                                          HTTP server serves / on port 8000
                                                              ↓
                                          Traefik → https://dashboard.your-domain
```

No host cron. No copy steps. The container does everything.

## What's bind-mounted

The Runtipi compose file mounts `${APP_DATA_DIR}/data` (the per-install data dir) to `/data` in the container. The host-side `refresh-token-dashboard.sh` cron job (or equivalent) is no longer needed — the container regenerates on its own. The DB and rate table live on the host at the standard `~/.hermes/` paths.

Required host-side files (bind-mounted via `${APP_DATA_DIR}/data`):

| Container path | Host path | Purpose |
|---|---|---|
| `/data/token_calls.db` | `${APP_DATA_DIR}/data/token_calls.db` | The token-usage DB written by Hermes |
| `/data/rate_table.yaml` | `${APP_DATA_DIR}/data/rate_table.yaml` | The pricing/rate table for cost computation |
| `/data/cache/model-picker-watch.jsonl` | `${APP_DATA_DIR}/data/cache/model-picker-watch.jsonl` | Optional: the picker-watch event log |

If `token_calls.db` or `rate_table.yaml` are missing, the dashboard will return an error — check the container logs.

## Configuration

| Env var | Default | Purpose |
|---|---|---|
| `TZ` | `UTC` | Timezone for the dashboard timestamps |
| `REFRESH_INTERVAL` | `300` | Seconds between regenerations |

## Notes

This image is pinned to a specific commit SHA. A GitHub Actions workflow in [`cori/token-dashboard`](https://github.com/cori/token-dashboard) builds and pushes the image to `ghcr.io/cori/token-dashboard` on every merge to `main`, and opens a PR to this repo to bump the version automatically.