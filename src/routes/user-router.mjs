import express from 'express';
import bcrypt from 'bcryptjs';
import {authenticateToken} from '../middlewares/authentication.mjs';
import { body } from 'express-validator';
import {
  getUserById,
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.mjs';
import { errorHandler, validationErrorHandler } from '../middlewares/error-handler.mjs';

const userRouter = express.Router();

// Attach error handling middleware to the router
userRouter.use(errorHandler);

// /user endpoint
userRouter
  .route('/')
  .get(authenticateToken, getUsers)
  .put(
    authenticateToken,
    (req, res, next) => {
      putUser(req, res, next); // Pass next to putUser
    }
  )
  .post(
    body('username').trim().isLength({ min: 3, max: 20 }).isAlphanumeric(),
    body('password').trim().isLength({ min: 8, max: 128 }),
    body('email').trim().isEmail(),
    validationErrorHandler,
    (req, res, next) => {
      postUser(req, res, next); // Pass next to postUser
    }
  );

// /user/:id endpoint
userRouter
  .route('/:id')
  .get(
    authenticateToken,
    (req, res, next) => {
      getUserById(req, res, next); // Pass next to getUserById
    }
  )
  .delete(
    authenticateToken,
    (req, res, next) => {
      deleteUser(req, res, next); // Pass next to deleteUser
    }
  );

export default userRouter;
