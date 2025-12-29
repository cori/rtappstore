# Part-DB

Part-DB is a powerful open-source inventory management system for electronic components. It helps you organize, track, and manage your parts collection with features designed specifically for electronics enthusiasts, makers, and small businesses.

## Features

- **Component Management**: Organize electronic components with categories, footprints, and manufacturers
- **Inventory Tracking**: Track stock levels, locations, and prices for all your parts
- **Datasheet Storage**: Attach datasheets and documents directly to components
- **Multi-location Support**: Manage parts across multiple storage locations and boxes
- **Barcode Support**: Generate and print labels with barcodes for easy scanning
- **BOM Management**: Create and manage Bills of Materials for your projects
- **Part Search**: Powerful search functionality to quickly find components
- **Statistics & Reports**: View inventory statistics and generate reports
- **Multi-user Support**: User management with role-based permissions
- **Attachments**: Store images, datasheets, and other files with parts
- **Price Tracking**: Track purchase prices and calculate total inventory value
- **Import/Export**: Import parts from CSV and export data for backup

## Initial Setup

After installation, Part-DB will automatically set up the database and initialize the application.

### First Time Setup

1. Access Part-DB through your Runtipi dashboard
2. On first access, you'll be prompted to create an initial admin account
3. Log in with your admin credentials
4. Configure your organization settings and preferences
5. Set up storage locations and categories
6. Start adding your electronic components

### Important Notes

- **Database Credentials**: Make sure to change the default database password during installation for security
- **Base Currency**: The base currency setting cannot be changed after initial setup, so choose carefully
- **Backup**: Regularly backup your data directory which contains all your component data, attachments, and uploads
- **First Startup**: The initial startup may take a minute or two as Part-DB sets up the database schema

## Configuration

All configuration is done through environment variables set during installation. Key settings include:

- **Database credentials** (required) - MySQL/MariaDB connection settings
- **Default language** (optional) - Interface language (en, de, ru, fr, etc.)
- **Default timezone** (optional) - Timezone for date/time display
- **Base currency** (optional) - Currency for price tracking (cannot be changed later!)

## Data Persistence

Part-DB stores data in multiple locations:
- Database data (MySQL/MariaDB)
- Uploaded files and attachments
- Public media files
- Application cache and temporary files

All data is persisted in the Runtipi data directory and will be preserved across updates.

## Tips for Getting Started

1. **Create Categories**: Start by setting up categories for your components (e.g., Resistors, Capacitors, ICs)
2. **Set Up Locations**: Define your storage locations (shelves, drawers, boxes)
3. **Add Footprints**: Create common footprints you use (e.g., 0805, DIP-8, SOIC-16)
4. **Configure Units**: Set up measurement units for quantities
5. **Import Parts**: Use CSV import if you have an existing inventory list

## Resources

- [Official Documentation](https://docs.part-db.de/)
- [GitHub Repository](https://github.com/Part-DB/Part-DB-server)
- [Community Discussions](https://github.com/Part-DB/Part-DB-server/discussions)
- [Issue Tracker](https://github.com/Part-DB/Part-DB-server/issues)

## Version

This app uses the 'latest' tag of Part-DB, which tracks the most recent stable release.
