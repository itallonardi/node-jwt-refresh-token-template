import { Router } from 'express';

import authRouter from './auth';
import usersRouter from './users';
import tasksRouter from './books';

const router = Router();

router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/books', tasksRouter);

export default router;