import { Button, Tooltip, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'

export const EditButton = ({ onClick }) => {
  return (
    <Tooltip title='Edit category'>
      <Button
        onClick={onClick}
        icon={<EditOutlined />}
        shape='circle'
      />
    </Tooltip>
  )
}

export const DeleteButton = ({ onDeleteConfirm }) => {
  return (
    <Popconfirm
      title='Delete category'
      description='Are you sure you want to delete this category?'
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      okButtonProps={{ danger: true }}
      onConfirm={onDeleteConfirm}
    >
      <Button
        icon={<DeleteOutlined />}
        shape='circle'
        type='primary'
        danger
      />
    </Popconfirm>
  )
}
