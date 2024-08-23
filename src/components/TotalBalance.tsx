import { useContext } from 'react'
import { WeeklyExpensesContext } from '../context/WeeklyExpensesContext'
import { LeftArrow } from './icons/LeftArrow'
import { RightArrow } from './icons/RightArrow'
import { useTotalBalance } from '../hooks/useTotalBalance'
import { useTranslation } from 'react-i18next'

export const TotalBalance = () => {
  const { t } = useTranslation()
  const { totalBalance } = useContext(WeeklyExpensesContext)
  useTotalBalance()

  return (
    <section className='bg-[#ec765c] rounded-lg px-6 py-8 text-white items-center flex flex-col-reverse gap-y-2 md:flex-row md:justify-between md:gap-y-0'>
      <div className='flex flex-col'>
        <p>{t('total_balance')}</p>
        <p className='text-2xl font-bold'>{totalBalance} €</p>
      </div>
      <div className='flex flex-row gap-x-2'>
        <LeftArrow />
        <RightArrow />
      </div>
    </section>
  )
}