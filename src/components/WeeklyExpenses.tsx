import { useContext } from 'react'
import { Graph } from './Graph'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'

export const WeeklyExpenses = () => {
  const { todayExpenses, percentageDiff } = useContext(WeeklyExpensesContext)

  let percentageDiffSymbol = ''
  if (percentageDiff > 0) {
    percentageDiffSymbol = '+'
  } else if (percentageDiff < 0) {
    percentageDiffSymbol = '-'
  }

  return (
    <section className='bg-white rounded-lg p-4 flex flex-col gap-y-6'>
      <h1 className='text-2xl font-bold text-center md:text-left'>Despeses - Última semana</h1>
      <Graph />
      <footer className='flex flex-col items-end gap-y-2 border-t-2 pt-6 md:flex-row md:justify-between md:items-center md:gap-y-0'>
        <div className='flex flex-col text-right md:text-left'>
          <p>Despeses avui</p>
          <p className='text-3xl font-bold'>{todayExpenses} €</p>
        </div>
        <div className='flex flex-col text-right text-sm'>
          <p className='font-bold'>{percentageDiffSymbol+percentageDiff}%</p>
          <p>respecte a ahir</p>
        </div>
      </footer>
    </section>
  )
}