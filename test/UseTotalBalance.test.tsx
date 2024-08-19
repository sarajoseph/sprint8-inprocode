import React from 'react'
import { useTotalBalance } from '../src/hooks/useTotalBalance'
import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'

// Componente de prueba que usa el hook
const TestComponent = () => {
  useTotalBalance()
  return <div>Test</div>
}

describe('useTotalBalance', () => {
  it('should calculate the sum of weekly expenses and call setTotalBalance', () => {
    // Mock del contexto
    const mockSetTotalBalance = vi.fn()
    const mockContextValue = {
      setTotalBalance: mockSetTotalBalance,
      weekData: [10, 20, 30, 40, 50, 60, 70]
    }

    // Renderiza el hook dentro del contexto mock
    render(
      <WeeklyExpensesContext.Provider value={mockContextValue}>
        <TestComponent />
      </WeeklyExpensesContext.Provider>
    )

    // Verifica que setTotalBalance se haya llamado con el valor correcto
    expect(mockSetTotalBalance).toHaveBeenCalledWith(280)
  })
})
