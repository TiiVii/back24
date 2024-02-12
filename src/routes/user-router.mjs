import express from 'express';
import {
    getUsers,
    getUserById,
    postUser,
    putUser,
    postLogin,
    deleteUser
} from '../controllers/user-controller.mjs';

const userRouter = express.Router();

// Define routes and connect them to the appropriate handlers
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', postUser);
userRouter.put('/:id', putUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/login', postLogin);

export default userRouter;