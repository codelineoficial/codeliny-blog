import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getPosts(req, res) {
  try {
    const posts = await prisma.post.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar posts', details: error.message });
  }
}

export async function getPost(req, res) {
  try {
    const post = await prisma.post.findUnique({ where: { id: req.params.id } });
    if (!post) return res.status(404).json({ error: 'Post não encontrado' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar post', details: error.message });
  }
}

export async function createPost(req, res) {
  try {
    const post = await prisma.post.create({ data: req.body });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar post', details: error.message });
  }
}

export async function updatePost(req, res) {
  try {
    const post = await prisma.post.update({ where: { id: req.params.id }, data: req.body });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar post', details: error.message });
  }
}

export async function deletePost(req, res) {
  try {
    await prisma.post.delete({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar post', details: error.message });
  }
}
