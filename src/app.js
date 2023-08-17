import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(taskRoutes);

export default app;
