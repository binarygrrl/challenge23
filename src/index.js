const express = require("express");
const { PrismaClient } = require("@prisma/client");
const interestAccrued = require("./calcInterestAcc").interestAccrued;
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Get all records for balance history
app.get(`/getAllBalances`, async (req, res) => {
  // Find All Records
  const balances = await prisma.balanceHistory.findMany();
  console.log(balances);

  res.json(balances);
});

// Get all balance history for userId
app.get(`/getBalanceListByUser/:userId`, async (req, res) => {
  const { userId } = req.params;
  const balanceRecord = await prisma.balanceHistory.findMany({
    where: { userId: Number(userId) },
    orderBy: { date: "asc" },
  });
  res.json(balanceRecord);
});

// Get last balance listed for userId
app.get(`/getCurrentBalanceByUser/:userId`, async (req, res) => {
  const { userId } = req.params;
  const balanceRecord = await prisma.balanceHistory.findMany({
    where: { userId: Number(userId) },
    orderBy: { date: "desc" },
    take: 1,
  });
  res.json(balanceRecord);
});

// Get monthly interest accrued for userId
app.get(`/getMonthlyInterestAccrued/:userId`, async (req, res) => {
  const { userId } = req.params;
  const balanceRecord = await prisma.balanceHistory.findMany({
    where: { userId: Number(userId) },
    orderBy: { date: "asc" },
  });

  let total = interestAccrued(balanceRecord);
  res.json(total);
});

// Stub methods for createRecord and interestAccrued logging
// app.post(`/createRecord`, async (req, res) => {...}
// app.post(`/interestAccrued`, async (req, res) => {...}

const server = app.listen(3000, () =>
  console.log(`Server ready at: http://localhost:3000`)
);
