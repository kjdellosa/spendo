
import { List } from 'antd'
import { TransactionListItemContent } from './ItemContent';
import { DeleteButton, EditButton } from './ItemActions';

export function TransactionListItem({
  item,
  onDeleteConfirm,
  onEditClick
}) {
  return (
    <div className='flex items-center pl-5'>
      <List.Item
        className='w-full'
        actions={[
          <EditButton key='edit' onClick={() => { onEditClick(item) }} />,
          <DeleteButton key='delete' onDeleteConfirm={() => { onDeleteConfirm(item.id) }} />
        ]}
      >
        <span className='flex-grow'>
          <TransactionListItemContent item={item} />
        </span>
      </List.Item>
    </div>
  )
}