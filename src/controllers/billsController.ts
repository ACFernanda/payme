import { Request, Response } from "express";

import { CreateBillData } from "../repositories/billRepository.js";
import { UpdateBillData } from "../repositories/transactionRepository.js";
import { UserTokenInfo } from "../repositories/authRepository.js";

import * as billService from "../services/billService.js";

export async function getBills(req: Request, res: Response) {
  const user: UserTokenInfo = res.locals.user;
  const month = parseInt(req.params.month);
  const year = parseInt(req.params.year);
  const bills = await billService.getBills(user.id, month, year);
  res.status(200).send(bills);
}

export async function getBill(req: Request, res: Response) {
  const user: UserTokenInfo = res.locals.user;
  const billId = parseInt(req.params.id);
  const bill = await billService.getBill(user.id, billId);
  res.status(200).send(bill);
}

export async function createBill(req: Request, res: Response) {
  const bill = req.body;
  const user: UserTokenInfo = res.locals.user;
  const billData: CreateBillData = { ...bill, userId: user.id };

  await billService.create(billData);
  res.sendStatus(201);
}

export async function updateBill(req: Request, res: Response) {
  const bill = req.body;
  const billId = parseInt(req.params.id);
  const user: UserTokenInfo = res.locals.user;
  const billData: UpdateBillData = { ...bill, userId: user.id, billId };

  await billService.updateBill(billData);
  res.sendStatus(201);
}

export async function deleteBill(req: Request, res: Response) {
  const billId = parseInt(req.params.billId);
  const user: UserTokenInfo = res.locals.user;

  await billService.deleteBill(billId, user.id);
  res.sendStatus(201);
}

export async function createEndDate(req: Request, res: Response) {
  const endDate: { endMonth: number; endYear: number } = req.body;
  const billId = parseInt(req.params.id);
  const user: UserTokenInfo = res.locals.user;
  const billData = { endDate, userId: user.id, billId };

  await billService.createEndDate(billData);
  res.sendStatus(201);
}
