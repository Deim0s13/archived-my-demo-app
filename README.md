# My Demo App

My Demo App is a simple web application that demonstrates basic CRUD operations using a node.js backend, a PostgreSQL database, and a React frontend.

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Docker Compose
- Podman

### Prerequisites

- Podman
- Node.js
- npm (Node Package Manager)
- PostgreSQL
- **Backend and Database Services Running**: Ensure that the backend and database container are running, as the frontend relies on the API provided by the backend.

## Development Environment (Podman)

During development, I have used Podman to containerise the application and run all services locally.

The following outlines my Development Environment Configuration

### VS Code Plugins

I decided to use VS Code and to help build my-demo-app I have the below listed plugins installed.

- Docker
- YAML
- ESLint
- Prettier - Code Formatter
- Python
- GitLens

## Setup and Installation

I have pushed the images to Quay and used a Red Hat PostgreSQL image and therefore you need to ensure you're logged in to both before creating the build.

```bash
podman login quay.io
```

Provide your 'username' and 'password'

```bash
podman loging registry.redhat.io
```

Provide your 'username' and 'password' alternatively using a service account.

1. **Clone the respository**

```bash
git clone https://github.com/Deim0s13/my-demo-app.git
cd my-demo-app
```

2. **Set up environment variables**

Create a .env file in the root directory of the project with the following content:

```env
POSTGRES_USER="your-db-username"
POSTGRES_PASSWORD="your-db-password"
POSTGRES_DB="your-db-name"
```

### Create a Build

Before progressing to creating a build, refer to the backend and frontend README files and ensure those steps have been completed and are in place.

1. **Create build:**

Run the following command to create an optimised build of the React applicaiton:

```bash
npm run build
```

This will generate static files in a build/ directory, which are optimised for performance and ready for deployment.

2. **Serve the build:**

The build is served by Nginx when the container is run. To simulate this:
    - Use Podman to build and run the container that serves the build:

```bash
podman-compose up --build
```

3. **Access the application:**

The application will be accessible at http://localhost:8080 in your local environment.
