import express from 'express';
import { createQuoteRequest } from './quote.controller.js';
const router = express.Router();

router.post('/', createQuoteRequest);

export default router;
