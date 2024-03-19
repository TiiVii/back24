// Main JS file
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import { errorHandler, notFoundHandler } from './src/middlewares/error-handler.mjs';
import itemRouter from './src/routes/item-router.mjs';
import userRouter from './src/routes/user-router.mjs';
import entryRouter from './src/routes/entry-router.mjs';
import authRouter from './src/routes/auth-router.mjs';
import cors from 'cors';


const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

// Staattinen sivusto palvelimen juureen (public-kansion sisältö näkyy osoitteessa http://127.0.0.1:3000/sivu.html)
app.use(express.static('public'));

// Staattinen sivusto voidaan tarjoilla myös "ali-url-osoitteessa": http://127.0.0.1:3000/sivusto
// Tarjoiltava kansio määritellään relatiivisella polulla (tässä käytössä sama kansio kuin yllä).
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/sivusto', express.static(path.join(__dirname, '../public')));

// Test RESOURCE /items endpoints (just mock data for testing, not connected to any database)
app.use('/items', itemRouter);

// bind base url (/api/entries resource) for all entry routes to entryRouter
app.use('/api/entries', entryRouter);

// Users resource (/api/users)
app.use('/api/users', userRouter);

// authentication
app.use('/api/auth', authRouter);

// Default 404
app.use(notFoundHandler);
// For all errors
app.use(errorHandler);

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});