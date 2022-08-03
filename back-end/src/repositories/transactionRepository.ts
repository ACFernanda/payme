import prisma from "../config/db.js";
import { transactions } from "@prisma/client";

export type UpdateBillData = Omit<transactions, "id">;

export async function insert(billData: UpdateBillData) {
  await prisma.transactions.create({
    data: billData,
  });
}
