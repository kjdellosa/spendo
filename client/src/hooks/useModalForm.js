import { useState, useEffect } from 'react'
import { Form } from 'antd'
import moment from 'moment'
// * Hooks
import { useTransactionMutations } from './useTransaction'

export const useModalForm = () => {
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
        ...selectedTransaction
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
      }

      await addTransaction(payload)
    } else {
      const payload = {
        ...selectedTransaction,
        ...transaction
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
