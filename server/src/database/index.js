import { PrismaClient } from '@prisma/client'
import makeCategoryDb from './db.category.js'
import makeTransactionDb from './db.transaction.js'

let client = null

async function makeDb() {
  if (!client) {
    client = new PrismaClient()
  }

  return client
}

async function disconnect() {
  if (client) {
    await client.$disconnect()
  }
}

const transactionDb = makeTransactionDb({ makeDb })
const categoryDb = makeCategoryDb({ makeDb })

export default {
  makeDb,
  disconnect,
  transactionDb,
  categoryDb
}