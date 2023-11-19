const TRANSACTION_TYPES = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
}

function makeSchema() {
  return {
    type: 'object',
    properties: {
      name: { type: 'string' },
      type: { type: 'string', enum: Object.values(TRANSACTION_TYPES) }
    }
  }
}

export default ({ validateSchema }) => {
  return function makeCategory(input = {}) {
    const schema = makeSchema()

    validateSchema(schema, 'category', input)

    return Object.freeze({
      getName: () => input.name,
      getType: () => input.type,

      json: () => input
    })
  }
}