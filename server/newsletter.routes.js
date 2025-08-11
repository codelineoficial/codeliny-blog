import express from 'express';
const router = express.Router();

// Rota placeholder para evitar erro de importação
router.get('/', (req, res) => {
  res.json({ message: 'Newsletter API funcionando!' });
});

export default router;
