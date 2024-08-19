/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react'
import { usePercentage } from '../hooks/usePercentage'
import { useWeek } from '../hooks/useWeek'
import { useDay } from '../hooks/useDay'

export const WeeklyExpensesContext = createContext<any | null>(null)

export const WeeklyExpensesProvider = ({children}: any) => {
  const currentDay = useDay()
  const weekData = useWeek()
  const percentage = usePercentage(weekData, currentDay)
  const [todayExpenses, setTodayExpenses] = useState<number>(weekData[currentDay])
  const [totalBalance, setTotalBalance] = useState<number>(0)
  const [percentageDiff, setPercentageDiff] = useState<string>(percentage)
  weekData.shift()

  return (
    <WeeklyExpensesContext.Provider value={{ todayExpenses, setTodayExpenses, totalBalance, setTotalBalance, percentageDiff, setPercentageDiff, weekData, currentDay }}>
      {children}
    </WeeklyExpensesContext.Provider>
  )
}