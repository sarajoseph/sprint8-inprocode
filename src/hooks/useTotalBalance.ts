import { useContext, useEffect } from 'react'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'

export const useTotalBalance = () => {
  const { setTotalBalance, weekData } = useContext(WeeklyExpensesContext)
  const sum = Object.keys(weekData).reduce((total, item) => total + weekData[item], 0)
  useEffect(() => {
    setTotalBalance(sum)
  })
}