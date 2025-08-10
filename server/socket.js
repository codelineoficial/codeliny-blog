import { Server } from 'socket.io';

export default function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
  });

  io.on('connection', (socket) => {
    let page = null;
    socket.on('page:connect', (data) => {
      page = data?.page || null;
      if (page) {
        console.log(`Novo usuário conectado na página ${page}: ${socket.id}`);
      } else {
        console.log('Novo usuário conectado:', socket.id);
      }
    });
    // fallback caso não envie o evento
    setTimeout(() => {
      if (!page) {
        console.log('Novo usuário conectado:', socket.id);
      }
    }, 1000);
    socket.on('disconnect', () => {
      if (page) {
        console.log(`Usuário desconectado da página ${page}: ${socket.id}`);
      } else {
        console.log('Usuário desconectado:', socket.id);
      }
    });
  });

  return io;
}
