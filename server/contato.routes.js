import express from 'express';
import { createContato } from './contato.controller.js';

const router = express.Router();

router.post('/', createContato);

export default router;
