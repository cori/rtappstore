# InvenTree

InvenTree is an open-source Inventory Management System (IMS) which provides intuitive parts management and stock control.

It is designed to be lightweight and easy to use for SME or hobbyist applications.

## Features

- **Organize Parts**: Structure your parts into categories and keep track of stock levels.
- **Stock Control**: Manage stock items, locations, and serialization.
- **Build Management**: Track bill of materials (BOM) and build orders.
- **Purchase Orders**: Manage suppliers and purchase orders.
- **Sales Orders**: Manage customers and sales orders.
- **Reporting**: Generate reports and labels.

## Initial Setup

After installation, the application might take a few moments to initialize the database and static files. 

If the Admin account created during installation does not work immediately, you may need to create a superuser manually by accessing the console of the \`inventree-server\` container:

1. Open the app settings in RunTipi.
2. Open the terminal for the app (or SSH into your server).
3. Run the following command:

   \`\`\`bash
   docker exec -it inventree-server invoke superuser
   \`\`\`
