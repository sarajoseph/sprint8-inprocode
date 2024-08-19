import { describe, it, expect } from 'vitest'
import { useDay } from '../src/hooks/useDay'

describe('useDay Hook', () => {
  it('should return the correct day of the week for a given date', () => {
    // Lunes (lunes es 1)
    expect(useDay('2024-08-12')).toBe(1)

    // Domingo (domingo es 7, pero en JS, getDay devuelve 0)
    expect(useDay('2024-08-11')).toBe(7)

    // Miércoles (miércoles es 3)
    expect(useDay('2024-08-14')).toBe(3)
  })

  it('should return the current day of the week when no date is provided', () => {
    const today = new Date()
    const expectedDay = today.getDay() ? today.getDay() : 7
    expect(useDay()).toBe(expectedDay)
  })

  it('should return 7 when the date is a Sunday', () => {
    // Domingo (getDay devuelve 0, pero esperamos 7)
    expect(useDay('2024-08-18')).toBe(7)
  })

  it('should return the correct day even with different formats', () => {
    // Formatos diferentes de fecha
    expect(useDay('August 19, 2024')).toBe(1)
    expect(useDay('08/19/2024')).toBe(1)
    expect(useDay('2024-08-19T00:00:00Z')).toBe(1)
  })
})
