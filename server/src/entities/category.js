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