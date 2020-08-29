import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {

  async index(request: Request, response: Response){
    const repository = getRepository(User);
    //specifying fields to not sent sensible informations
    const users = await repository.find({ 
      select: [ 
        "id",
        "email",
        "fullname",
        "phone",
        "username",
        "is_active",
        "is_sup",
        "is_admin",
        "created_at",
        "updated_at"
      ] 
    });

    return response.json(users);
    
  }

  async store(request: Request, response: Response){
    const repository = getRepository(User);
    const { 
      email, 
      password, 
      fullname,
      phone,
      username,
      is_active,
      is_sup,
      is_admin
    } = request.body;
    
    const userExists = await repository.findOne({ 
      where : [
        {
          email,
        }, {
          username,
        }
      ] 
    });
    
    if (userExists){
      return response.sendStatus(409);
    }
    
    const user = repository.create(
      { 
        email, 
        password, 
        fullname,
        phone,
        username,
        is_active,
        is_sup,
        is_admin
      });
    await repository.save(user);
    
    return response.json(user);
  }
}

export default new UserController();