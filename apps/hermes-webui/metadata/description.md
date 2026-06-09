# Hermes WebUI

A lightweight browser interface for [Hermes Agent](https://github.com/nesquena/hermes), providing a three-panel layout with session management, chat, and workspace file browsing.

## Features

- Dark-themed web UI with near-complete CLI parity
- Session management and workspace file browser
- Compatible with **Hermes Agent Mobile** (iOS app) — set a password to enable
- Supports a default model override per deployment

## Configuration

| Field | Description |
|---|---|
| **Password** | Protects the UI with HTTP authentication. Required when connecting from Hermes Agent Mobile. |
| **Default Model** | Override the agent's default model (e.g. `claude-sonnet-4-6`). Leave blank to use the agent's own default. |

## Usage with Hermes Agent Mobile (iOS)

1. Set a **Password** in the app settings above.
2. In the iOS app, point it at `http://<your-server-ip>:8787` with the password you set.

## Notes

- State and sessions are persisted to the app data directory.
- If you are running Hermes Agent separately, ensure both containers can reach each other on your network.
