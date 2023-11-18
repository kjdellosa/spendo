import entities from '../../entities'

export default function makeCreateCategory({ categoryDb }) {
  return async function ucCreateCategory(category) {
    const entity = entities.makeCategory(category)
    return categoryDb.saveRecord(entity.json())
  }
}