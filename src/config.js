import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB;
export const TOKEN_SECRET = process.env.SECRET_KEY || 'secret';

export const FRONTEND_URL =
  process.env.FRONTEND_URL ||
  'https://vitejsvite5wa6kp-gi3j--5173--ba0db7b1.local-credentialless.webcontainer.io';
