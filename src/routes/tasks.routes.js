import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.use(authRequired);
router.get('/tasks', (req, res) => res.send('tasks'));

export default router;
