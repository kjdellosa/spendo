import { Typography } from 'antd'
import moment from 'moment'

const { Text } = Typography
export const TransactionListItemContent = ({ item }) => {
  const { amount, date, description, category: { name } } = item

  return (
    <div className='grid grid-cols-4 gap-4 place-items-start'>
      <Text strong>{name}</Text>
      <Text>{description}</Text>
      <Text>{moment(date).format('MMM D YYYY hh:mm A')}</Text>
      <Text strong>{amount}</Text>
    </div>
  )
}
