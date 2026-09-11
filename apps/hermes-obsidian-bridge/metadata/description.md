# Hermes Obsidian Bridge

A thin OpenAI-compatible proxy in front of the Hermes `api_server`. Designed to be pointed
at from any client that speaks OpenAI chat-completions (Copilot for Obsidian, Text Generator,
Local GPT, Open WebUI, curl scripts).

## What it adds

- **Session continuity.** Pass `X-Session-Id` and the bridge forwards it; conversations resume
  across separate HTTP calls instead of starting a fresh session every time.
- **Vault RAG.** Send `X-Obsidian-Note-Path` and the bridge reads the current note + today's
  daily + this week's review from the Obsidian Local REST API and prepends them as context.
- **Cost routing.** Prompts shorter than `CHEAP_MODEL_CHAR_THRESHOLD` go to `CHEAP_MODEL`;
  longer ones go to `STRONG_MODEL`. Explicit `model` in the request body is always respected.

## Install

Install via the Runtipi dashboard. Required field: `API_SERVER_KEY` (the bearer token for
the Hermes `api_server` — must match the value on the gateway host's `~/.hermes/.env`).

## Wire to Obsidian

Any OpenAI-compatible community plugin works. Recommended: **Copilot for Obsidian**, with
base URL `http://hermes-obsidian-bridge.407.lol/v1` and any string as the API key.

## Image source

Image is built and hosted at `forge.407.lol/cori/hermes-obsidian-bridge` (local Forgejo).
Source repo: https://github.com/cori/hermes-obsidian-bridge.
