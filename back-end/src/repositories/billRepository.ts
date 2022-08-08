import prisma from "../config/db.js";
import { bills } from "@prisma/client";

export type CreateBillData = Omit<bills, "id">;

export async function findByUserIdMonthAndYear(
  userId: number,
  month: string,
  year: string
) {
  const bills = await prisma.bills.findMany({
    where: {
      OR: [
        { userId, dueMonth: month, dueYear: year },
        { userId, recurrence: true, dueYear: year, dueMonth: { gte: month } },
        { userId, recurrence: true, dueYear: { gt: year } },
      ],
    },
    include: { transactions: { where: { userId } } },
    orderBy: { dueDay: "asc" },
  });
  return bills;
}

export async function insert(billData: CreateBillData): Promise<void> {
  await prisma.bills.create({
    data: billData,
  });
}
