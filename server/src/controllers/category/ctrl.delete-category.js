import { HTTP } from '../../constants'

export default function makeCtrlDeleteCategory({
  deleteCategoryUsecase
}) {
  return async function deleteCategory(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const id = httpRequest.params?.id

    const response = await deleteCategoryUsecase(id)
    body = { data: response }
    return {
      statusCode,
      body
    }
  }
}
