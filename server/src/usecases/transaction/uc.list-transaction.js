export default function makeListTransaction({ transactionDb }) {
  return async function ucListTransaction(
    id,
    { limit = 10, page = 1, orderBy = [], filter = {} } = {}
  ) {
    const request = {
      limit: Number(limit),
      page: Number(page),
      orderBy,
      filter
    }

    const response = await transactionDb.listRecords(id, request)
    return response
  }
}