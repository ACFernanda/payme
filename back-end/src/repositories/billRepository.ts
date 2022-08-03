import prisma from "../config/db.js";
import { bills } from "@prisma/client";

export type CreateBillData = Omit<bills, "id">;

export async function findByUserId(userId: number) {
  const bills = await prisma.bills.findMany({
    where: { userId },
    include: { transactions: { where: { userId } } },
  });
  return bills;
}

export async function insert(billData: CreateBillData) {
  await prisma.bills.create({
    data: billData,
  });
}
