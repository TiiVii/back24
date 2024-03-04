import express from 'express';
import bcrypt from 'bcryptjs';
import { body } from 'express-validator';
import {
  getUserById,
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.mjs';
import { authenticateToken } from '../middlewares/authentication.mjs';

const userRouter = express.Router();

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(statusCode).json({ error: message });
};

// Attach error handling middleware to the router
userRouter.use(errorHandler);

// /user endpoint
userRouter
  .route('/')
  .get(authenticateToken, getUsers)
  .put(authenticateToken, putUser)
  .post(
    body('username').trim().isLength({ min: 3, max: 20 }).isAlphanumeric(),
    body('password').trim().isLength({ min: 8, max: 128 }),
    body('email').trim().isEmail(),
    postUser
  );

// /user/:id endpoint
userRouter
  .route('/:id')
  .get(authenticateToken, getUserById)
  .delete(authenticateToken, deleteUser);

export default userRouter;