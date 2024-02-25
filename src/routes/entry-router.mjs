import express from 'express';
import {
  getEntries,
  getEntryById,
  postEntry,
  putEntry,
  deleteEntry,
} from '../controllers/entry-controller.mjs';
import {isEntryOwner} from '../middlewares/authentication.mjs';

const entryRouter = express.Router();

entryRouter.route('/').get(isEntryOwner, getEntries).post(postEntry);

entryRouter.route('/:id').get(isEntryOwner, getEntryById).put(putEntry).delete(deleteEntry);

export default entryRouter;

