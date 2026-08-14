# cori/rtappstore — Personal Runtipi App Store

A custom app store for [Runtipi](https://runtipi.io) containing apps I use and maintain. This is a personal collection — not an official Runtipi store.

## Repository Structure

```
apps/
├── atlantis/              # Infrastructure as code visualization
├── blinko/                # Note-taking / bookmarking
├── filament-profiles/     # 3D printing filament profiles (cori)
├── flowchart/             # Flowchart/diagram tool (cori)
├── fpv-inventory/         # FPV drone parts inventory (cori)
├── hermes-webui/          # Hermes Agent web UI fork (cori)
├── partdb/                # Electronic parts inventory
├── searxng/               # Privacy-respecting metasearch
├── spoolman/              # Filament spool management
├── whoami/                # Traefik debugging endpoint
└── INDEX.md               # Auto-generated app index (updated on PR merge)
```

## App Index

See [apps/INDEX.md](apps/INDEX.md) for a navigable list of all apps with install links, versions, and categories.

> **Note on categories**: All apps in this store use standard Runtipi categories (e.g., `utilities`, `data`, `ai`, `social`). There is no special `runtipi` category — the `runtipi` tag in the index simply means "valid Runtipi v2 dynamic-config app" (not official endorsement).

## Adding Apps

Each app follows the Runtipi v2 dynamic config schema:

```
apps/{app-id}/
├── config.json           # App metadata (validated against @runtipi/common)
├── docker-compose.json   # Runtipi v2 schema (schemaVersion: 2, dynamic_config: true)
└── metadata/
    ├── description.md
    └── logo.jpg
```

Run `bun test` before committing — tests validate the v2 schema.

## Automation

- **Renovate** monitors Docker image versions and bumps `tipi_version` + `version` automatically
- **GitHub Action** (`.github/workflows/update-index.yml`) updates `apps/INDEX.md` when a PR adds or removes an app directory (not on version bumps)

## License

MIT — see [LICENSE](LICENSE)