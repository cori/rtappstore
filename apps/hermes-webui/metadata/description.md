# Hermes WebUI

A lightweight browser interface for [Hermes Agent](https://github.com/nesquena/hermes), providing a three-panel layout with session management, chat, and workspace file browsing. Connects to your existing Hermes Agent gateway so sessions and history are shared with the CLI and other interfaces.

## Features

- Dark-themed web UI with near-complete CLI parity
- Session management and workspace file browser
- Shares sessions/history with your existing Hermes Agent instance
- Compatible with **Hermes Agent Mobile** (iOS app) — set a password to enable

## Configuration

| Field | Description |
|---|---|
| **Hermes Home Host Path** | Absolute path to your Hermes home directory on the Runtipi host (e.g. `/home/youruser/.hermes`). The WebUI image is a thin shell that imports the `hermes-agent` Python package in-process; the directory you point at must contain a `hermes-agent/` subdirectory with the agent source. Required. |
| **Gateway URL** | URL of your already-running Hermes Agent gateway (e.g. `http://192.168.1.10:8642`). Use the **gateway** port (default `8642`), not the **dashboard** port (`9119`). Required. |
| **Gateway API Key** | Bearer token that matches the gateway's `API_SERVER_KEY` (typically set in `~/.hermes/.env` on the gateway host). Required if the gateway enforces auth — without it, sessions and model lists silently come back empty and chat messages fail. |
| **WebUI Password** | Protects this UI with HTTP authentication (separate from the gateway key). Required when connecting from Hermes Agent Mobile. |
| **Default Model** | Override the agent's default model (e.g. `claude-sonnet-4-6`). Leave blank to use the agent's own default. |

### Why the Hermes Home mount is required

Chat messages route over HTTP to the configured gateway, but WebUI sidebars (skills, MCP servers, crons, kanban, plugin visibility) are implemented by importing the `hermes-agent` Python package directly. The published Docker image does not include that package; it expects to find it on a bind-mounted volume at `/home/hermeswebui/.hermes/hermes-agent`. Bind-mounting your existing `~/.hermes` from the host satisfies that requirement and also shares sessions, credentials, and MCP config with your native agent install.

Permissions: the directory must be readable by the UID that owns it on the host. The container auto-detects UID/GID from the mounted directory at startup.

## Usage with Hermes Agent Mobile (iOS)

1. Set a **Password** in the app settings above.
2. In the iOS app, point it at `http://<your-server-ip>:8787` with the password you set.

## Notes

- Your Hermes Agent gateway must be network-reachable from this container (Tailscale, LAN, or Docker network).
- WebUI state (UI preferences, etc.) is persisted to the app data directory; session history lives in the gateway.
