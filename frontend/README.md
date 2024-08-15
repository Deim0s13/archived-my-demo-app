# My Demo App

## Frontend Setup

The frontend of My Demo App is a simple React applcation that interacts with the backend API to perform CRUD operations.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- **Backend and Database Services Running**: Ensure that the backend and database container are running, as the frontend relies on the API provided by the backend.

### Installation

1. **Navigat to the frontend directory:**

```bash
cd frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the React application locally:**

```bash
npm start
```

4. **Access the application:**

Open a web browser and navigate to http://localhost:3000. the app should automatically open a new tab with this URL if the default port is available.

### Create a Build

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