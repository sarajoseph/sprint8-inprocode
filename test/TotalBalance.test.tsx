import React from 'react'
import { TotalBalance } from '../src/components/TotalBalance'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'

const mockContextValue  = {
  totalBalance: 3326
}

// REQUIRED: Import React to the component is required for testing
describe('TotalBalance', () => {
  it('renders total balance and verifies it is numeric', () => {
    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <TotalBalance />
      </WeeklyExpensesContext.Provider>
    )

    // Comprueba que total balance esté en el documento y que sea numérico
    expect(typeof mockContextValue.totalBalance).toBe('number')
    expect(!isNaN(mockContextValue.totalBalance)).toBe(true)
    expect(screen.getByText(mockContextValue.totalBalance+' €')).not.toBeNull()
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
})
