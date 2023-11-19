import usecases from '../../usecases'

import makeCtrlCreateTransaction from './ctrl.create-transaction'
import makeCtrlGetTransaction from './ctrl.get-transaction'
import makeCtrlListTransaction from './ctrl.list-transaction'
import makeCtrlListTransactionByCategory from './ctrl.list-transaction-by-category'
import makeCtrlUpdateTransaction from './ctrl.update-transaction'
import makeCtrlDeleteTransaction from './ctrl.delete-transaction'

const ucs = usecases.UcsTransaction

const ctrlCreateTransaction = makeCtrlCreateTransaction({ createTransactionUsecase: ucs.ucCreateTransaction })
const ctrlGetTransaction = makeCtrlGetTransaction({ getTransactionUsecase: ucs.ucGetTransaction })
const ctrlListTransaction = makeCtrlListTransaction({ listTransactionUsecase: ucs.ucListTransaction })
const ctrlListTransactionByCategory = makeCtrlListTransactionByCategory({ listTransactionByCategoryUsecase: ucs.ucListTransactionByCategory })
const crlUpdateTransaction = makeCtrlUpdateTransaction({ updateTransactionUsecase: ucs.ucUpdateTransaction })
const ctrlDeleteTransaction = makeCtrlDeleteTransaction({ deleteTransactionUsecase: ucs.ucDeleteTransaction })

export default {
  ctrlCreateTransaction,
  ctrlGetTransaction,
  ctrlListTransaction,
  ctrlListTransactionByCategory,
  crlUpdateTransaction,
  ctrlDeleteTransaction
}