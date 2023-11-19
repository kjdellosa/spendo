import { HTTP } from '../../constants'

export default function makeCtrlListTransaction({
  listTransactionUsecase
}) {
  return async function listTransaction(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const { limit, page, filter, orderBy } = httpRequest?.query

    const response = await listTransactionUsecase({
      limit,
      page,
      filter,
      orderBy
    })

    body = { data: response }

    return {
      statusCode,
      body
    }
  }
}
