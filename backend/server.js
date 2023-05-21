import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server is ready!');
});
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});