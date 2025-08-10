import express from 'express';
import { createPost, getPosts, getPost, updatePost, deletePost } from './post.controller.js';

const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/slug/:slug', async (req, res) => {
	try {
		const { slug } = req.params;
		const post = await req.prisma.post.findUnique({ where: { slug } });
		if (!post) return res.status(404).json({ error: 'Post não encontrado' });
		res.json(post);
	} catch (error) {
		res.status(500).json({ error: 'Erro ao buscar post por slug', details: error.message });
	}
});
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
