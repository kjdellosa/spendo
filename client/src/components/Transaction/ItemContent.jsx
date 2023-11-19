import moment from 'moment'

export const TransactionListItemContent = ({ item }) => {
  const { amount, date, description, categoryId } = item

  return (
    <div>
      <div>Category: {categoryId}</div>
      <div>Label: {description}</div>
      <div>Date: {moment(date).format('MMM Do YYYY')}</div>
      <div>Amount: {amount}</div>
    </div>
  )
}
