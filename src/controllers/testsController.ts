import { Request, Response } from "express";
import * as authService from "../services/authService.js";
import * as billService from "../services/billService.js";

export async function deleteAllUsers(req: Request, res: Response) {
  await authService.deleteAll();
  res.sendStatus(200);
}

export async function deleteAllBills(req: Request, res: Response) {
  await billService.deleteAll();
  res.sendStatus(200);
}
