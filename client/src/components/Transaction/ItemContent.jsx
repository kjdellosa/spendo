import moment from 'moment'

export const TransactionListItemContent = ({ item }) => {
  const { amount, date, description, category: { name } } = item

  return (
    <div>
      <div>Category: {name}</div>
      <div>Label: {description}</div>
      <div>Date: {moment(date).format('MMM D YYYY hh:mm A')}</div>
      <div>Amount: {amount}</div>
    </div>
  )
}
