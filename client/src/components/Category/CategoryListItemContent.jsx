import { Typography } from 'antd'

const { Text } = Typography
export const CategoryListItemContent = ({ item }) => {
  const { name, type, description } = item

  return (
    <div className='grid grid-cols-4 gap-4 place-items-start'>
      <Text strong>{name}</Text>
      <Text>{type}</Text>
      <Text>{description}</Text>
    </div>
  )
}
