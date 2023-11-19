import { HTTP } from '../../constants'

export default function makeCtrlCreateTransaction({
  createTransactionUsecase
}) {
  return async function createTransaction(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const transactionData = httpRequest.body

    const response = await createTransactionUsecase(transactionData)
    body = { data: response }

    return {
      statusCode,
      body
    }
  }
}
