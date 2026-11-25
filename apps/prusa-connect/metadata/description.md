# Prusa Connect (Local)

Prusa Connect you run yourself. A single Go binary with the web app inside: printers dial this server on your own network, and you get the fleet view, live print progress, remote start/pause/stop, print files and a web UI — no Prusa cloud account, no data leaving your network.

> **Beta.** This is the 0.x public beta. Configuration, the API and the extension SDK can change between releases. Back up the app data directory before upgrading.

## Printer support

- **Prusa printers** (built-in driver): CORE One / CORE One L / INDX, MK4 / MK4S, MK3.9 / MK3.5 (incl. S variants), XL, MINI. Requires recent firmware (6.x).
- **Other makers**: via driver extensions. An example Moonraker (Klipper) driver ships in the upstream repo; the server talks to printers through a driver SDK, so Creality/Marlin-class printers would need a community driver.

## How printers connect

Printers dial **this server directly** — they do not go through the Traefik reverse proxy. The app publishes host port **8080** for them.

1. Open the web UI, go to **Add printer**, and it generates `prusa_printer_settings.ini` with this server's address filled in.
2. Put the file on a USB drive, insert it into the printer, then **Settings → Network → Prusa Connect → Load Settings**.
3. Approve the printer on the Add Printer page when it shows up with a code.

## First run

The first launch prints a one-time setup code to the container log (`docker logs` or the Runtipi logs view). Open the web UI and enter it to create the admin account. The code works once; a restart prints a new one.

## Storage

Everything lives in the app data directory: the SQLite database and authorization graph (`config/`), print files (`files/`), uploaded/sliced files (`storage/`) and application state (`data/`). Without an explicit `config.yaml` in the `config/` directory the server runs on built-in defaults (SQLite, port 8080, web UI enabled). To customize, drop a `config.yaml` into the `config/` directory and restart the app — see the upstream docs for all keys.

## Notes

- The web UI is served behind Traefik on the app's domain; the raw port 8080 is also published on the host for printer traffic.
- The container runs read-only as uid 10001 with all capabilities dropped.
- The server checks for extension-marketplace updates and app upgrades over the internet; set `core.marketplace.enabled: false` / `core.upgrade.enabled: false` in `config.yaml` to switch those off.

## Links

- [GitHub repository](https://github.com/prusa3d/prusa-connect)
- [Container image docs](https://github.com/prusa3d/prusa-connect/blob/main/docs/src/content/docs/container.md)
