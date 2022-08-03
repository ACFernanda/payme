import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  CreateUserData,
  findByEmail,
  insert,
} from "../repositories/authRepository.js";

const SALT = 10;

export async function signUp(userData: CreateUserData) {
  userData.email = userData.email.toLowerCase();
  const { name, email, password } = userData;
  const checkEmail = await findByEmail(email);
  if (checkEmail)
    throw {
      type: "conflict",
      message: "E-mail already register",
    };

  userData.password = await bcrypt.hash(password, SALT);
  await insert(userData);
}

export async function signIn(userData: CreateUserData) {
  const { name, email, password } = userData;

  const user = await findByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw {
      type: "unauthorized",
      message: "Wrong email or password",
    };

  const token = jwt.sign({ id: user.id, name, email }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60 * 24 * 30,
  });

  return token;
}
