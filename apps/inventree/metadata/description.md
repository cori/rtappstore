# InvenTree

InvenTree is a powerful open-source inventory management system that provides intuitive parts management and stock control for makers, hobbyists, and businesses.

## Features

- **Part Management**: Organize parts with categories, parameters, and custom fields
- **Stock Control**: Track stock locations, quantities, and movements
- **BOM Management**: Multi-level Bill of Materials support with variant tracking
- **Order Management**: Handle purchase orders, sales orders, and build orders
- **Supplier Management**: Maintain supplier information and pricing
- **Barcode Support**: Generate and scan barcodes for parts and stock items
- **Reporting**: Generate labels, test reports, and custom documents
- **Plugin System**: Extend functionality with custom plugins
- **API Access**: Full REST API for integration with other systems
- **Multi-user**: Role-based access control for team collaboration

## Initial Setup

After installation, InvenTree will automatically set up the database and run migrations. If you provided admin credentials during setup, an admin account will be created automatically.

### First Time Setup

1. Access InvenTree through your Runtipi dashboard
2. If you didn't set admin credentials during installation, you'll need to create an admin user manually
3. Log in and configure your organization settings
4. Start adding parts and locations

### Important Notes

- **Database Credentials**: Make sure to change the default database password during installation for security
- **Backup**: Regularly backup your data directory which contains all your inventory data, uploaded files, and media
- **First Startup**: The initial startup may take a few minutes as InvenTree sets up the database and collects static files

## Configuration

All configuration is done through environment variables set during installation. Key settings include:

- Database credentials (required)
- Admin account details (optional, but recommended)
- Plugin settings (enabled by default)
- Auto-update feature (enabled by default)

## Data Persistence

InvenTree stores data in multiple locations:
- Database data (PostgreSQL)
- Uploaded files and media
- Static files for the web interface
- Cache data (Redis)

All data is persisted in the Runtipi data directory and will be preserved across updates.

## Resources

- [Official Documentation](https://docs.inventree.org/)
- [GitHub Repository](https://github.com/inventree/InvenTree)
- [Community Forum](https://groups.google.com/g/inventree)
- [Demo Instance](https://demo.inventree.org/)

## Version

This app uses the 'stable' tag of InvenTree, which tracks the latest stable release.
