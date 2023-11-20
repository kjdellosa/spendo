import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TransactionsContainer from './Transaction/TransactionsContainer'
import { Graph } from './Graph'

export default function Root() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Graph />
      <TransactionsContainer />
    </QueryClientProvider>
  )
}