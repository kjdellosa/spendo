import { ERROR } from '../../constants/index.js'

export default function makeGetTransaction({ transactionDb }) {
  return async function ucGetTransaction({ id }) {
    if (!id) {
      throw new Error(ERROR.API.API_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id is required'
      })
    }
    const foundTransaction = await transactionDb.findRecordById(id)

    if (!foundTransaction)
      throw new Error(ERROR.API.API_RESOURCE_NOT_FOUND, {
        cause: 'transaction not found'
      })

    return foundTransaction
  }
}