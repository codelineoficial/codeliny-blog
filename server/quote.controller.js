import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createQuoteRequest(req, res) {
  try {
    const quote = await prisma.quoteRequest.create({
      data: req.body
    });
    res.status(201).json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao salvar orçamento', details: error.message });
  }
}
