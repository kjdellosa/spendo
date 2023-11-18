function makeSchema() {
  return {
    type: 'object',
    properties: {
      amount: { type: 'number' },
      date: { type: 'string', format: 'date' },
      description: { type: ['string', 'null'], default: null },
      category_id: { type: 'string', format: 'uuid' }
    }
  }
}

export default ({ validateSchema }) => {
  return function makeTransaction(input = {}) {
    const schema = makeSchema()

    const validated = validateSchema(schema, input)

    return Object.freeze({
      getAmount: () => validated.amount,
      getDate: () => validated.date,
      getDescription: () => validated.description,
      getCategoryId: () => validated.category_id,

      json: () => validated
    })

  }
}