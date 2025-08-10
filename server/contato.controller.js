import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createContato(req, res) {
  try {
    const contato = await prisma.contato.create({
      data: req.body
    });
    res.status(201).json(contato);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar contato', details: error.message });
  }
}
