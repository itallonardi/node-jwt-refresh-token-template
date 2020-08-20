import dotenv from 'dotenv';

dotenv.config(); 

const jwtSecret = process.env.JWT_SECRET!;

export { jwtSecret };