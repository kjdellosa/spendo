import database from '../../database/index.js'
import mailer from '../../mailer/index.js'

import makeGetTransaction from './uc.get-transaction.js'
import makeCreateTransaction from './uc.create-transaction.js'
import makeUpdateTransaction from './uc.update-transaction.js'
import makeDeleteTransaction from './uc.delete-transaction.js'
import makeListTransaction from './uc.list-transaction.js'
import makeListTransactionByCategory from './uc.list-transaction-by-category.js'

const ucGetTransaction = makeGetTransaction({ transactionDb: database.transactionDb })
const ucCreateTransaction = makeCreateTransaction({ transactionDb: database.transactionDb, transactionMailer: mailer.transactionMailer })
const ucUpdateTransaction = makeUpdateTransaction({ transactionDb: database.transactionDb })
const ucDeleteTransaction = makeDeleteTransaction({ transactionDb: database.transactionDb })
const ucListTransaction = makeListTransaction({ transactionDb: database.transactionDb })
const ucListTransactionByCategory = makeListTransactionByCategory({ transactionDb: database.transactionDb })

export default {
  ucGetTransaction,
  ucCreateTransaction,
  ucUpdateTransaction,
  ucDeleteTransaction,
  ucListTransaction,
  ucListTransactionByCategory
}