import { Bar } from 'react-chartjs-2'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'
import { useGraph } from '../hooks/useGraph'
import { useContext } from 'react'

export const Graph = () => {
  const { week } = useContext(WeeklyExpensesContext)
  const dataGraph: number[] = Object.keys(week).map((k) => week[k])
  const { chartData, options } = useGraph(dataGraph)
  return (
    <Bar data={chartData} options={options} />
  )
}