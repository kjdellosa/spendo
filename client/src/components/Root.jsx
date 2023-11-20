import React from 'react'
import TransactionsContainer from './Transaction/TransactionsContainer'
import CategoryContainer from './Category/ListContainer'
import { Graph } from './Graph'

export default function Root() {
  return (
    <>
      <Graph />
      <TransactionsContainer />
      <CategoryContainer />
    </>
  )
}