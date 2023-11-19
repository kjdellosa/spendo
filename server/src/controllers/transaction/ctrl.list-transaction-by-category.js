import { HTTP } from '../../constants'

export default function makeCtrlListTransactionByCategory({
  listTransactionByCategoryUsecase
}) {
  return async function listTransactionByCategory(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const category_id = httpRequest.params?.category_id
    const { limit, page, filter, orderBy } = httpRequest?.query

    const response = await listTransactionByCategoryUsecase(category_id, {
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
