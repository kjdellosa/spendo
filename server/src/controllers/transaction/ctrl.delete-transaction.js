import { HTTP } from '../../constants'

export default function makeCtrlDeleteTransaction({
  deleteTransactionUsecase
}) {
  return async function deleteTransaction(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const id = httpRequest.params?.id

    const response = await deleteTransactionUsecase(id)
    body = { data: response }
    return {
      statusCode,
      body
    }
  }
}
