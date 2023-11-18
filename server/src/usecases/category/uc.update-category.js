import entities from '../../entities'

export default function makeUpdateCategory({ categoryDb }) {
  return async function ucUpdateCategory(id, category) {
    const foundCategory = await categoryDb.findRecordById(id)

    if (!foundCategory) {
      throw new Error(ERROR.API.API_RESOURCE_NOT_FOUND, {
        cause: `category with id ${id} not found.`
      })
    }

    const entity = entities.makeCategory(category)

    return await categoryDb.updateRecordById(id, entity.json())
  }
}