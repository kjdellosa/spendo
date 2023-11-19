export default function makeListCategory({ categoryDb }) {
  return async function ucListCategory(
    { limit = 10, page = 1, orderBy = [], filter = {} } = {}
  ) {
    const request = {
      limit: Number(limit),
      page: Number(page),
      orderBy,
      filter
    }

    const response = await categoryDb.listRecords(request)
    return response
  }
}