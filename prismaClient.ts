import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // Create new records - Seed database
    const record1 = await prisma.balanceHistory.create({
        data: {
            id: 1,
            userId: 1,
            txId: 1,
            date: "2023-01-01T08:00:00.000Z",
            balance: 10000,
            amount: 10000,
            type: "deposit"
        }
    })

    const record2 = await prisma.balanceHistory.create({
        data: {
            id: 2,
            userId: 2,
            txId: 2,
            date: "2023-01-01T08:00:00.000Z",
            balance: 10000,
            amount: 10000,
            type: "deposit",
        }
    })

    const record3 = await prisma.balanceHistory.create({
        data: {
            id: 3,
            userId: 3,
            txId: 3,
            date: "2023-01-01T08:00:00.000Z",
            balance: 10000,
            amount: 10000,
            type: "deposit",
        }
    })

    const record4 = await prisma.balanceHistory.create({
        data: {
            id: 4,
            userId: 4,
            txId: 4,
            date: "2023-01-01T08:00:00.000Z",
            balance: 10000,
            amount: 10000,
            type: "deposit",
        }
    })

    const record5 = await prisma.balanceHistory.create({
        data: {
            id: 5,
            userId: 2,
            txId: 5,
            date: "2023-01-05T08:00:00.000Z",
            balance: 15000,
            amount: 5000,
            type: "deposit",
        }
    })

    const record6 = await prisma.balanceHistory.create({
        data: {
            id: 6,
            userId: 3,
            txId: 6,
            date: "2023-01-05T08:00:00.000Z",
            balance: 5000,
            amount: 5000,
            type: "withdraw",
        }
    })
    
    const record7 = await prisma.balanceHistory.create({
        data: {
            id: 7,
            userId: 4,
            txId: 7,
            date: "2023-01-15T08:00:00.000Z",
            balance: 15000,
            amount: 5000,
            type: "deposit",
        }
    })
    
    const record8 = await prisma.balanceHistory.create({
        data: {
            id: 8,
            userId: 4,
            txId: 8,
            date: "2023-01-27T08:00:00.000Z",
            balance: 10000,
            amount: 5000,
            type: "withdraw",
        }
    })
    
    // Find All Records
    const balances = await prisma.balanceHistory.findMany()
    console.log(balances)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })


