import { CreateBillData } from "../repositories/billRepository.js";
import * as billRepository from "../repositories/billRepository.js";

export async function create(billData: CreateBillData) {
  await billRepository.insert(billData);
  return;
}

export async function getBills(userId: number) {
  const bills = await billRepository.findByUserId(userId);
  return bills;
}
