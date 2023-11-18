import database from '../../database'

import makeGetTransaction from './uc.get-transaction'
import makeCreateTransaction from './uc.create-transaction'
import makeUpdateTransaction from './uc.update-transaction'
import makeDeleteTransaction from './uc.delete-transaction'
import makeListTransaction from './uc.list-transaction'
import makeListTransactionByCategory from './uc.list-transaction-by-category'

const ucGetTransaction = makeGetTransaction({ transactionDb: database.transactionDb })
const ucCreateTransaction = makeCreateTransaction({ transactionDb: database.transactionDb })
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