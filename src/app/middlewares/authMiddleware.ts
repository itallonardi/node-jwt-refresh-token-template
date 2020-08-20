import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../../utils/env';
import { getRepository } from 'typeorm';

import User from '../models/User';
import DeniedToken from '../models/DeniedToken';

interface TokenPayLoad {
  id: string;
  iat: number;
  exp: string;
  deviceType: string;
}

export default async function authMiddleware(
  request: Request, 
  response: Response, 
  nextFunction: NextFunction
  )
{

  const { authorization } = request.headers;

  if (!authorization){
    return response.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();

  const data = () => {
    try {
      const data = jwt.verify(token, jwtSecret);
      return data;
    } catch(err) {
      return {};
    }
  };

  if ( !data() ) {
    return response.sendStatus(401);
  }

  const { id, iat, deviceType } = data() as TokenPayLoad;

  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { id } });

  if (!user){
    return response.sendStatus(401);
  }

  if (!user.is_active){
    return response.sendStatus(401);
  }

  const deniedTokenRepository = getRepository(DeniedToken);
  const deniedTokenExists = await deniedTokenRepository.findOne({
    where: { token } 
  });
  
  if( deniedTokenExists ) {
    return response.sendStatus(401);
  }

  const currentTimestamp = Date.now() / 1000 | 0;
  const timeElapsedInSeconds = currentTimestamp - iat;

  const sentNewToken = async() => {

    //86400 seconds = 1 day
    if (deviceType === 'UNKNOWN' && timeElapsedInSeconds > 86400) {
      
      const revokedToken = deniedTokenRepository.create({ token, tokenOwner: { id } });
      await deniedTokenRepository.save(revokedToken);
      
      const newToken = jwt.sign({ id: user.id, deviceType: 'UNKNOWN' }, jwtSecret, { expiresIn: '2d' });

      return newToken;
    }

    //7776000 = 90 days  
    if (deviceType === 'MOBILE' && timeElapsedInSeconds > 7776000) {

      const revokedToken = deniedTokenRepository.create({ token, tokenOwner: { id } });
      await deniedTokenRepository.save(revokedToken);

      const newToken = jwt.sign({ id: user.id, deviceType }, jwtSecret, { expiresIn: '180d' });
      
      return newToken;
    }
    
    return undefined;

  }

  const newToken = await sentNewToken();

  if (newToken){
    console.log(newToken);
    request.newToken = newToken;
  }

  request.userId = id;
  return nextFunction();
    
};