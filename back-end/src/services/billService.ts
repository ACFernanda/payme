import { CreateBillData } from "../repositories/billRepository.js";
import { UpdateBillData } from "../repositories/transactionRepository.js";
import * as billRepository from "../repositories/billRepository.js";
import * as transactionRepository from "../repositories/transactionRepository.js";

export async function create(billData: CreateBillData) {
  await billRepository.insert(billData);
  return;
}

export async function getBills(userId: number) {
  const bills = await billRepository.findByUserId(userId);
  return bills;
}

export async function updateBill(billData: UpdateBillData) {
  await transactionRepository.insert(billData);
  return;
}
