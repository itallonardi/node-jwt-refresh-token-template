import { Router } from 'express';

import authMiddleware from '../../app/middlewares/authMiddleware';
import aclSupMiddleware from '../../app/middlewares/aclSupMiddleware';

import BookController from '../../app/controllers/BookController';

const tasksRouter = Router();

//GET
tasksRouter.get('/', authMiddleware, aclSupMiddleware, BookController.index);

//POST
tasksRouter.post('/', authMiddleware, BookController.store);

export default tasksRouter;