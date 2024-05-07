import express from 'express';
import { dbConnection } from './Database/dbConnection.js';
import NumberRoutes from './routes/NumberRoutes.js'
import { config } from 'dotenv';
import cors from 'cors';
import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser';


const app = express();
config({ path: './config/config.env' });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    method: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




dbConnection();
app.use('/numbers', NumberRoutes);

app.use(errorMiddleware);
export default app;
