# Clawdbot

Clawdbot is a personal AI assistant you run on your own devices. It acts as a gateway connecting your favorite messaging platforms to powerful AI models, giving you a unified AI experience across all your communication channels.

## Features

- **Multi-Channel Support**: Connect WhatsApp, Telegram, Slack, Discord, Signal, and more messaging platforms
- **Multiple AI Providers**: Use Claude (Anthropic), GPT (OpenAI), Gemini (Google), and OpenRouter models
- **Self-Hosted**: Your data stays on your infrastructure - full control over your AI conversations
- **Gateway Architecture**: Central control plane for managing conversations across all channels
- **Voice Support**: Voice capabilities on macOS, iOS, and Android devices
- **Canvas Rendering**: Rich content rendering for supported platforms

## Getting Started

1. **Configure an AI Provider**: Add at least one API key (Anthropic, OpenAI, Gemini, or OpenRouter)
2. **Set Gateway Token**: Generate a secure token with `openssl rand -hex 32`
3. **Add Messaging Channels**: Configure bot tokens for platforms you want to connect
4. **Access Control UI**: The web interface is available at the configured port (18789)

## Configuration

All settings are configured through form fields during installation:

- **API Keys**: Add keys for AI providers you want to use (Claude, GPT, Gemini, OpenRouter)
- **Bot Tokens**: Configure tokens for messaging platforms (Telegram, Discord, Slack)
- **Gateway Token**: Required authentication token for the gateway API

### Generating a Gateway Token

```bash
openssl rand -hex 32
```

## Data Persistence

Clawdbot stores data in two locations:
- **Config directory**: `/home/node/.clawdbot` - Application configuration
- **Workspace directory**: `/home/node/clawd` - Conversation data and files

All data is persisted in the Runtipi data directory and preserved across updates.

## Supported Messaging Platforms

- Telegram (via Bot API)
- Discord (via Bot API)
- Slack (via Socket Mode)
- WhatsApp (via linked device)
- Signal (via linked device)
- Matrix
- Microsoft Teams

## Resources

- [Official Website](https://clawd.bot)
- [GitHub Repository](https://github.com/clawdbot/clawdbot)
- [Documentation](https://clawd.bot/docs)
- [Community Discord](https://discord.gg/clawdbot)
