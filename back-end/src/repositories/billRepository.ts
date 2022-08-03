import prisma from "../config/db.js";
import { bills, transactions } from "@prisma/client";

export type CreateBillData = Omit<bills, "id">;
export type UpdateBillData = Omit<transactions, "id">;

export async function findById(id: number) {
  const bills = await prisma.bills.findMany({
    where: { userId: id },
    select: { transactions: { where: { userId: id } } },
  });
  return bills;
}

export async function insert(billData: CreateBillData) {
  await prisma.bills.create({
    data: billData,
  });
}
