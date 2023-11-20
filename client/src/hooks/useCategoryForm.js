import { useState, useEffect } from 'react'
import { Form } from 'antd'

// * Hooks
import { useCategoryMutations } from './useCategory'

export const useCategoryForm = () => {
  const [form] = Form.useForm()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState()
  const {
    addCategory, editCategory, deleteCategory, isLoading
  } = useCategoryMutations(selectedCategory?.id)

  useEffect(() => {
    if (selectedCategory === undefined) {
      form.resetFields()
    } else {
      form.setFieldsValue({
        ...selectedCategory
      })
    }
  }, [selectedCategory])

  const onAddClick = () => {
    setIsOpen(true)
  }

  const onEditClick = (transaction) => {
    setSelectedCategory(transaction)
    setIsOpen(true)
  }

  const onCancel = async () => {
    form.resetFields()
    setSelectedCategory(undefined)
    setIsOpen(false)
  }

  const onSubmit = async () => {
    const transaction = await form.validateFields()

    if (selectedCategory === undefined) {
      const payload = {
        ...transaction
      }
      await addCategory(payload)
    } else {
      const payload = {
        ...transaction
      }

      await editCategory(payload)
    }

    setIsOpen(false)
    form.resetFields()
  }

  const onDeleteConfirm = async (id) => {
    await deleteCategory(id)
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
