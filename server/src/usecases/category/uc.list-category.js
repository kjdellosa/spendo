export default function makeListCategory({ categoryDb }) {
  return async function ucListCategory(
    id,
    { limit = 10, page = 1, orderBy = [], filter = {} } = {}
  ) {
    const request = {
      limit: Number(limit),
      page: Number(page),
      orderBy,
      filter
    }

    const response = await categoryDb.listRecords(id, request)
    return response
  }
}