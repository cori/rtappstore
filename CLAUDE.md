# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical Requirement: Dynamic Config Only

**This repository uses ONLY Runtipi v2 dynamic configuration. The legacy/static format is NOT supported.**

- Every app MUST use `docker-compose.json` (v2 schema), NOT `docker-compose.yml`
- Every app MUST set `"dynamic_config": true` in config.json
- Every app MUST set `"schemaVersion": 2` in docker-compose.json
- **All changes MUST pass `bun test` before committing** - tests validate the v2 schema

Do not use or reference the old Runtipi format (YAML docker-compose, static config). If you encounter documentation or examples showing the legacy format, ignore them.

## Project Overview

This is a custom app store template for the **Runtipi** self-hosted application platform. It defines containerized applications that can be deployed through Runtipi's app store system.

## Commands

```bash
bun install          # Install dependencies
bun test             # Run validation tests (required before committing)
```

## Adding a New App

Each app requires this exact structure in `apps/{app-id}/`:

```
apps/{app-id}/
├── config.json           # App metadata (validated against @runtipi/common schema)
├── docker-compose.json   # Runtipi v2 schema (NOT standard docker-compose)
└── metadata/
    ├── description.md    # User-facing documentation
    └── logo.jpg          # App icon
```

### config.json Required Fields

- `name`, `id`, `author`, `version`, `short_desc`, `description`
- `port` - external port for the app
- `categories` - array of category strings
- `supported_architectures` - typically `["arm64", "amd64"]`
- `tipi_version` - integer, increment on each update
- `dynamic_config: true` - **MANDATORY, must always be true**
- `created_at`, `updated_at` - timestamps in milliseconds
- `form_fields` - array of user-configurable fields (can be empty)

### docker-compose.json Schema (Runtipi v2 - ONLY supported format)

This is **NOT** standard docker-compose YAML. It's Runtipi's JSON format. Never use YAML or the legacy schema:

```json
{
  "schemaVersion": 2,
  "services": [
    {
      "name": "service-name",
      "image": "image:tag",
      "isMain": true,
      "internalPort": "8080",
      "environment": [
        { "key": "VAR_NAME", "value": "${VAR_NAME}" }
      ],
      "volumes": [
        { "hostPath": "${APP_DATA_DIR}/data", "containerPath": "/data" }
      ]
    }
  ]
}
```

Key differences from standard docker-compose:
- `environment` is an array of `{key, value}` objects, not a map
- `volumes` uses `hostPath`/`containerPath` objects
- Template variables: `${APP_DATA_DIR}`, `${TZ}`, `${PUID}`, `${PGID}`, and custom `${VAR}` from form_fields

## Automation

Renovate bot monitors docker image versions and runs `scripts/update-config.ts` on updates, which:
- Increments `tipi_version`
- Updates `version` field
- Updates `updated_at` timestamp

## Reference

- Runtipi dynamic compose docs: https://runtipi.io/docs/reference/dynamic-compose
- App store guide: https://runtipi.io/docs/guides/create-your-own-app-store
