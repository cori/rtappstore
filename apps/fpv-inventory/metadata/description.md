# FPV Inventory

A self-hosted web application for tracking your FPV drone parts and components.

## Features

- **Part catalog** — add parts with name, type, manufacturer, and notes
- **Status tracking** — mark parts as unused, in-use, broken, retired, or lost
- **Photo support** — attach photos to parts for easy identification
- **Part history** — view status change history for each part
- **Mobile-friendly** — dark-themed responsive UI that works on phones and tablets
- **No cloud required** — all data stored locally in SQLite

## Usage

After installation, open the app in your browser. Add parts using the **+** button, fill in the details, and optionally upload a photo. Use the status badges to keep track of what's in each build, what's broken, and what's on the shelf.

## Data Storage

- Database: stored in the app data directory as `fpv-inventory.db`
- Photos: stored in the `photos/` subdirectory

## Notes

This image is pinned to a specific commit SHA (`sha-3157f25`) as the upstream project does not publish versioned releases. A GitHub Actions workflow to publish the container image to `ghcr.io/cori/fpv-inventory` is required before this app can be installed — see the [tracking issue](https://github.com/cori/fpv-inventory/issues) for status.
