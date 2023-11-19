
import React from 'react'
import { TransactionList } from './TransactionsList'
import { useTransactions } from '@/hooks/useTransaction'

export default function TransactionsContainer() {
  const { list } = useTransactions()

  return (
    <div className='flex justify-center mt-10'>
      <div className='lg:w-2/3 md:w-3/4 w-full space-y-3 p-4'>
        <TransactionList
          list={list}
          onEditClick={() => { }}
          onDeleteConfirm={() => { }}
        />
      </div>
    </div>
  )
}