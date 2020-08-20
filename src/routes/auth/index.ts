import { Router } from 'express';

import AuthController from '../../app/controllers/AuthController';

const authRouter = Router();

authRouter.post ('/', AuthController.authenticate);
//POST - public
authRouter.post('/registration', AuthController.registration);

export default authRouter;