# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Copy the prisma directory so we can generate the client
COPY prisma ./prisma/ 

# Install ALL dependencies
RUN npm install

# Generate the Prisma Client
RUN npx prisma generate

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install ONLY production dependencies
RUN npm install --only=production

# Copy the generated Prisma client folders from the build stage
# (This is crucial: it prevents "Prisma Client not found" errors in Docker)
COPY --from=build /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /usr/src/app/node_modules/@prisma/client ./node_modules/@prisma/client

# Copy built NestJS files from build stage
COPY --from=build /usr/src/app/dist ./dist

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "dist/main.js"]
