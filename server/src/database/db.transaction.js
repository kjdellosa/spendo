import { ERROR } from '../constants/index.js'

const makeTransactionDb = ({ makeDb }) => {
  return Object.freeze({
    findRecordById,
    saveRecord,
    updateRecordById,
    deleteRecordById,
    listRecords,
    listRecordsByCategoryId
  })

  async function findRecordById(id) {
    if (!id) {
      throw new Error(ERROR.DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id is required'
      })
    }
    const db = await makeDb()

    return db.transaction.findUnique({
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
      db.transaction.findMany({
        skip: limit * (page - 1),
        take: limit,
        where: {
          ...filter
        },
        orderBy: [...orderBy],
      }),
      db.transaction.count({
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

  async function listRecordsByCategoryId(
    categoryId,
    { limit = 10, page = 1, orderBy = [], filter = {} }
  ) {
    if (!categoryId || limit < 0 || page < 0 || page > 50) {
      throw new Error(ERROR.DATABASE.DB_INVALID_REQUEST, {
        cause: 'Invalid limit or page or siteId'
      })
    }

    const db = await makeDb()

    const [results, count] = await db.$transaction([
      db.transaction.findMany({
        skip: limit * (page - 1),
        take: limit,
        where: {
          ...filter,
          category_id: categoryId
        },
        orderBy: [...orderBy]
      }),
      db.transaction.count({
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

  async function saveRecord(transaction) {
    if (!transaction) {
      throw new Error(ERROR.DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'transaction is required'
      })
    }

    const db = await makeDb()

    return db.transaction.create({
      data: transaction
    })
  }

  async function updateRecordById(
    id,
    transaction
  ) {
    if (!id || !transaction) {
      throw new Error(ERROR.DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id and transaction is required'
      })
    }

    const db = await makeDb()
    return db.transaction.update({
      where: {
        id
      },
      data: transaction
    })
  }

  async function deleteRecordById(id) {
    if (!id) {
      throw new Error(ERROR.DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED, {
        cause: 'id is required'
      })
    }

    const db = await makeDb()
    return db.transaction.delete({
      where: {
        id
      }
    })
  }
}

export default makeTransactionDb
