import { Request, Response } from 'express';
import { getXataClient } from '../xata';
import { UserRecord } from '../server';

// Helper function for sending responses
const sendResponse = (res: Response, status: number, message: string, data?: any) => {
  res.status(status).json({ message, data });
};

// Register user
export const registerUser = async (req: Request<{}, {}, UserRecord>, res: Response): Promise<void> => {
  const { email, password, name, age, city } = req.body;
  const client = getXataClient();

  try {
    const newUser = await client.db.users.create({
      email,
      password, // Storing password directly (not recommended for production)
      name,
      age,
      city,
    });
    sendResponse(res, 201, 'User registered successfully', newUser);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, 'Server error');
  }
};

// Update user
export const updateUser = async (req: Request<{ id: string }, {}, Partial<UserRecord>>, res: Response): Promise<void> => {
  const { id } = req.params;
  const { email, password, name, age, city } = req.body;
  const client = getXataClient();

  try {
    const updatedUser = await client.db.users.update(id, {
      email,
      password, // Updating password directly (not recommended for production)
      name,
      age,
      city,
    });
    sendResponse(res, 200, 'User updated successfully', updatedUser);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, 'Server error');
  }
};

// Get user
export const getUser = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  const { id } = req.params;
  const client = getXataClient();

  try {
    const user = await client.db.users.read(id);
    if (user) {
      sendResponse(res, 200, 'User found', user);
    } else {
      sendResponse(res, 404, 'User not found');
    }
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, 'Server error');
  }
};

// Delete user
export const deleteUser = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  const { id } = req.params;
  const client = getXataClient();

  try {
    await client.db.users.delete(id);
    sendResponse(res, 200, 'User deleted successfully');
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, 'Server error');
  }
};

// Patch user
export const patchUser = async (req: Request<{ id: string }, {}, Partial<UserRecord>>, res: Response): Promise<void> => {
  const { id } = req.params;
  const updates = req.body;
  const client = getXataClient();

  try {
    const updatedUser = await client.db.users.update(id, updates);
    sendResponse(res, 200, 'User updated successfully', updatedUser);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, 'Server error');
  }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const client = getXataClient();

  try {
    const users = await client.db.users.getAll();
    sendResponse(res, 200, 'Users retrieved successfully', users);
  } catch (error) {
    console.error(error);
    sendResponse(res, 500, 'Server error');
  }
};
