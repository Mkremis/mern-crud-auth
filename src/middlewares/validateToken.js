import { validateAccessToken } from '../libs/jwt.js';

export const authRequired = async (req, res, next) => {
  // const token = req?.headers?.cookie;
  const { token } = req?.cookies;
  if (!token)
    return res.status(401).json({ message: 'No token, authorization denied!' });
  const user = await validateAccessToken(token);
  if (!user) return res.status(403).json({ message: 'Invalid token!' });
  req.user = user;
  next();
};
//
