import { Request, Response } from "express";
import { CreateBillData } from "../repositories/billRepository";
import { UserTokenInfo } from "../repositories/authRepository.js";

import * as billService from "./../services/billService.js";

export async function getBills(req: Request, res: Response) {
  const user: UserTokenInfo = res.locals.user;
  const bills = await billService.getBills(user.id);
  res.status(200).send(bills);
}

export async function createBill(req: Request, res: Response) {
  const bill = req.body;
  const user: UserTokenInfo = res.locals.user;
  const billData: CreateBillData = { ...bill, userId: user.id };

  await billService.create(billData);
  res.sendStatus(201);
}

export async function updateBill(req: Request, res: Response) {}

export async function deleteBill(req: Request, res: Response) {}
