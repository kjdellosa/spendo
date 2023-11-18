import Ajv from 'ajv'
const ajv = new Ajv()

import makeBuildTransaction from './transaction'
import makeBuildCategory from './category'

function validateSchema(schema, entity, data) {
  let validate = ajv.getSchema(entity)

  if (!validate) {
    ajv.addSchema(schema, entity)
    validate = ajv.getSchema(entity)
  }

  const result = validate(data)

  if (!result) {
    const validationErrors = validate.errors
    validationErrors.forEach(error => {

      console.error(`${JSON.stringify(error)}`)
    })

    return `${validationErrors[0].instancePath}: ${validationErrors[0].message}`.trim()
  }
  return null
}

// * Entities
const makeTransaction = makeBuildTransaction({ validateSchema })
const makeCategory = makeBuildCategory({ validateSchema })

export default {
  makeTransaction,
  makeCategory
}