import { CreateBillData } from "../repositories/billRepository.js";
import { UpdateBillData } from "../repositories/transactionRepository.js";
import * as billRepository from "../repositories/billRepository.js";
import * as transactionRepository from "../repositories/transactionRepository.js";

export async function create(billData: CreateBillData) {
  await billRepository.insert(billData);
  return;
}

export async function getBills(userId: number, month: number, year: number) {
  const bills = await billRepository.findByUserIdMonthAndYear(
    userId,
    month,
    year
  );
  return bills;
}

export async function getBill(userId: number, billId: number) {
  const bill = await billRepository.findByUserIdAndBillId(userId, billId);
  return bill;
}

export async function updateBill(billData: UpdateBillData) {
  await transactionRepository.insert(billData);
  return;
}

export async function deleteBill(transactionId: number, userId: number) {
  const transaction = await transactionRepository.findById(transactionId);

  if (!transaction) {
    throw {
      type: "not_found",
      message: `Transaction not found!`,
    };
  }

  if (transaction.userId !== userId) {
    throw {
      type: "unauthorized",
      message: `Transaction not from user!`,
    };
  }

  await transactionRepository.deleteBill(transactionId);
  return;
}
