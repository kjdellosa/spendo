
import { List } from 'antd'
import { ListItem } from './ListItem'

export function DataList({
  list,
  onEditClick,
  onDeleteConfirm
}) {
  return (
    <List
      loading={list.isLoading}
      itemLayout='horizontal'
      dataSource={list.category}
      renderItem={(item) => (
        <ListItem
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