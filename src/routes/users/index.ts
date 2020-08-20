import { Router } from 'express';

import authMiddleware from '../../app/middlewares/authMiddleware';
import aclAdminMiddleware from '../../app/middlewares/aclAdminMiddleware';

import UserController from '../../app/controllers/UserController';

const usersRouter = Router();

//GET
usersRouter.get('/', authMiddleware, UserController.index);
//POST
usersRouter.post('/', authMiddleware, aclAdminMiddleware, UserController.store);

export default usersRouter;