
import { List } from 'antd'
import { TransactionListItem } from './TransactionListItem'

export function TransactionList({
  list,
  onEditClick,
  onDeleteConfirm
}) {
  return (
    <List
      loading={list.isLoading}
      itemLayout='horizontal'
      dataSource={list.transactions}
      renderItem={(item) => (
        <TransactionListItem
          item={item}
          onEditClick={onEditClick}
          onDeleteConfirm={onDeleteConfirm}
        />
      )}
      bordered
      className='overflow-auto h-[60vh]'
    />
  )
}