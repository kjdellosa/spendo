import entities from '../../entities/index.js'

export default function makeCreateTransaction({ transactionDb }) {
  return async function ucCreateTransaction(transaction) {
    const entity = entities.makeTransaction(transaction)
    return transactionDb.saveRecord(entity.json())
  }
}