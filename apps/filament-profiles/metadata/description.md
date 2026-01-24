# Filament Profiles

Filament Profiles is a print settings management companion for Spoolman. It helps you track and store optimal print configurations for different filaments across various 3D printer machines.

## Features

- **Print Profile Management**: Track temperatures, pressure advance, flow rates, and speeds for each filament
- **Variant Configurations**: Store different settings per machine and build plate type
- **OrcaSlicer Export**: Export profiles to OrcaSlicer JSON format
- **Spoolman Integration**: Optional integration with Spoolman for filament inventory management
- **REST API**: Programmatic access to all profile data
- **Single-User Design**: Self-hosted application for personal use

## Initial Setup

After installation, Filament Profiles will automatically set up the database and initialize the application.

### First Time Setup

1. Access Filament Profiles through your Runtipi dashboard
2. The application will be ready to use immediately
3. Start creating profiles for your filaments
4. Optionally connect to your Spoolman instance for inventory integration

### Important Notes

- **Database Credentials**: Change the default database password during installation for security
- **Spoolman Integration**: If you use Spoolman, enter its URL in the configuration to link filament data
- **Backup**: Regularly backup your data directory which contains all your profile data

## Configuration

All configuration is done through environment variables set during installation:

- **Database credentials** (required) - PostgreSQL connection settings
- **Spoolman URL** (optional) - URL to your Spoolman instance for inventory integration
- **Timezone** (optional) - Timezone for date/time display

## Data Persistence

Filament Profiles stores data in a PostgreSQL database. All data is persisted in the Runtipi data directory and will be preserved across updates.

## Spoolman Integration

If you have a Spoolman instance running, you can connect Filament Profiles to it:

1. Enter your Spoolman URL in the app configuration (e.g., `http://spoolman:7912`)
2. Filament Profiles will pull filament data from Spoolman
3. You can then create print profiles associated with your Spoolman filaments

## Resources

- [GitHub Repository](https://github.com/cori/filament-profiles)
- [Spoolman Project](https://github.com/Donkie/Spoolman)
