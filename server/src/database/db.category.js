import { ERROR } from '../constants/index.js'

const makeCategoryDb = ({ makeDb }) => {
  return Object.freeze({
    findRecordById,
    saveRecord,
    updateRecordById,
    deleteRecordById,
    listRecords,
    listRecordsByCategoryType
  })

  async function findRecordById(id) {
    if (!id) {
      throw new Error(ERROR.DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id is required'
      })
    }
    const db = await makeDb()

    return db.category.findUnique({
      where: {
        id
      }
    })
  }

  async function listRecords({
    limit = 10,
    page = 1,
    orderBy = [],
    filter = {}
  }) {
    if (limit < 0 || page < 0 || page > 50) {
      throw new Error(ERROR.DATABASE.DB_INVALID_REQUEST, {
        cause: 'Invalid limit or page'
      })
    }
    const db = await makeDb()
    const [results, count] = await db.$transaction([
      db.category.findMany({
        skip: limit * (page - 1),
        take: limit,
        where: {
          ...filter
        },
        orderBy: [...orderBy],
      }),
      db.category.count({
        where: {
          ...filter
        }
      })
    ])

    return {
      list: results,
      total: count,
      page,
      limit
    }
  }

  async function listRecordsByCategoryType(
    type,
    { limit = 10, page = 1, orderBy = [], filter = {} }
  ) {
    if (!type || limit < 0 || page < 0 || page > 50) {
      throw new Error(ERROR.DATABASE.DB_INVALID_REQUEST, {
        cause: 'Invalid limit or page or category type'
      })
    }

    const db = await makeDb()

    const [results, count] = await db.$transaction([
      db.category.findMany({
        skip: limit * (page - 1),
        take: limit,
        where: {
          ...filter,
          type: type
        },
        orderBy: [...orderBy]
      }),
      db.category.count({
        where: {
          ...filter
        }
      })
    ])

    return {
      list: results,
      total: count,
      page,
      limit
    }
  }

  async function saveRecord(category) {
    if (!category) {
      throw new Error(ERROR.DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'category is required'
      })
    }

    const db = await makeDb()

    return db.category.create({
      data: category
    })
  }

  async function updateRecordById(
    id,
    category
  ) {
    if (!id || !category) {
      throw new Error(ERROR.DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id and category is required'
      })
    }

    const db = await makeDb()
    return db.category.update({
      where: {
        id
      },
      data: category
    })
  }

  async function deleteRecordById(id) {
    if (!id) {
      throw new Error(ERROR.DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id is required'
      })
    }

    const db = await makeDb()
    return db.category.delete({
      where: {
        id
      }
    })
  }
}

export default makeCategoryDb
