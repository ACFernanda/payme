import prisma from "../config/db.js";
import { bills } from "@prisma/client";

export type CreateBillData = Omit<bills, "id">;

export async function findByUserIdMonthAndYear(
  userId: number,
  month: number,
  year: number
) {
  const bills = await prisma.bills.findMany({
    where: {
      OR: [
        { userId, dueMonth: month, dueYear: year },
        { userId, recurrence: true, dueYear: year, dueMonth: { lt: month } },
        { userId, recurrence: true, dueYear: { lt: year } },
      ],
    },
    include: { transactions: { where: { userId } } },
    orderBy: { dueDay: "asc" },
  });
  return bills;
}

export async function findByUserIdAndBillId(userId: number, billId: number) {
  const bill = await prisma.bills.findFirst({
    where: { userId, id: billId },
    include: { transactions: { where: { userId } } },
  });
  return bill;
}

export async function insert(billData: CreateBillData): Promise<void> {
  await prisma.bills.create({
    data: billData,
  });
}

export async function deleteBill(billId: number) {
  await prisma.transactions.deleteMany({ where: { billId: billId } });
  await prisma.bills.delete({
    where: { id: billId },
  });
}

export async function updateEndDate(
  endMonth: number,
  endYear: number,
  billId: number
): Promise<void> {
  await prisma.bills.update({
    where: { id: billId },
    data: { endMonth, endYear },
  });
}
