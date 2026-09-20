# InvenTree

InvenTree is an open-source inventory management system for parts, components, and stock control. It provides hierarchical categories, BOM management, supplier tracking, build orders, custom fields, a REST API, and a mobile app with barcode scanning.

## Features

- **Parts Management**: Hierarchical categories, custom fields, part images, datasheet attachments
- **Stock Control**: Multi-location stock tracking, serialized items, stock history
- **BOM Management**: Multi-level BOMs with substitutions, BOM import/export
- **Build Orders**: Consume stock to build assemblies, track build progress
- **Supplier Management**: Multi-vendor pricing, supplier part URLs, purchase orders
- **REST API**: Full CRUD API for integration with external tools
- **Mobile App**: iOS/Android with barcode scanning
- **Plugin System**: 50+ community plugins for integrations and custom workflows

## Setup

On first launch, InvenTree runs database migrations and creates the admin account from the form fields. This can take 1-2 minutes. The server is ready when the health check passes.

## Usage

Ideal for tracking electronic components, CNC tooling, consumables, PCB materials, and any physical inventory that needs structured organization with supplier links and BOM support.