import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import {
  deleteUserById,
  insertUser,
  listAllUsers,
  selectUserById,
  updateUserById,
} from '../models/user-model.mjs';

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  // Handle specific errors or set a default status code
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(statusCode).json({ error: message });
};

const getUsers = async (req, res) => {
  const result = await listAllUsers();
  if (result.error) {
    throw new Error(result.error);
  }
  return res.json(result);
};

const getUserById = async (req, res) => {
  const result = await selectUserById(req.params.id);
  if (result.error) {
    throw new Error(result.error);
  }
  return res.json(result);
};

const postUser = async (req, res, next) => {
  const { username, password, email } = req.body;
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const error = new Error('Validation failed');
    error.status = 422;
    error.errors = validationErrors.array();
    throw error;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await insertUser({
      username,
      email,
      password: hashedPassword,
    }, next);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const putUser = async (req, res, next) => {
  const userId = req.user.user_id;
  const { username, password, email } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  if (userId && username && password && email) {
    try {
      const result = await updateUserById({
        userId,
        username,
        password: hashedPassword,
        email,
      });
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  } else {
    const error = new Error('Bad request');
    error.status = 400;
    throw error;
  }
};

const deleteUser = async (req, res) => {
  const result = await deleteUserById(req.params.id);
  if (result.error) {
    throw new Error(result.error);
  }
  return res.json(result);
};

export { getUsers, getUserById, postUser, putUser, deleteUser, errorHandler };