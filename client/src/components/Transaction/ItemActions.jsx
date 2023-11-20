import { Button, Tooltip, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'

export const EditButton = ({ onClick }) => {
  return (
    <Tooltip title='Edit transaction'>
      <Button
        onClick={onClick}
        icon={<EditOutlined />}
        shape='circle'
        size='small'
      />
    </Tooltip>
  )
}

export const DeleteButton = ({ onDeleteConfirm }) => {
  return (
    <Popconfirm
      title='Delete transaction'
      description='Are you sure you want to delete this transaction?'
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      okButtonProps={{ danger: true }}
      onConfirm={onDeleteConfirm}
    >
      <Button
        icon={<DeleteOutlined />}
        shape='circle'
        type='primary'
        danger
        size='small'
      />
    </Popconfirm>
  )
}
