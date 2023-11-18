export default function makeDeleteCategory({ categoryDb }) {
  return async function ucDeleteCategory(id) {
    if (!id) {
      throw new Error(ERROR.API.API_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id is required'
      })
    }

    return await categoryDb.deleteRecordById(id)
  }
}