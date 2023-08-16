import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req?.body;
    const hashedPwd = await bcryptjs.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPwd,
    });
    const savedUser = await newUser.save();
    const token = await createAccessToken(savedUser._id);
    res.cookie("token", token);
    res.status(200).res.json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {}
  res.send("login page");
};
