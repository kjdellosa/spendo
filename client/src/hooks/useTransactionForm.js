import { useState, useEffect } from 'react'
import { Form } from 'antd'
import moment from 'moment'
// * Hooks
import { useTransactionMutations } from './useTransaction'

export const useTransactionForm = () => {
  const [form] = Form.useForm()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState()
  const {
    addTransaction, editTransaction, deleteTransaction, isLoading
  } = useTransactionMutations(selectedTransaction?.id)

  useEffect(() => {
    if (selectedTransaction === undefined) {
      form.resetFields()
    } else {
      form.setFieldsValue({
        ...selectedTransaction,
        date: moment(selectedTransaction.date)
      })
    }
  }, [selectedTransaction])

  const onAddClick = () => {
    setIsOpen(true)
  }

  const onEditClick = (transaction) => {
    setSelectedTransaction(transaction)
    setIsOpen(true)
  }

  const onCancel = async () => {
    form.resetFields()
    setSelectedTransaction(undefined)
    setIsOpen(false)
  }

  const onSubmit = async () => {
    const transaction = await form.validateFields()

    if (selectedTransaction === undefined) {
      const payload = {
        ...transaction,
        date: moment(transaction.date).format()
      }
      await addTransaction(payload)
    } else {
      const payload = {
        ...transaction,
        date: moment(transaction.date).format()
      }

      await editTransaction(payload)
    }

    setIsOpen(false)
    form.resetFields()
  }

  const onDeleteConfirm = async (id) => {
    await deleteTransaction(id)
  }

  return {
    form: {
      instance: form,
      isOpen,
      isLoading,
      onAddClick,
      onEditClick,
      onDeleteConfirm,
      onSubmit,
      onCancel
    }
  }
}
