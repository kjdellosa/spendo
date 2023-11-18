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