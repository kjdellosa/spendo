import Ajv from 'ajv'
import * as addFormats from 'ajv-formats'

const ajv = new Ajv()
addFormats.default(ajv)

import makeBuildTransaction from './transaction.js'
import makeBuildCategory from './category.js'

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