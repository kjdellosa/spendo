import entities from '../../entities'

export default function makeUpdateTransaction({ transactionDb }) {
  return async function ucUpdateTransaction(id, transaction) {
    const foundTransaction = await transactionDb.findRecordById(id)

    if (!foundTransaction) {
      throw new Error(ERROR.API.API_RESOURCE_NOT_FOUND, {
        cause: `Transaction with id ${id} not found.`
      })
    }

    const entity = entities.makeTransaction(transaction)

    return await transactionDb.updateRecordById(id, entity.json())
  }
}