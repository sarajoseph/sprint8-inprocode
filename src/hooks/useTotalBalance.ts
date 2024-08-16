import { useContext, useEffect } from 'react'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'

export const useTotalBalance = () => {
  const { setTotalBalance, week } = useContext(WeeklyExpensesContext)
  const sum = Object.keys(week).reduce((total, item) => total + week[item], 0)
  useEffect(() => {
    setTotalBalance(sum)
  })
}