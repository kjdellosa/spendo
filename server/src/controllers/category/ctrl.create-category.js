import { HTTP } from '../../constants'

export default function makeCtrlCreateCategory({
  createCategoryUsecase
}) {
  return async function createCategory(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const categoryData = httpRequest.body

    const response = await createCategoryUsecase(categoryData)
    body = { data: response }

    return {
      statusCode,
      body
    }
  }
}
