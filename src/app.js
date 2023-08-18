import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import { corsOptions } from './config/corsOptions.js';

const app = express();
dotenv.config();

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('MERN CRUD API');
});

app.use(authRoutes);
app.use(taskRoutes);

export default app;
