import { describe, it, expect } from 'vitest'
import { useWeekData } from '../src/hooks/useWeekData'

describe('useWeekData Hook', () => {
  it('should return an array of numbers', () => {
    const weekData = useWeekData()
    expect(weekData).not.toBeNull()
    expect(typeof weekData[1]).toBe('number')
    expect(typeof weekData[2]).toBe('number')
    expect(typeof weekData[3]).toBe('number')
    expect(typeof weekData[4]).toBe('number')
    expect(typeof weekData[5]).toBe('number')
    expect(typeof weekData[6]).toBe('number')
    expect(typeof weekData[7]).toBe('number')
    expect(weekData.length).toBe(8)
  })

  it('should have undefined at index 0', () => {
    const weekData = useWeekData()
    expect(weekData[0]).toBeUndefined()
  })
})
