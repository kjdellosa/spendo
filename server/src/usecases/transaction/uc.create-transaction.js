import entities from '../../entities'

export default function makeCreateTransaction({ transactionDb }) {
  return async function ucCreateTransaction(transaction) {
    const entity = entities.makeTransaction(transaction)
    return transactionDb.saveRecord(entity.json())
  }
}