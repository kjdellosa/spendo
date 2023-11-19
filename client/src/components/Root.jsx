import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TransactionsContainer from './Transaction/TransactionsContainer'

export default function Root() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <TransactionsContainer />
    </QueryClientProvider>
  )
}