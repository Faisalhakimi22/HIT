# HIT Platform

An AI-powered marketplace connecting Afghanistan's domestic market with international buyers and sellers.

## Project Structure

```
HIT_Project/
├── backend/          # Node.js / Express API
│   ├── src/
│   │   ├── index.js  # Server entry point
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   └── routes/
│   │       └── authRoutes.js
│   ├── package.json
│   └── .env.example
│
├── frontend/         # React + Vite client
│   ├── src/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts
│   ├── index.html
│   └── package.json
└── README.md         # This file
```

## Prerequisites

- Node.js **v18+**
- npm **v9+** (bundled with Node)
- MongoDB running locally (or provide a remote URI)

## Getting Started

### 1. Clone & Install Dependencies

```bash
# In project root
npm install --prefix backend     # Backend deps
npm install --prefix frontend    # Frontend deps
```

### 2. Environment Variables

Copy `.env.example` to `.env` inside `backend/` and adjust values as needed:

```bash
cp backend/.env.example backend/.env
```

| Variable      | Description                            |
|---------------|----------------------------------------|
| `PORT`        | Backend server port (default **5000**) |
| `MONGODB_URI` | MongoDB connection string              |
| `JWT_SECRET`  | Secret key for signing JWTs            |

### 3. Running the Application

**Backend**

```bash
cd backend
npm run dev   # uses nodemon for hot-reload
```
The API is served at `http://localhost:5000`.

**Frontend**

```bash
cd frontend
npm run dev
```
The app runs at `http://localhost:3000` and proxies `/api` calls to the backend.

### 4. Core API Endpoints

| Method | Endpoint                | Description                 |
|--------|-------------------------|-----------------------------|
| GET    | `/api`                  | Health check & welcome msg  |
| POST   | `/api/auth/register`    | Register new user           |
| POST   | `/api/auth/login`       | Login & receive JWT         |

> Explore using tools like Postman or cURL.

### 5. Scripts Reference

Backend:
- `npm run dev` – start server with nodemon
- `npm start`   – start server without nodemon
- `npm run gen:diagrams` – generate SVG diagrams from Mermaid files to `diagrams/`
- `npm run watch:mermaid` – watch Mermaid `.txt` files and regenerate diagrams on change

Frontend:
- `npm run dev`     – Vite dev server (localhost:3000)
- `npm run build`   – production build (output in `dist/`)
- `npm run preview` – preview built site locally

### 6. Folder Conventions

- **models/** – Mongoose schemas
- **controllers/** – Request handlers / business logic
- **routes/** – Express routers mounted in `src/index.js`
- **src/** (frontend) – React components & code

### 7. Extending the Platform

This starter lays the groundwork for the larger HIT architecture. Next steps you might tackle:

1. Add protected routes & JWT middleware.
2. Implement product and order models/APIs.
3. Integrate payment and logistics services.
4. Build out the React UI with routing, state management, and offline capabilities.

---

Made with ❤️  for a connected Afghan marketplace. 