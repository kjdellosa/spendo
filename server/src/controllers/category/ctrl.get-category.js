import { HTTP } from '../../constants'

export default function makeCtrlGetCategory({
  getCategoryUsecase
}) {
  return async function getCategory(httpRequest) {
    const statusCode = HTTP.RESPONSE.OK
    let body = {}

    const id = httpRequest?.params?.id

    const response = await getCategoryUsecase({ id: id })
    body = { data: response }

    return {
      statusCode,
      body
    }
  }
}
