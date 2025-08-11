// Controller para salvar dados do formulário de contato no MongoDB via Prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createContato(req, res) {
  try {
    const { name, email, phone, company, service, budget, message } = req.body;
    const contato = await prisma.contato.create({
      data: { name, email, phone, company, service, budget, message }
    });
    res.status(201).json(contato);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar contato', details: error.message });
  }
}
