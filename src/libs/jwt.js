import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: '1d' }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

export const validateAccessToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, TOKEN_SECRET, {}, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};
