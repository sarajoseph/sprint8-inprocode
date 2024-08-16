/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react'

export const WeeklyExpensesContext = createContext<any | null>(null)

export const WeeklyExpensesProvider = ({children}: any) => {
  const [todayExpenses, setTodayExpenses] = useState<number>(557.46)
  const [totalBalance, setTotalBalance] = useState<number>(3326)
  const [percentageDiff, setPercentageDiff] = useState<number>(2.4)
  const week = {
    monday: 200,
    tuesday: 59,
    wednesday: 7.4,
    thursday: 83,
    friday: 273.23,
    saturday: 437.84,
    sunday: 350.05,
  }
  return (
    <WeeklyExpensesContext.Provider value={{ todayExpenses, setTodayExpenses, totalBalance, setTotalBalance, percentageDiff, setPercentageDiff, week }}>
      {children}
    </WeeklyExpensesContext.Provider>
  )
}