export const usePercentage = (weekData: number[], currentDay: number) => {
  const previousDay = currentDay - 1 === 0 ? 7 : (currentDay - 1)
  const diff = weekData[currentDay] - weekData[previousDay]
  const percentage = ((diff / weekData[previousDay]) * 100).toFixed(1)
  return percentage
}