import { Button } from 'antd'

export const TransactionListHeader = ({ onClick }) => {
  // const { value, onSearch } = search

  return (
    <div className='flex justify-between items-center'>
      <div className='text-lg font-bold'>Transactions</div>
      <div className='flex space-x-3 justify-end w-1/3'>
        {/* <Search defaultValue={value} onSearch={onSearch} /> */}
        <Button className='font-semibold' onClick={onClick}>
          Add Transaction
        </Button>
      </div>
    </div>
  )
}
