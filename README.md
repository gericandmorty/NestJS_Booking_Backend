# 🏨 NestJS Booking Backend

A high-performance, containerized booking backend built with **NestJS**, **Prisma**, and **Supabase (Postgres)**.

## 🚀 Features
- **Authentication & User Management**: Secure user creation with DTO validation.
- **Prisma 6 Integration**: Modern ORM with custom generation and Supavisor pooling support.
- **Docker Ready**: Multi-stage Docker build optimized for production.
- **Architecture**: Scalable module-based architecture with clean dependency injection.

---

## 🛠️ Prerequisites
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- [Node.js 20+](https://nodejs.org/) (for local development)
- [Supabase](https://supabase.com/) project

---

## ⚙️ Environment Configuration
Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
# Transactional pooling (port 6543) for the app
DATABASE_URL="postgresql://[user]:[password]@[host]:6543/postgres?pgbouncer=true"
# Direct connection (port 5432) for migrations
DIRECT_URL="postgresql://[user]:[password]@[host]:5432/postgres"
```

---

## 🐳 Running with Docker (Recommended)

Docker handles all your setup automatically. Here are the **essential commands**:

### 1. Start everything
```bash
docker compose up --build -d
```
*   **`--build`**: (Crucial) Recompile the code and re-install any new dependencies.
*   **`-d`**: Runs in the background (detached mode).

### 2. Check logs 
```bash
docker logs -f nest_backend
```

### 3. Stop everything
```bash
docker compose down
```

---

## 🛠️ Local Development

### Installation
```bash
npm install
```

### Prisma Commands
```bash
# Generate Prisma Client
npx prisma generate

# Create and apply migrations
npx prisma migrate dev --name <migration_name>

# Open Prisma Studio (Database UI)
npx prisma studio
```

### Running the App
```bash
# Watch mode
npm run start:dev

# Production build
npm run build
npm run start:prod
```

---

## 📡 API Endpoints (Current)

### Users
- `POST /users`: Create a new user (requires `email` and `password`).
- `GET /users`: Retrieve all users.
- `GET /users/:id`: Retrieve a specific user.
- `PATCH /users/:id`: Update a user.
- `DELETE /users/:id`: Remove a user.

---

## 📝 License
This project is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
