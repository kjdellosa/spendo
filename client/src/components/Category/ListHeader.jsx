import { Button } from 'antd'

export const ListHeader = ({ onClick, title, buttonLabel }) => {

  return (
    <div className='flex justify-between items-center'>
      <div className='text-lg font-bold'>{title}</div>
      <div className='flex space-x-3 justify-end w-1/3'>
        <Button className='font-semibold' onClick={onClick}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  )
}
