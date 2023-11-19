import usecases from '../../usecases/index.js'

import makeCtrlCreateTransaction from './ctrl.create-transaction.js'
import makeCtrlGetTransaction from './ctrl.get-transaction.js'
import makeCtrlListTransaction from './ctrl.list-transaction.js'
import makeCtrlListTransactionByCategory from './ctrl.list-transaction-by-category.js'
import makeCtrlUpdateTransaction from './ctrl.update-transaction.js'
import makeCtrlDeleteTransaction from './ctrl.delete-transaction.js'

const ucs = usecases.UcsTransaction

const ctrlCreateTransaction = makeCtrlCreateTransaction({ createTransactionUsecase: ucs.ucCreateTransaction })
const ctrlGetTransaction = makeCtrlGetTransaction({ getTransactionUsecase: ucs.ucGetTransaction })
const ctrlListTransaction = makeCtrlListTransaction({ listTransactionUsecase: ucs.ucListTransaction })
const ctrlListTransactionByCategory = makeCtrlListTransactionByCategory({ listTransactionByCategoryUsecase: ucs.ucListTransactionByCategory })
const ctrlUpdateTransaction = makeCtrlUpdateTransaction({ updateTransactionUsecase: ucs.ucUpdateTransaction })
const ctrlDeleteTransaction = makeCtrlDeleteTransaction({ deleteTransactionUsecase: ucs.ucDeleteTransaction })

export default {
  ctrlCreateTransaction,
  ctrlGetTransaction,
  ctrlListTransaction,
  ctrlListTransactionByCategory,
  ctrlUpdateTransaction,
  ctrlDeleteTransaction
}