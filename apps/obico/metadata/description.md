# Obico (self-hosted)

Open-source smart 3D printing platform: remote monitor and control your printers from your LAN or the Obico mobile app, with AI failure detection, timelapses, and push notifications — all on your own server.

This Runtipi app runs the official [Obico server](https://github.com/TheSpaghettiDetective/obico-server) using prebuilt images from [gabe565/docker-obico](https://github.com/gabe565/docker-obico), which tracks the upstream release branch.

## Services

- **web** — Django web UI + websocket gateway (port 3334)
- **tasks** — Celery worker for timelapses, notifications, print handling
- **ml-api** — machine-learning failure detection (Darknet/ONNX model)
- **redis** — message broker and state cache

Data (SQLite DB, G-code, timelapses, static assets) persists under the app's data directory.

## Post-install steps

1. Add the Django site: `docker exec <obico-web-container> python manage.py site --add <your-domain>:443` and remove the default `localhost:3334` site (Django admin at `/admin/sites/site/`).
2. Log in at `/admin/` with the default superuser `root@example.com` and change its password immediately.
3. Link printers: install **Obico for Klipper** (`moonraker-obico`) on each Klipper printer (e.g. the Qidi Plus4) or the **Obico for OctoPrint** plugin, then link by discovery or one-time passcode.
4. Point the Obico mobile app to your server URL to use it instead of the cloud.

## Notes

- Email notifications require the optional SMTP form fields; without them, notification emails are disabled (push via the mobile app still works).
- `SITE_USES_HTTPS=True` and CSRF origins are set from the Site Domain field — keep it in sync with the dashboard domain.
- ML failure detection runs locally in the ml-api container (CPU); no GPU required, but inference is faster with one.
