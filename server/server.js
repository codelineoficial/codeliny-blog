
import express from 'express';
import http from 'http';
import cors from 'cors';
import setupSocket from './socket.js';
import postRoutes from './post.routes.js';
import contatoRoutes from './contato.routes.js';
import newsletterRoutes from './newsletter.routes.js';
import { PrismaClient } from '@prisma/client';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Middleware para injetar prisma em req
const prisma = new PrismaClient();
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});
app.use('/api/posts', postRoutes);
app.use('/api/contato', contatoRoutes);
app.use('/api/newsletter', newsletterRoutes);

setupSocket(server);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
