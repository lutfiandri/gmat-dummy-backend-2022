import { Server } from 'socket.io';
import randomGenerator from './randomGenerator.js';

const io = new Server();

io.on('connection', (socket) => {
  console.log('a user connected');

  setInterval(() => {
    const randomLine = randomGenerator();
    socket.broadcast.emit('DATA', randomLine);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

io.listen(5001);
console.log('server started');
