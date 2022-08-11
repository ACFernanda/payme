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

export async function deleteBill(billId: number, userId: number) {
  const bill = await billRepository.findByUserIdAndBillId(userId, billId);

  if (!bill) {
    throw {
      type: "not_found",
      message: `Bill not found!`,
    };
  }

  return await billRepository.deleteBill(billId);
}

export async function createEndDate(billData) {
  const billId = billData.billId;
  const endMonth = billData.endDate.endMonth;
  const endYear = billData.endDate.endYear;
  await billRepository.updateEndDate(endMonth, endYear, billId);
  return;
}
