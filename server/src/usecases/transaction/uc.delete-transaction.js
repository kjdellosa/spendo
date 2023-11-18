export default function makeUpdateTransaction({ transactionDb }) {
  return async function ucUpdateTransaction(id) {
    if (!id) {
      throw new Error(ERROR.API.API_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id is required'
      })
    }

    return await transactionDb.deleteRecordById(id)
  }
}