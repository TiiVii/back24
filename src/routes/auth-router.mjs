import express from 'express';
import { loginUser } from './controllers/authController';

const authRouter = express.Router();

// POST /api/auth/login - User login
authRouter.post('/login', loginUser);

export default authRouter;
