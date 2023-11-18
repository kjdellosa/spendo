export default function makeListTransactionByCategory({ transactionDb }) {
  return async function ucListTransactionByCategory(
    id,
    { limit = 10, page = 1, orderBy = [], filter = {} } = {}
  ) {
    const request = {
      limit: Number(limit),
      page: Number(page),
      orderBy,
      filter
    }

    const response = await transactionDb.listRecordsByCategoryId(id, request)
    return response
  }
}