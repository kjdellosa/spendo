

import { DataList } from './DataList'
import { ListHeader } from './ListHeader'
import { useCategory } from '@/hooks/useCategory'
import { useCategoryForm } from '@/hooks/useCategoryForm'
import { CategoryModalForm } from './ModalForm'

export default function ListContainer() {
  const { list } = useCategory()
  const { form } = useCategoryForm()

  return (
    <div className='flex justify-center mt-5'>
      <div className='lg:w-2/3 md:w-3/4 w-full space-y-3 p-4'>
        <CategoryModalForm
          form={form.instance}
          isOpen={form.isOpen}
          onCancel={form.onCancel}
          onSubmit={form.onSubmit}
          isLoading={form.isLoading}
        />
        <ListHeader onClick={form.onAddClick} title={'Category'} buttonLabel={'Add category'} />
        <DataList
          list={list}
          onEditClick={form.onEditClick}
          onDeleteConfirm={form.onDeleteConfirm}
        />
      </div>
    </div>
  )
}