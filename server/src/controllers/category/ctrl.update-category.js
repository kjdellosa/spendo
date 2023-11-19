import { HTTP } from '../../constants/index.js'

export default function makeCtrlUpdateCategory({
  updateCategoryUsecase
}) {
  return async function updateCategory(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const id = httpRequest.params?.id

    const categoryData = httpRequest.body

    const response = await updateCategoryUsecase(id, categoryData)
    body = { data: response }
    return {
      statusCode,
      body
    }
  }
}
