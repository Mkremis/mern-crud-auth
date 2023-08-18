import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
  const { username, email, password } = req?.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      res.status(400).json({ error: ['The email is already in use'] });

    const hashedPwd = await bcryptjs.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPwd,
    });
    const savedUser = await newUser.save();
    const token = await createAccessToken({ id: savedUser._id });
    res.cookie('token', token);
    return res.status(200).json({
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req?.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ error: ['User not found!'] });
    const isMatch = await bcryptjs.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ error: ['Invalid credentials!'] });
    const token = await createAccessToken({ id: userFound._id });
    res.cookie('token', token);
    return res.status(200).json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
  try {
  } catch (error) {}
  res.send('login page');
};

export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0),
  });
  res.sendStaus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) res.status(400).json({ error: ['User not found!'] });
  return res.status(200).json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
