import { Server } from 'socket.io';
import { createServer } from 'http';
import randomGenerator from './randomGenerator.js';

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');

  setInterval(() => {
    const randomLine = randomGenerator();
    socket.emit('DATA', randomLine);
    // console.log(randomLine);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

httpServer.listen(process.env.PORT || 5000);
console.log('server started');
