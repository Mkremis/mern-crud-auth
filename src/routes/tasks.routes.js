import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from '../controllers/tasks.controller.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.shcema.js';

const router = Router();

router.use(authRequired);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', validateSchema(createTaskSchema), createTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', updateTask);

export default router;
