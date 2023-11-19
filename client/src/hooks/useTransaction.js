import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { message } from 'antd'

const endpoint = `http://localhost:8080/api`
const url = `${endpoint}/transaction`

export const useTransactions = () => {
  async function getTransactions() {
    const { data: response } = await axios.get(url)

    return response.data
  }

  const { data: transactions = {}, isLoading } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions
  })

  return {
    list: {
      transactions: transactions.list,
      isLoading
    }
  }
}

export const useTransactionMutations = (transactionId) => {
  const queryClient = useQueryClient()

  async function addTransactionFn(transaction) {
    const { data: response } = await axios.post(url, transaction)

    return response.data
  }

  async function editTransactionFn(transaction) {
    const { data: response } = await axios.patch(`${url}/${transactionId}`, transaction)

    return response.data
  }

  async function deleteTransactionFn(id) {
    await axios.delete(`${url}/${id}`)
  }

  const { mutateAsync: addTransaction, isPending: isAddLoading } = useMutation({
    mutationFn: addTransactionFn,
    onSuccess: async () => {
      message.success('Transaction added successfully!')
      await queryClient.invalidateQueries({ queryKey: ['transactions'] })
    }
  })

  const { mutateAsync: editTransaction, isPending: isEditLoading } = useMutation({
    mutationFn: editTransactionFn,
    onSuccess: async () => {
      message.success('Transaction edited successfully!')
      await queryClient.invalidateQueries({ queryKey: ['transactions'] })
    }
  })

  const { mutateAsync: deleteTransaction, isPending: isDeleteLoading } = useMutation({
    mutationFn: deleteTransactionFn,
    onSuccess: async () => {
      message.success('Transaction deleted successfully!')
      await queryClient.invalidateQueries({ queryKey: ['transactions'] })
    }
  })

  return {
    addTransaction,
    editTransaction,
    deleteTransaction,
    isLoading: isAddLoading || isEditLoading || isDeleteLoading
  }
}