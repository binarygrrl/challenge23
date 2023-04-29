/*
  Warnings:

  - You are about to drop the `BalanceHistoryX` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BalanceHistoryX";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "BalanceHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "txId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "balance" REAL NOT NULL,
    "amount" REAL NOT NULL,
    "type" TEXT NOT NULL
);
