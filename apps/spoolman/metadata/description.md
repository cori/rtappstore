# Spoolman

Spoolman is a self-hosted web service for managing 3D printer filament spool inventory. It keeps track of your filament spools and their remaining weight, automatically updating as you print.

## Features

- **Spool Management**: Track all your filament spools with detailed information including weight, material type, color, and vendor
- **Automatic Weight Updates**: Integrates with your 3D printer to automatically update spool weights as printing progresses
- **REST API**: Full REST API for third-party integrations and automation
- **Real-time Updates**: WebSocket support for live updates across multiple clients
- **Community Filament Database**: Access a community-maintained database of filament information
- **QR Code Labels**: Print QR code labels for easy spool identification
- **Multi-Printer Support**: Track spool usage across multiple 3D printers simultaneously
- **Prometheus Metrics**: Optional integration for usage analytics and monitoring

## Integrations

Spoolman integrates with popular 3D printing software:

- **Klipper/Moonraker**: Native integration for automatic spool tracking
- **OctoPrint**: Plugin available for OctoPrint users
- **OctoEverywhere**: Cloud printing integration
- **Home Assistant**: Smart home automation integration

## Initial Setup

After installation, Spoolman will be ready to use immediately with a SQLite database.

### First Time Setup

1. Access Spoolman through your Runtipi dashboard
2. Add your filament vendors and materials
3. Create spool entries for your filaments
4. Configure integration with your 3D printer (Klipper/Moonraker or OctoPrint)

### Klipper/Moonraker Integration

To integrate with Moonraker, add the following to your `moonraker.conf`:

```ini
[spoolman]
server: http://spoolman:7912
sync_rate: 5
```

### OctoPrint Integration

Install the Spoolman plugin from the OctoPrint Plugin Manager and configure it with your Spoolman server URL.

## Configuration

All configuration is done through environment variables set during installation:

- **Timezone** (optional) - Timezone for date/time display
- **User ID / Group ID** (optional) - File permission settings for the container
- **Logging Level** (optional) - Control verbosity of application logs
- **Automatic Backup** (optional) - Enable nightly SQLite database backups

## Data Persistence

Spoolman uses SQLite by default and stores all data in the mounted data directory. This includes:

- `spoolman.db` - Main database file
- `backups/` - Automatic backup files (if enabled)

All data is persisted in the Runtipi data directory and will be preserved across updates.

## Resources

- [GitHub Repository](https://github.com/Donkie/Spoolman)
- [Spoolman Wiki](https://github.com/Donkie/Spoolman/wiki)
- [Community Filament Database](https://github.com/Donkie/SpoolmanDB)
- [Moonraker Spoolman Docs](https://moonraker.readthedocs.io/en/latest/configuration/#spoolman)
