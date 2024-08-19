import { Bar } from 'react-chartjs-2'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'
import { useGraph } from '../hooks/useGraph'
import { useContext } from 'react'

export const Graph = () => {
  const { weekData, currentDay } = useContext(WeeklyExpensesContext)
  const { chartData, options } = useGraph(weekData, currentDay)
  return (
    <Bar data={chartData} options={options} />
  )
}