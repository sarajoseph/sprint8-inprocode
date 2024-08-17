import React from 'react'
import { Graph } from '../src/components/Graph'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyExpensesContext } from '../src/context/WeeklyExpensesContext'

describe('Graph Component', () => {
  it('should render Bar chart with provided data', () => {

    const week = {
      monday: 200,
      tuesday: 59,
      wednesday: 7.4,
      thursday: 83,
      friday: 273.23,
      saturday: 437.84,
      sunday: 350.05,
    }

    // Renderiza el componente con el contexto
    render(
      <WeeklyExpensesContext.Provider value={{ week }}>
        <Graph />
      </WeeklyExpensesContext.Provider>
    )

    // Verifica que el componente Bar está en el documento
    // `react-chartjs-2` utiliza `img` para renderizar el gráfico
    const chartElement = screen.getByRole('img')
    expect(chartElement).not.toBeNull()
  })
})