import { useContext } from 'react'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'
import { LeftArrow } from './icons/LeftArrow'
import { RightArrow } from './icons/RightArrow'

export const TotalBalance = () => {
  const { totalBalance } = useContext(WeeklyExpensesContext)
  return (
    <section className='bg-[#ec765c] rounded-lg p-4 text-white items-center flex flex-col-reverse gap-y-2 md:flex-row md:justify-between md:gap-y-0'>
      <div className='flex flex-col'>
        <p>Balanç total</p>
        <p className='text-2xl font-bold'>{totalBalance} €</p>
      </div>
      <div className='flex flex-row gap-x-2'>
        <LeftArrow />
        <RightArrow />
      </div>
    </section>
  )
}