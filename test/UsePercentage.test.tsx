import { describe, it, expect } from 'vitest'
import { usePercentage } from '../src/hooks/usePercentage'

describe('usePercentage Hook', () => {
  it('should calculate the correct percentage when there is an increase', () => {
    const weekData: number[] = []
    weekData[1] = 100
    weekData[2] = 150
    weekData[3] = 200
    weekData[4] = 250
    weekData[5] = 300
    weekData[6] = 350
    weekData[7] = 400
    const currentDay = 3
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('33.3') // (200 - 150) / 150 * 100 = 33.3%
  })

  it('should calculate the correct percentage when there is a decrease', () => {
    const weekData: number[] = []
    weekData[1] = 400
    weekData[2] = 300
    weekData[3] = 200
    weekData[4] = 150
    weekData[5] = 100
    weekData[6] = 50
    weekData[7] = 25
    const currentDay = 7
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('-50.0') // (25 - 50) / 50 * 100 = -50.0%
  })

  it('should handle the case where currentDay is 1 and previous day is 7', () => {
    const weekData: number[] = []
    weekData[1] = 200
    weekData[2] = 300
    weekData[3] = 400
    weekData[4] = 500
    weekData[5] = 600
    weekData[6] = 700
    weekData[7] = 100
    const currentDay = 1
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('100.0') // (200 - 100) / 100 * 100 = 100.0%
  })

  it('should return 0.0 when there is no difference between days', () => {
    const weekData: number[] = []
    weekData[1] = 150
    weekData[2] = 150
    weekData[3] = 150
    weekData[4] = 150
    weekData[5] = 150
    weekData[6] = 150
    weekData[7] = 150
    const currentDay = 4
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('0.0') // No hay diferencia, porcentaje = 0.0%
  })

  it('should handle cases with decimal values correctly', () => {
    const weekData: number[] = []
    weekData[1] = 100.5
    weekData[2] = 150.25
    weekData[3] = 200.75
    weekData[4] = 250.4
    weekData[5] = 300.9
    weekData[6] = 350.3
    weekData[7] = 400.1
    const currentDay = 6
    const result = usePercentage(weekData, currentDay)
    expect(result).toBe('16.4') // (350.3 - 300.9) / 300.9 * 100 = 16.4%
  })
})
