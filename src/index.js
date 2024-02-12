// index.js
import express from 'express';
import http from 'http';
import entryRouter from './routes/entry-router.mjs'; 
import userRouter from './routes/user-router.mjs'; 

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.json());

// Routes
app.use('/api/entries', entryRouter); 
app.use('/api/users', userRouter);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to my REST API!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use('/api/entries', entryRouter);
