# Tedee Bridge API

## Overview

The Tedee Bridge API provides a robust interface for controlling paired devices in your local network. This API, exposed over HTTP, offers comprehensive features to interact with Tedee Locks and Bridges, ensuring easy integration and efficient control.

## Contibution
If you think that there are some areas that should be improved or extended please let us know by creating an [issue](https://github.com/tedee-com/tedee-bridge-api/issues).
However, we also highly encourage you to contribute to this repo, wheather you want to add some description, guide or provide a sample code.

### Documentation specification

The documentation is:
- written in [Markdown](https://www.markdownguide.org/basic-syntax/)
- generated using [Redoc](https://redocly.com/redoc/) and [OpenAPI](https://swagger.io/specification/)

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

### How to start

1. **Clone the Repository**: First, clone the repository to your local machine using `git clone https://github.com/tedee-com/tedee-bridge-api.git`.

2. **Open Terminal**: Navigate to the root directory of this repository using your terminal or command prompt.

3. **Install http-server**:
    - Run `npm install live-server -g` to install a simple, zero-configuration command-line HTTP server.
    - This step requires Node.js and npm (Node Package Manager) to be installed on your machine.

4. **Start the Server**:
    - Within the root directory of the repository, execute the command `live-server`.
    - This will start a local web server to serve the project files.

5. **Access the Application**:
    - After running `live-server`, app will be available at `http://localhost:8080/bridge-api.`
    - Open this link in your web browser to view and interact with the project.

### Next Steps

- After successfully launching the project, you can start exploring the codebase.
- Feel free to make modifications and test them in real-time using the local server.


## Features

- **Bridge Management**: Obtain detailed information about the state and connectivity of your Tedee Bridge.
- **Lock Operations**: Control and monitor Tedee Locks paired with the Tedee Bridge. Features include locking, unlocking, and retrieving lock status.
- **Callback Servers (Webhooks)**: Implement webhooks for real-time updates and notifications.
- **API Versioning**: Ensure compatibility and leverage the latest features with well-documented versioning.

## Getting Started

Refer to the `Getting Started` guide for initial setup and basic operations. Essential information on authentication, lock synchronization, and operation is provided to help you seamlessly integrate the API into your application.

## Authentication

Secure access to the API is ensured through token-based authentication. Follow the `Authenticate` section for detailed steps on obtaining and using authentication tokens.

## Key API Endpoints

- `/bridge`: Manage and retrieve information about your Tedee Bridge.
- `/lock`: List and manage Tedee Locks. Detailed endpoints are available for lock operations like locking, unlocking, and status retrieval.
- `/callback`: Configure webhooks to receive real-time updates about various events. Detailed documentation is available under the `Webhook` section.

## Further Information

For additional information, refer to the `Useful links` section. Stay updated with the latest changes and improvements in the `Release Notes`.

## Contact

For support or queries, please contact us at support@tedee.com.

## Version

Current API version: 1.2

---

This documentation is part of the Tedee API suite, designed to provide a seamless and efficient experience for developers working with Tedee products.

