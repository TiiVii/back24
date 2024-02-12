import express from 'express';
import { getEntries, getEntryById, postEntry, putEntry, deleteEntry } from '../controllers/entry-controller.mjs';

const entryRouter = express.Router();

entryRouter.get('/', getEntries);
entryRouter.get('/:id', getEntryById);
entryRouter.post('/:id', postEntry);
entryRouter.put('/:id', putEntry);
entryRouter.delete('/:id', deleteEntry);

export default entryRouter;

