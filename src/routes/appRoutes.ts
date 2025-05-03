
import { Router } from 'express';

const router = Router();

router.get('/api', (req, res) => {
  res.json({ message: 'API Route' });
});

export default router;
  