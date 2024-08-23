import React from 'react'
import { TotalBalance } from '../src/components/TotalBalance'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'

const mockSetTotalBalance = vi.fn()
const mockContextValue  = {
  totalBalance: 280,
  setTotalBalance: mockSetTotalBalance,
  weekData: [10, 20, 30, 40, 50, 60, 70]
}

// Mock del módulo 'react-i18next'
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str, // Retorna la clave de traducción directamente
  }),
}))

// REQUIRED: Import React to the component is required for testing
describe('TotalBalance', () => {
  it('renders total balance and verifies it is numeric', () => {
    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <TotalBalance />
      </WeeklyExpensesContext.Provider>
    )

    // Comprueba que total balance esté en el documento y que sea numérico
    expect(screen.getByText(mockContextValue.totalBalance+' €')).not.toBeNull()
    expect(typeof mockContextValue.totalBalance).toBe('number')
    expect(!isNaN(mockContextValue.totalBalance)).toBe(true)
    expect(mockContextValue.totalBalance).toBe(mockContextValue.totalBalance)
  })

  it('renders LeftArrow and RightArrow icons', () => {
    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <TotalBalance />
      </WeeklyExpensesContext.Provider>
    )

    expect(screen.getByLabelText('left-arrow-icon')).not.toBeNull()
    expect(screen.getByLabelText('right-arrow-icon')).not.toBeNull()
  })

  it('should render the component with correct translations', () => {
    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <TotalBalance />
      </WeeklyExpensesContext.Provider>
    )
    expect(screen.getByText('total_balance')).not.toBeNull()
  })
})
