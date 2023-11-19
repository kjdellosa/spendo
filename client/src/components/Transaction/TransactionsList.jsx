
import { List } from 'antd'

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
        <TransactionList
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