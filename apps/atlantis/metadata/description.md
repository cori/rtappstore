# Atlantis

Atlantis is a self-hosted platform for creating and managing Mermaid.js diagrams, notes, and knowledge. Built with Next.js, Tailwind CSS, and Shadcn UI.

## Features

- **Modern Editor**: Split-pane interface with code and live preview
- **Interactive Todo Lists**: Drag-and-drop task management with Markdown backing
- **Full Mermaid Support**: All diagram types supported by Mermaid.js
- **Local Persistence**: SQLite default storage for simplicity
- **Dark/Light Mode**: Automatic theme adaptation
- **Favorites & Search**: Organize and quickly locate diagrams
- **Backup & Restore**: JSON export/import functionality
- **Checkpoints**: Up to 15 recent versions per diagram

## Configuration

Atlantis uses SQLite by default and stores its database in the data volume. No additional configuration is required for basic usage.

### Timezone

Set your timezone using the `TZ` environment variable (e.g., `America/New_York`, `Europe/Berlin`).

## Data Persistence

All data is stored in:
- `/app/data` - Contains the SQLite database (`atlantis.db`)

## Versioning Note

The upstream Atlantis project does not publish semantic version tags. This app uses a pinned commit SHA tag for stability. To update to a newer version, check the [Docker Hub tags](https://hub.docker.com/r/strikead/atlantis/tags) for newer SHA-based tags.

## Resources

- [GitHub Repository](https://github.com/Fantastic-Computing-Machine/atlantis)
- [Mermaid.js Documentation](https://mermaid.js.org/)
