import jwt from "jsonwebtoken";
import { addUser, getUser, validateUser } from "../db/auth.js";

function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

// auth.js
export const register = async (req, res, next) => {
  const { username, password } = req.body;

  const user = getUser({ username });

  if (user) {
    return res.status(400).json({ message: "user already exists" });
  }

  addUser({ username, password });

  const token = generateAccessToken({ username: username });
  return res.status(200).json({ token });
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  const isValid = validateUser({ username, password });

  if (isValid) {
    const token = generateAccessToken({ username: username });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "invalid credentials" });
};
