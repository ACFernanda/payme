import prisma from "../config/db.js";
import { transactions } from "@prisma/client";

export type UpdateBillData = Omit<transactions, "id">;

export async function insert(billData: UpdateBillData) {
  await prisma.transactions.create({
    data: billData,
  });
}

export async function deleteTransaction(transactionId: number) {
  await prisma.transactions.delete({
    where: { id: transactionId },
  });
}

export async function findById(transactionId: number) {
  const transaction = await prisma.transactions.findUnique({
    where: { id: transactionId },
  });
  return transaction;
}
