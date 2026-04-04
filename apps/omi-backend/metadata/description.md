# Omi Backend

[Omi](https://www.omi.me) is an open-source AI wearable that captures conversations, extracts memories, and integrates with multiple AI models. This app provides the self-hosted backend that powers the Omi mobile and web clients.

## Features

- **Real-time audio transcription** via WebSocket pipeline (Deepgram STT)
- **Conversation management** — storage, search, and encryption
- **Memory extraction** with semantic search (RAG)
- **Multi-model AI chat** — OpenAI, Anthropic, Groq, OpenRouter
- **Integrations** — Notion, Google Calendar, Todoist, and more
- **Developer API** with webhook support

## ⚠️ Important: Build the Docker Image First

The omi backend does not publish a public Docker image. You must build it from source before installing this app:

```bash
# Clone the repository
git clone https://github.com/BasedHardware/omi.git
cd omi

# Build and tag the image (run on the Runtipi host)
docker build -f backend/Dockerfile -t omi-backend:0.11.224 backend/
```

## Required External Services

Before installing, you need:

1. **Firebase project** with Firestore enabled — [console.firebase.google.com](https://console.firebase.google.com)
2. **Google Cloud service account** with Firestore + GCS permissions
3. **Deepgram account** for speech-to-text — [deepgram.com](https://deepgram.com)
4. **OpenAI account** for LLM processing — [platform.openai.com](https://platform.openai.com)

## Google Service Account Setup

Create a service account in Google Cloud Console with these roles:
- Cloud Datastore User (Firestore)
- Storage Admin (GCS buckets)

Download the JSON key file and base64-encode it:

```bash
base64 -w 0 service-account.json
```

Paste the result into the **Google Service Account JSON (base64)** field.

## Optional Services

- **Anthropic API Key** — enables Claude models
- **Groq API Key** — enables fast Groq inference
- **Pinecone** — enables vector search for memories (requires index setup)

## API Endpoints

The backend exposes:
- `GET /health` — health check
- `WS /v4/listen` — real-time audio transcription
- `GET/POST /v1/conversations` — conversation CRUD
- `GET/POST /v3/memories` — memory management
- `POST /v2/messages` — AI chat
- Full API documentation available in the [omi repository](https://github.com/BasedHardware/omi/tree/main/backend)
