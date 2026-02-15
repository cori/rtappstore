# Blinko

Blinko is an open-source, self-hosted personal AI note-taking tool built with privacy in mind. It combines quick note capture with powerful AI-driven search using RAG (Retrieval-Augmented Generation) to help you find and connect your ideas using natural language.

## Features

- **AI-Powered Search**: Use natural language to search across all your notes via RAG technology
- **Markdown Support**: Full Markdown editing with live preview
- **Quick Notes**: Rapidly capture fleeting thoughts and ideas
- **Multi-Platform**: Access via web, macOS, Windows, Android, and Linux clients (built with Tauri)
- **Self-Hosted**: Complete control over your data with no external dependencies
- **Privacy First**: All data stays on your server
- **File Attachments**: Attach images and files to your notes
- **Tags & Organization**: Organize notes with tags and categories
- **Sharing**: Share individual notes via public links
- **API Access**: RESTful API for integrations and automation

## Initial Setup

After installation, Blinko will be ready to use immediately.

### First Time Setup

1. Access Blinko through your Runtipi dashboard
2. Create your account on first visit
3. Start capturing notes and ideas

### AI Features

Blinko supports connecting to various AI providers (OpenAI, Ollama, etc.) for enhanced search and note interactions. Configure your preferred AI provider in the Blinko settings after installation.

## Configuration

- **NextAuth Secret** (required) - A random string used to secure user sessions. Change this from the default value.
- **Database Password** (required) - Password for the PostgreSQL database. Change this from the default value.

## Data Persistence

Blinko stores data in two locations:

- **PostgreSQL database** - All notes, user data, and metadata
- **App data directory** - Uploaded files and attachments

All data is persisted in the Runtipi data directory and will be preserved across updates.

## Resources

- [GitHub Repository](https://github.com/blinkospace/blinko)
- [Documentation](https://docs.blinko.com)
- [Community Discussions](https://github.com/blinkospace/blinko/discussions)
