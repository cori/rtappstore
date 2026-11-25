# Changelog

## 0.1.0-beta.2

- Initial Runtipi packaging of the Prusa Connect local server (0.1.0-beta.2).
- Wraps `ghcr.io/prusa3d/prusa-connect:0.1.0-beta.2` (linux/amd64, linux/arm64).
- Publishes host port 8080 for direct printer connections; web UI via Traefik.
- Data persisted in app data directory (`config/`, `data/`, `files/`, `storage/`).
