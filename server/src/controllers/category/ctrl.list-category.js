import { HTTP } from '../../constants'

export default function makeCtrlListCategory({
  listCategoryUsecase
}) {
  return async function listCategory(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const { limit, page, filter, orderBy } = httpRequest?.query

    const response = await listCategoryUsecase({
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
