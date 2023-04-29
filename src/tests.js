// Tests for interestAccrued method
const interestAccrued = require("./calcInterestAcc").interestAccrued;

const USER1 = [
  {
    id: 1,
    userId: 1,
    txId: 1,
    date: "2023-01-01T08:00:00.000Z",
    balance: 10000,
    amount: 10000,
    type: "deposit",
  },
];

const USER2 = [
  {
    id: 2,
    userId: 2,
    txId: 2,
    date: "2023-01-01T08:00:00.000Z",
    balance: 10000,
    amount: 10000,
    type: "deposit",
  },
  {
    id: 5,
    userId: 2,
    txId: 5,
    date: "2023-01-05T08:00:00.000Z",
    balance: 15000,
    amount: 5000,
    type: "deposit",
  },
];

const USER3 = [
  {
    id: 3,
    userId: 3,
    txId: 3,
    date: "2023-01-01T08:00:00.000Z",
    balance: 10000,
    amount: 10000,
    type: "deposit",
  },
  {
    id: 6,
    userId: 3,
    txId: 6,
    date: "2023-01-05T08:00:00.000Z",
    balance: 5000,
    amount: 5000,
    type: "withdraw",
  },
];

const USER4 = [
  {
    id: 4,
    userId: 4,
    txId: 4,
    date: "2023-01-01T08:00:00.000Z",
    balance: 10000,
    amount: 10000,
    type: "deposit",
  },
  {
    id: 7,
    userId: 4,
    txId: 7,
    date: "2023-01-15T08:00:00.000Z",
    balance: 15000,
    amount: 5000,
    type: "deposit",
  },
  {
    id: 8,
    userId: 4,
    txId: 8,
    date: "2023-01-27T08:00:00.000Z",
    balance: 10000,
    amount: 5000,
    type: "withdraw",
  },
];

const USER5 = [
  {
    id: 9,
    userId: 5,
    txId: 9,
    date: "2023-01-01T08:00:00.000Z",
    balance: 10000,
    amount: 10000,
    type: "deposit",
  },
  {
    id: 10,
    userId: 5,
    txId: 10,
    date: "2023-01-07T08:00:00.000Z",
    balance: 11000,
    amount: 1000,
    type: "deposit",
  },
  {
    id: 11,
    userId: 5,
    txId: 11,
    date: "2023-01-14T08:00:00.000Z",
    balance: 12000,
    amount: 1000,
    type: "deposit",
  },
  {
    id: 12,
    userId: 5,
    txId: 12,
    date: "2023-01-21T08:00:00.000Z",
    balance: 15000,
    amount: 3000,
    type: "deposit",
  },
  {
    id: 13,
    userId: 5,
    txId: 13,
    date: "2023-01-22T08:00:00.000Z",
    balance: 14000,
    amount: 1000,
    type: "withdraw",
  },
];

const USER6 = [];

console.log("Case1 - User1: Total: ", interestAccrued(USER1), "Expected: 16.986301369863014");
console.log("Case2 - User2: Total: ", interestAccrued(USER2), "Expected: 24.383561643835613");
console.log("Case3 - User3: Total: ", interestAccrued(USER3), "Expected: 9.58904109589041");
console.log("Case4 - User4: Total: ", interestAccrued(USER4), "Expected: 20.273972602739725");
console.log("Case5 - User5: Total: ", interestAccrued(USER5), "Expected: 20.602739726027398");
console.log("Case6 - User6: Total: ", interestAccrued(USER6), "Expected: 0");
