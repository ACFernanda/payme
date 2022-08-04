/*
  Warnings:

  - A unique constraint covering the columns `[billId,userId,value,dueDay,dueMonth,dueYear,paid]` on the table `transactions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "transactions_billId_userId_value_dueDay_dueMonth_dueYear_pa_key" ON "transactions"("billId", "userId", "value", "dueDay", "dueMonth", "dueYear", "paid");
