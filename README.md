# My Demo App

My Demo App is a simple web application that demonstrates basic CRUD operations using a node.js backend, a PostgreSQL database, and a React frontend (to be added). the application is containerised using Podman and managed with Docker Compose.

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Docker Compose
- Podman

## Project Structure

my-demo-app/
|---backend/                # Contains the Node.js backend code
    |---index.js            # Main application file for the backend
    |---package.json        # Node.js dependencies
    |---Dockerfile          # Dockerfile for building the backend container
|---.env                    # Environment variables for Docker Compose
|---docker-compose.yaml     # Configuration for Docker Compose
|---README.md               # Project Documentation

## Setup and Installation

1. **Clone the respository**

```bash
git clone https://github.com/Deim0s13/my-demo-app.git
cd my-demo-app
```

2. **Set up environment variables**

Create a .env file in the root directory of the project with the following content:

POSTGRES_USER=<your-db-username>
POSTGRES_PASSWORD=<your-db-password>
POSTGRES_DB=mydemoapp<your-db-name>

3. **Start the application**

User Docker Compose to build and run the contaiers:

``` bash
podman-compose up --build
```

4. **Verify the setup:**

Once the services are up and running, test the backend by accessing http://localhost:3000/items in your browser or using 'curl'

## API Endpoints

The backend provides the following API endpoints:

1. **GET /items**
   - **Description:** Retrieves the list of all items.
   - **Example:**
     ```bash
     curl http://localhost:3000/items
     ```

2. **POST /items**
   - **Description:** Creates a new item.
   - **Example:**
     ```bash
     curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name":"New Item"}'
     ```

3. **DELETE /items/:id**
   - **Description:** Deletes an item by its ID.
   - **Example:**
     ```bash
     curl -X DELETE http://localhost:3000/items/1
     ```
