import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

export default async function aclSupMiddleware(
  request: Request, 
  response: Response, 
  nextFunction: NextFunction
  )
{

  const requesterUserId = request.userId;

  try {

    const user = await getRepository(User).findOne({
      where: { id: requesterUserId }
    });

    const {
      is_sup: userIsSup,
      is_admin: userIsAdmin
    } = user!;

    if (userIsSup || userIsAdmin){
      return nextFunction();
    }

    return response.sendStatus(401);

  } catch(err) {
    return response.sendStatus(401);
  }
    
};