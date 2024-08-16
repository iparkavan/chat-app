import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import authRoutes from './routes/auth-routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const databaseURL = process.env.DATABASE_URL as string
// const nextURL = process.env.ORIGIN as string

// app.use(
//   cors({
//     origin:[process.env.ORIGIN as string],
//     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//     credentials: true
//   })
// )

app.use(cors());

app.use(express.json())

app.use('/api/auth', authRoutes)

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose.connect(databaseURL).then(() => console.log("Database Connected Successfully")).catch(err => console.log(err.message));

 