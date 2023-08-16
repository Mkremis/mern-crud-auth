import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const createAccessToken = async (payload) => {
  await jwt.sign(
    { id: payload },
    TOKEN_SECRET,
    { expiresIn: "1d" },
    (err, token) => {
      if (err) console.log(err);
      console.log(token);
      return token;
    }
  );
};
