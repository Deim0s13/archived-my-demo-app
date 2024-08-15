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
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── .env
├── docker-compose.yaml
└── README.md

## Environments

### Development Environment

During development, we use Podman to containerize the application and run all services locally.

1. **Start the application:**

   - Run the following command from the root of the project:
     ```bash
     podman-compose up --build
     ```

2. **Access the application:**

   - **Frontend:** `http://localhost:8080`
   - **Backend API:** `http://localhost:3000/items`

3. **Development Workflow:**

   - Any changes made to the frontend or backend code will require rebuilding the containers to reflect those changes in the running environment:

     ```bash
     podman-compose up --build
     ```

### Simulating Non-Production Environment (CRC)

The application can be deployed to a CRC cluster to simulate a non-production environment.

1. **Deploy the application:**
   - Push your container images to a container registry accessible by your CRC environment.
   - Create the necessary Kubernetes or OpenShift resources (e.g., Deployment, Service, Route) to deploy your application.

2. **Access the application:**
   - The application will be accessible through the routes defined in your OpenShift or Kubernetes setup.

3. **Testing and Validation:**
   - Use this environment to conduct more thorough testing, such as load testing, integration testing with other services, and validating the behavior of your application in a more production-like setting.

### Simulating Production Environment (ROSA)

When the application is ready for simulating production, it can be deployed to a ROSA cluster.

1. **Deploy the application:**
   - Use CI/CD pipelines to automate the deployment process, ensuring that the production environment always reflects the latest stable code.
   - Apply best practices for security, such as using OpenShift Secrets to manage sensitive information, and configure scaling policies.

2. **Monitor and Maintain:**
   - Use OpenShift's monitoring and logging tools to keep track of the application's performance and quickly address any issues.

3. **Access the application:**
   - The application will be available through a production-ready route, secured with SSL/TLS.

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
