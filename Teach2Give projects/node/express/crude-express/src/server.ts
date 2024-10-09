// server.ts

import express, { Response, Request, Express } from 'express';
import dotenv from 'dotenv';
import { getXataClient } from './xata'; // Adjust the import path if necessary

dotenv.config();

const app: Express = express();
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 3000; // Default port if not specified

// Define interfaces for the request bodies
interface RegisterRequest {
    email: string;
    password: string;
    name: string;
}

interface UpdateUserRequest {
    email?: string;
    password?: string;
    name?: string;
}

// POST request for user registration
app.post('/register', async (req: Request<{}, {}, RegisterRequest>, res: Response) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        res.status(400).json({ message: 'All fields are required' });
    }

    const client = getXataClient();

    try {
        await client.db.users.create({
            email,
            password, // Store the hashed password
            name
        });

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET request to retrieve all users
app.get('/users', async (req: Request, res: Response) => {
    const client = getXataClient();

    try {
        const users = await client.db.users.getAll(); // Adjust based on your database client
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET request to retrieve user information by ID
app.get('/users/:id', async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const client = getXataClient();

    try {
        const user = await client.db.users.read(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT request to update user information
app.put('/users/:id', async (req: Request<{ id: string }, {}, UpdateUserRequest>, res: Response) => {
    const { id } = req.params;
    const { email, password, name } = req.body;

    const client = getXataClient();

    try {
        const updatedUser = await client.db.users.update(id, {
            email,
            password, // Update with hashed password
            name
        });

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PATCH request to partially update user information
app.patch('/users/:id', async (req: Request<{ id: string }, {}, UpdateUserRequest>, res: Response) => {
    const { id } = req.params;
    const updates: UpdateUserRequest = req.body;

    const client = getXataClient();

    try {
        const updatedUser = await client.db.users.update(id, updates);
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE request to remove a user
app.delete('/users/:id', async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const client = getXataClient();

    try {
        await client.db.users.delete(id);
        res.status(204).send(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
