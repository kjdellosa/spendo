import { HTTP } from '../../constants'

export default function makeCtrlUpdateTransaction({
  updateTransactionUsecase
}) {
  return async function updateTransaction(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const id = httpRequest.params?.id

    const transactionData = httpRequest.body

    const response = await updateTransactionUsecase(id, transactionData)
    body = { data: response }
    return {
      statusCode,
      body
    }
  }
}
