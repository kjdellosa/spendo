import { HTTP } from '../../constants/index.js'

export default function makeCtrlGetTransaction({
  getTransactionUsecase
}) {
  return async function getTransaction(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const id = httpRequest?.params?.id

    const response = await getTransactionUsecase({ id: id })
    body = { data: response }

    return {
      statusCode,
      body
    }
  }
}
