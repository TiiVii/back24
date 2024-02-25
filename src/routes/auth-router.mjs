import express from 'express';
import {getMe, postLogin} from '../controllers/auth-controller.mjs';
import {isUserOwner} from '../middlewares/authentication.mjs';

const authRouter = express.Router();

// user login
authRouter.post('/login', postLogin)
  .get('/me', isUserOwner, getMe);

export default authRouter;
