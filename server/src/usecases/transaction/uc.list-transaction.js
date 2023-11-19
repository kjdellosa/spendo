export default function makeListTransaction({ transactionDb }) {
  return async function ucListTransaction(
    { limit = 10, page = 1, orderBy = [], filter = {} } = {}
  ) {
    const request = {
      limit: Number(limit),
      page: Number(page),
      orderBy,
      filter
    }

    const response = await transactionDb.listRecords(request)
    return response
  }
}