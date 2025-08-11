import express from 'express';
import { createContato } from './contato.controller.js';
const router = express.Router();

router.post('/contato', createContato);

export default router;
