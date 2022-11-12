import { Server } from 'socket.io';
import { createServer } from 'http';
import randomGenerator from './randomGenerator.js';

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  setInterval(() => {
    const randomLine = randomGenerator();
    socket.emit('DATA', randomLine);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

httpServer.listen(5001);
console.log('server started');
