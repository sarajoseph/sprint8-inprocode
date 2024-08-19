export const useDay = (date: string | null = null) => {
  const d = date === null ? new Date() : new Date(date)
  const currentDay = d.getDay() ? d.getDay() : 7
  return currentDay
}