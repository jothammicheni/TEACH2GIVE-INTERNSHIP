import express, { Express } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/route';
import { notFoundHandler, errorHandler } from './middlewares/errorHandlers';

dotenv.config();

const app: Express = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Define UserRecord based on your schema
export interface UserRecord {
    email: string;
    password: string;
    name: string;
    age: number;
    city: string;
}

// Use the routes
app.use('/', userRoutes);

// Error handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});