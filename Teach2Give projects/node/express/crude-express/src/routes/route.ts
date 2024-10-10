import express from 'express';
import { registerValidator, updateUserValidator } from '../middlewares/validator';
import { registerUser, updateUser, getUser, deleteUser, patchUser, getAllUsers } from '../controllers/userController'


const router = express.Router();

router.post('/register', registerValidator, registerUser);
router.put('/users/:id', updateUserValidator, updateUser);
router.get('/users/:id', getUser);
router.delete('/users/:id', deleteUser);
router.patch('/users/:id', updateUserValidator, patchUser);
router.get('/users', getAllUsers);

export default router;