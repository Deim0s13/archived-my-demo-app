# Use an official Node.js image to build the application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application and build it
COPY . .
RUN rpm run build

# Use the offical Nginx image to serve the application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80