import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Cadastrar e-mail na newsletter
router.post('/', async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'E-mail inválido' });
  }
  try {
    const existing = await prisma.newsletter.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ error: 'E-mail já cadastrado' });
    }
    await prisma.newsletter.create({ data: { email } });
    res.status(201).json({ message: 'E-mail cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar e-mail', details: error.message });
  }
});

export default router;
