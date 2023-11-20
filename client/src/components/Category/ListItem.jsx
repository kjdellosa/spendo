
import { List } from 'antd'
import { DeleteButton, EditButton } from './CategoryItemActions';
import { CategoryListItemContent } from './CategoryListItemContent';

export function ListItem({
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
          <CategoryListItemContent item={item} />
        </span>
      </List.Item>
    </div>
  )
}