import React from 'react'
import { WeeklyExpenses } from '../src/components/WeeklyExpenses'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'

// Mock del módulo 'react-i18next'
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str, // Retorna la clave de traducción directamente
  }),
}))

const mockContextValue = {
  todayExpenses: 50,
  percentageDiff: 10,
}

// REQUIRED: Import React to the component is required for testing
describe('WeeklyExpenses', () => {
  it('renders today\'s expenses and percentage difference correctly', () => {
    let percentageDiffSymbol = ''
    if (mockContextValue.percentageDiff > 0) {
      percentageDiffSymbol = '+'
    } else if (mockContextValue.percentageDiff < 0) {
      percentageDiffSymbol = '-'
    }

    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <WeeklyExpenses />
      </WeeklyExpensesContext.Provider>
    )

    expect(typeof mockContextValue.todayExpenses).toBe('number')
    expect(!isNaN(mockContextValue.todayExpenses)).toBe(true)
    expect(screen.getByText(mockContextValue.todayExpenses+' €')).not.toBeNull()

    expect(typeof mockContextValue.percentageDiff).toBe('number')
    expect(!isNaN(mockContextValue.percentageDiff)).toBe(true)
    expect(screen.getByText(percentageDiffSymbol+mockContextValue.percentageDiff+'%')).not.toBeNull()
  })

  it('should render the component with correct translations', () => {
    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <WeeklyExpenses />
      </WeeklyExpensesContext.Provider>
    )

    expect(screen.getByText('chart.title')).not.toBeNull()
    expect(screen.getByText('today_expenses')).not.toBeNull()
    expect(screen.getByText('compared_to_yesterday')).not.toBeNull()
  })
})
