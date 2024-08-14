# My Demo App

## Backend Setup

This section describes how the backend of the "my-demo-app" is set up.

### Prerequisites

- Node.js
- Podman
- PostgreSQL

### Installation

Navigate to the backend directory:

```bash
cd backend
```

Install the required dependencies:

```bash
npm install
```

### Running the Backend

Build the Docker image:

```bash
podman build -t my-demo-backend .
```

Run the container:

```bash
podman run -d -p 3000:3000 my-demo-backend
```

### API Endpoints

The backend API provides the following endpoints for managing items:

1. **GET /items**

   - **Description:** Retrieves the list of all items.
   - **Request:** No parameters required.
   - **Response:** 
     - `200 OK` - Returns a JSON array of items.
     - Example Response:
       ```json
       [
         {
           "id": 1,
           "name": "Item 1",
           "createdAt": "2024-08-14T00:00:00.000Z",
           "updatedAt": "2024-08-14T00:00:00.000Z"
         },
         {
           "id": 2,
           "name": "Item 2",
           "createdAt": "2024-08-14T00:00:00.000Z",
           "updatedAt": "2024-08-14T00:00:00.000Z"
         }
       ]
       ```

2. **POST /items**

   - **Description:** Creates a new item.
   - **Request Body:** 
     - A JSON object containing the `name` of the item.
     - Example:
       ```json
       {
         "name": "New Item"
       }
       ```
   - **Response:** 
     - `201 Created` - Returns the created item as a JSON object.
     - Example Response:
       ```json
       {
         "id": 3,
         "name": "New Item",
         "createdAt": "2024-08-14T00:00:00.000Z",
         "updatedAt": "2024-08-14T00:00:00.000Z"
       }
       ```

3. **DELETE /items/:id**

   - **Description:** Deletes an item by its ID.
   - **Request Parameters:**
     - `id` (path parameter) - The ID of the item to be deleted.
   - **Response:** 
     - `204 No Content` - Indicates that the item was successfully deleted.
   - No response body.

### Example Usage

- **Retrieving all items:**

  ```bash
  curl -X GET http://localhost:3000/items
  ```

  ### Environment Variables

  This project uses environment variables to manage sensitive information such as database credentials

  1. Create a `.env` file in the `backend` folder.
  2. Add the following variables to the `.env` file:

  ```env
  DB_USER=<your-db-username>
  DB_PASSWORD=<your-db-password>
  DB_NAME=<your-db-name>
  DB_HOST=<your-db-hostname>
  DB_PORT=<your-db-port>
  ```
  