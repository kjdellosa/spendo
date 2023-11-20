
import { Space, Table } from 'antd'
import moment from 'moment'
import { DeleteButton, EditButton } from './ItemActions'

const makeColumns = ({ onEditClick, onDeleteConfirm }) => {
  return [
    {
      title: 'Category',
      dataIndex: ["category", "name"]
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (date) => {
        return moment(date).format('MMM. D, YYYY')
      },
      sorter: (a, b) => moment(a).isBefore(b) ? -1 : 1
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Action',
      render: (item) => {
        return (
          <Space>
            <EditButton key='edit' onClick={() => { onEditClick(item) }} />
            <DeleteButton key='delete' onDeleteConfirm={() => { onDeleteConfirm(item.id) }} />
          </Space>
        )
      }
    }
  ]
}

export function TransactionList({
  list,
  onEditClick,
  onDeleteConfirm
}) {
  return (
    <Table
      columns={makeColumns({ onEditClick, onDeleteConfirm })}
      dataSource={list.transactions}
      bordered
    />
  )
}