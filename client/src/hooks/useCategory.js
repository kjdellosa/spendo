import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

import { message } from 'antd'

const endpoint = `http://localhost:8080/api`
const url = `${endpoint}/category`

export const useCategory = () => {
  async function getCategory() {
    const { data: response } = await axios.get(url)

    return response.data
  }

  const { data: category = {}, isLoading } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory
  })

  return {
    list: {
      category: category.list,
      isLoading
    }
  }
}

export const useCategoryMutations = (categoryId) => {
  const queryClient = useQueryClient()

  async function addCategoryFn(category) {
    const { data: response } = await axios.post(url, category)

    return response.data
  }

  async function editCategoryFn(category) {
    const { data: response } = await axios.patch(`${url}/${categoryId}`, category)

    return response.data
  }

  async function deleteCategoryFn(id) {
    await axios.delete(`${url}/${id}`)
  }

  const { mutateAsync: addCategory, isPending: isAddLoading } = useMutation({
    mutationFn: addCategoryFn,
    onSuccess: async () => {
      message.success('Category added successfully!')
      await queryClient.invalidateQueries({ queryKey: ['category'] })
    }
  })

  const { mutateAsync: editCategory, isPending: isEditLoading } = useMutation({
    mutationFn: editCategoryFn,
    onSuccess: async () => {
      message.success('Category edited successfully!')
      await queryClient.invalidateQueries()
    }
  })

  const { mutateAsync: deleteCategory, isPending: isDeleteLoading } = useMutation({
    mutationFn: deleteCategoryFn,
    onSuccess: async () => {
      message.success('Category deleted successfully!')
      await queryClient.invalidateQueries()
    }
  })

  return {
    addCategory,
    editCategory,
    deleteCategory,
    isLoading: isAddLoading || isEditLoading || isDeleteLoading
  }
}