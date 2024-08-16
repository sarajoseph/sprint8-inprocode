import React from 'react'
import { WeeklyExpenses } from '../src/components/WeeklyExpenses'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'

// REQUIRED: Import React to the component is required for testing
describe('WeeklyExpenses', () => {
  it('renders today\'s expenses and percentage difference correctly', () => {
    const mockContextValue = {
      todayExpenses: 50,
      percentageDiff: 10,
    }

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
})
