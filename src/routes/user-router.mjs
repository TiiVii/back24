import express from 'express';
import {
  getUserById,
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.mjs';
import {isUserOwner} from '../middlewares/authentication.mjs';


// eslint-disable-next-line new-cap
const userRouter = express.Router();

// /user endpoint
userRouter
  // eslint-disable-next-line indent
  .route('/')
  // list users
  .get(isUserOwner, getUsers)
  // update user
  .put(isUserOwner, putUser)
  // user registration
  .post(postUser);

// /user/:id endpoint
userRouter
  .route('/:id')
  // get info of a user
  .get(isUserOwner, getUserById)
  // delete user based on id
  .delete(isUserOwner, deleteUser);

export default userRouter;
