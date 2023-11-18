import { ERROR } from '../../constants'

export default function makeGetCategory({ categoryDb }) {
  return async function ucGetCategory({ id }) {
    if (!id) {
      throw new Error(ERROR.API.API_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id is required'
      })
    }
    const foundCategory = await categoryDb.findRecordById(id)

    if (!foundCategory)
      throw new Error(ERROR.API.API_RESOURCE_NOT_FOUND, {
        cause: 'category not found'
      })

    return foundCategory
  }
}