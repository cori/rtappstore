# Token Dashboard

A self-hosted analytics dashboard for [Hermes](https://github.com/cori/hermes-agent) token usage. Reads the per-call `token_calls.db` written by the **token-recorder Hermes plugin** (subscribes to the stock `post_api_request` / `api_request_error` lifecycle hooks — no Hermes source modifications), and renders per-provider cost, latency, peak-burn, error timelines, and a model-picker-watch panel.

## What it shows

- **Summary cards** — total calls, total tokens, derived cost, peak 5h burn, tracked-model count
- **Provider / model breakdown** — calls, tokens, cost, effective $/M tokens, with tier badges
- **Peak rolling 5-hour burn** by tier (free / metered / subscription)
- **5-hour burn timeline chart** — area chart of recent burn
- **Error timeline** — 429s, 5xx, timeouts with reason
- **Latency distribution** — p50 / p95 / max per provider+model
- **Model Picker Watch panel** — the 9 candidate models the watcher tracks, with current verdict, drift events, and swap recommendations

## Required configuration

- **Hermes Home Host Path** (required, absolute path): the Hermes home directory on this
  host. Two source files inside it are bind-mounted into the container:
  - `<hermes-home>/token_calls.db` → `/data/token_calls.db` — the per-call recorder DB.
    The `token-recorder` plugin writes it with `journal_mode=DELETE` (no WAL sidecars), so
    the single-file bind mount always serves committed pages.
  - `<hermes-home>/rate_table.yaml` → `/data/rate_table.yaml` — the pricing table the
    dashboard derives costs from.
- The plugin lives in `<hermes-home>/plugins/token-recorder/` on the Hermes host; install
  and enable it in Hermes itself (`plugins.enabled` in Hermes config), then restart the
  Hermes gateway. The dashboard does not need it on its own filesystem.

## Data flow

```
LLM API → Hermes gateway → token-recorder plugin (post_api_request / api_request_error)
                            → <hermes-home>/token_calls.db (DELETE journal, per-insert commit)
                                        ↓ bind-mounted into the container at /data
                          Container regenerator (every 5 min):
                            reads DB + rate_table.yaml, writes /data/index.html
                                        ↓
                          HTTP server serves /data/index.html on port 8000 (external 8850)
                                        ↓
                          Traefik → https://dashboard.<your-domain>
```

A host-side Hermes cron (`refresh-token-dashboard`, every 30 min) regenerates the same
dashboard from the host DB and copies it over `/data/index.html` as a fallback in case the
container regeneration loop fails; both paths read identical data, so they interleave
harmlessly (the container's 5-min cadence wins between cron runs).

## Mounts and configuration

The Runtipi compose mounts `${APP_DATA_DIR}/data` → `/data` (regenerated output lives here), plus two single-file mounts sourced from the configured Hermes home:

| Container path | Host path | Purpose |
|---|---|---|
| `/data/token_calls.db` | `${HERMES_HOME_HOST_PATH}/token_calls.db` | Per-call recorder DB (written by the token-recorder plugin) |
| `/data/rate_table.yaml` | `${HERMES_HOME_HOST_PATH}/rate_table.yaml` | Pricing/rate table for cost derivation |
| `/data` (parent mount) | `${APP_DATA_DIR}/data` | Regenerated `index.html`; picker-watch jsonl if copied here |

If `token_calls.db` or `rate_table.yaml` are missing (empty **Hermes Home Host Path** in app settings), the regenerator logs errors and the dashboard serves stale output — set the path and update the app.

Both source mounts are **read-only**: the container can never write to the live recorder DB or rate table; only its own output directory is writable.

**Known caveat (single-file mount vs. SQLite journal):** the recorder DB uses `journal_mode=DELETE`, whose rollback journal (`token_calls.db-journal`) is created next to the DB on the host and is *not* visible through the single-file mount. If the recorder process dies mid-transaction, flushed-but-uncommitted pages can be visible to the container's reader for a brief window (until the next host-side DB open rolls the hot journal back). Consequences are bounded: the container only reads (it cannot corrupt anything or interfere with recovery), any phantom rows self-heal on the next Hermes API call, and the worst case is a single 5-minute regeneration cycle with inflated counts. A directory-level mount would expose the journal but would also expose the entire Hermes home (sessions, memory, credentials) to the container — a far worse trade.

| Env var | Default | Purpose |
|---|---|---|
| `HERMES_HOME_HOST_PATH` | *(required, empty)* | Hermes home on this host; sources the two mounts above |
| `TZ` | `UTC` | Timezone for the dashboard timestamps |
| `REFRESH_INTERVAL` | `300` | Seconds between regenerations |

## Notes

This image is pinned to a specific commit SHA. A GitHub Actions workflow in [`cori/token-dashboard`](https://github.com/cori/token-dashboard) builds and pushes the image to `ghcr.io/cori/token-dashboard` on every merge to `main`, and opens a PR to this repo to bump the version automatically.