import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { jwtSecret } from '../../utils/env';
import User from '../models/User';

class UserController {
  async authenticate(request: Request, response: Response){

    const deviceType = request.headers.devicetype;

    const { email, password } = request.body;

    const repository = getRepository(User);

    const user = await repository.findOne({ where: { email } });
    if (!user){
      return response.sendStatus(401);
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword){
      return response.sendStatus(401);
    }

    if (!user.is_active){
      return response.sendStatus(401);
    }
    
    const generateNewToken = () => {

      if (deviceType === 'MOBILE') {
        const token = jwt.sign({ id: user.id, deviceType }, jwtSecret, { expiresIn: '180d' });
        return token;
      }

      const token = jwt.sign({ id: user.id, deviceType: 'UNKNOWN' }, jwtSecret, { expiresIn: '2d' });
      return token;

    }

    const token = generateNewToken();
    
    delete user.password;
    return response.json({
      user,
      token
    });
    
  }

  async registration(request: Request, response: Response){

    const repository = getRepository(User);

    const { 
      email, 
      password, 
      fullname,
      phone,
      username
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
      return response.sendStatus(409); //409 == conflict
    }
    
    const user = repository.create(
      { 
        email, 
        password, 
        fullname,
        phone,
        username
      });
    await repository.save(user);

    delete user.password;
    
    return response.json(user);
  }
}

export default new UserController();