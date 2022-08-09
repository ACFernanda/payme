/*
  Warnings:

  - Changed the type of `dueDay` on the `bills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dueMonth` on the `bills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dueYear` on the `bills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dueDay` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dueMonth` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dueYear` on the `transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "bills" DROP COLUMN "dueDay",
ADD COLUMN     "dueDay" INTEGER NOT NULL,
DROP COLUMN "dueMonth",
ADD COLUMN     "dueMonth" INTEGER NOT NULL,
DROP COLUMN "dueYear",
ADD COLUMN     "dueYear" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "dueDay",
ADD COLUMN     "dueDay" INTEGER NOT NULL,
DROP COLUMN "dueMonth",
ADD COLUMN     "dueMonth" INTEGER NOT NULL,
DROP COLUMN "dueYear",
ADD COLUMN     "dueYear" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "transactions_billId_userId_value_dueDay_dueMonth_dueYear_pa_key" ON "transactions"("billId", "userId", "value", "dueDay", "dueMonth", "dueYear", "paid");
