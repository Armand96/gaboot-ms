# Use Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files first
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application (for TypeScript projects)
RUN npm run build

# Expose the port on which the application will run
# EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]
