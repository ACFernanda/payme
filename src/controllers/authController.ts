import { Request, Response } from "express";

import { CreateUserData } from "../repositories/authRepository.js";
import * as authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
  const body: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  } = req.body;
  const userData: CreateUserData = {
    name: body.name,
    email: body.email,
    password: body.password,
  };
  await authService.signUp(userData);
  res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
  const userData: { email: string; password: string } = req.body;
  const response = await authService.signIn(userData);
  res.status(200).send(response);
}
