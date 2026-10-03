import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { apiRouter } from './routes/api.js';
import { connectDB } from './db/connection.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Initialize Database Connection
connectDB();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Japanese Learning Platform API is operational' });
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`🌸 AniLearn API Server running at http://localhost:${PORT}`);
});

// Graceful termination handlers
const shutdown = () => {
  server.close(() => {
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
