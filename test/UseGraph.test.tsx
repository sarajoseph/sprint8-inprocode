import { describe, it, expect } from 'vitest'
import { useGraph } from '../src/hooks/useGraph'

describe('useGraph Hook', () => {
  it('should return chart data and options correctly', () => {
    // Datos de prueba
    const dataGraph = [200, 59, 7.4, 83, 273.23, 437.84, 350.05]

    // Llama al hook useGraph
    const { chartData, options } = useGraph(dataGraph)

    // Verifica la estructura del chartData
    expect(chartData).toEqual({
      labels: expect.any(Array),
      datasets: expect.any(Array),
    })

    // Verifica la estructura de options
    expect(options).toEqual(expect.any(Object))
  })
})
