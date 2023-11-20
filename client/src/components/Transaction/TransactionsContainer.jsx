import { useModalForm } from '@/hooks/useModalForm'
import { TransactionList } from './TransactionsList'
import { useTransactions } from '@/hooks/useTransaction'
import { TransactionListHeader } from './ListHeader'
import { TransactionModalForm } from './ModalForm'

export default function TransactionsContainer() {
  const { list } = useTransactions()
  const { form } = useModalForm()

  return (
    <div className='flex justify-center mt-5'>
      <div className='lg:w-2/3 md:w-3/4 w-full space-y-3 p-4'>
        <TransactionModalForm
          form={form.instance}
          isOpen={form.isOpen}
          onCancel={form.onCancel}
          onSubmit={form.onSubmit}
          isLoading={form.isLoading}
        />
        <TransactionListHeader onClick={form.onAddClick} />
        <TransactionList
          list={list}
          onEditClick={form.onEditClick}
          onDeleteConfirm={form.onDeleteConfirm}
        />
      </div>
    </div>
  )
}