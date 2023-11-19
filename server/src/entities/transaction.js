function makeSchema() {
  return {
    type: 'object',
    properties: {
      amount: { type: 'number' },
      date: { type: 'string', format: 'date-time' },
      description: { type: ['string', 'null'], default: null },
      category_id: { type: 'string', format: 'uuid' }
    },
    required: ['amount', 'date', 'category_id'],
    additionalProperties: false
  }
}

export default ({ validateSchema }) => {
  return function makeTransaction(input = {}) {
    const schema = makeSchema()

    validateSchema(schema, 'transaction', input)

    return Object.freeze({
      getAmount: () => input.amount,
      getDate: () => input.date,
      getDescription: () => input.description,
      getCategoryId: () => input.category_id,

      json: () => input
    })
  }
}