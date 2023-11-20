import { useTransactions } from "@/hooks/useTransaction"
import { Select, Typography } from "antd"
import moment from "moment"
import Chart from "react-google-charts"

function aggregateExpenses(expenses) {
  const result = expenses.reduce((grouped, [category, amount]) => {
    grouped[category] = (grouped[category] || []).concat(amount)
    return grouped
  }, {})

  const aggregated = Object.entries(result).map(
    ([category, amounts]) => [category, amounts.reduce((sum, amount) => sum + amount, 0)]
  )

  const totalAmount = expenses.reduce((sum, [, amount]) => sum + amount, 0);

  return { aggregated, totalAmount }
}

const MONTHS = {}
for (let i = 0; i < 12; i++) {
  MONTHS[i] = moment().month(i).format('MMMM')
}

const MonthFilter = ({ filter }) => {
  return (
    <Select placeholder='Month' onChange={(v) => filter.onFilter(v)} allowClear>
      {Object.values(MONTHS).map((month, i) => {
        return <Select.Option value={i} key={i}>{month}</Select.Option>
      })}
    </Select>
  )
}

export const Graph = () => {
  const { list, filterByMonth } = useTransactions()

  const data = list?.transactions?.map(t => ([t.category.name, t.amount])) || []
  const { aggregated, totalAmount } = aggregateExpenses(data)
  aggregated.unshift(['Category', 'Amount'])

  return (
    <div className='flex justify-center'>
      <div className='lg:w-2/3 md:w-3/4 w-full space-y-3 p-4'>
        <MonthFilter filter={filterByMonth} />
        <Chart chartType="PieChart"
          data={aggregated}
          width={"100%"}
          height={"400px"}
        />
        <Typography.Text strong>Total: {totalAmount}</Typography.Text>
      </div>
    </div>
  )
}