/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const useGraph = (dataGraph: number[]) => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const barBgColor = 'rgba(236, 118, 92, 1)'
  const currentBarBgColor = 'rgba(115, 182, 190, 1)'
  const greyColor = 'rgba(195, 194, 190, 1)'
  const chartData = {
    labels: weekDays,
    datasets: [
      {
        label: 'Expenses',
        data: dataGraph,
        backgroundColor: [
          barBgColor,
          barBgColor,
          barBgColor,
          barBgColor,
          barBgColor,
          barBgColor,
          currentBarBgColor
        ],
        borderRadius: 5,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: greyColor,
        }
      },
      y: {
        min: 0,
        display: true,
        border:{
          dash: [6, 6]
        },
        grid: {
          display: true,
          color: function(context: any) {
            const ticksY = context.chart.scales.y.ticks
            const arrValues: number[] = ticksY.map((o: any) => o.value)
            arrValues.sort((a, b) => b - a)
            const secondMaxValueY = arrValues[1]
            // Se dibuja cuando el valor de la línea es igual al segundo valor más alto del eje Y
            if (context.tick.value === secondMaxValueY) {
              return greyColor // Color de la línea
            }
            return 'transparent' // No mostrar otras líneas de cuadrícula
          },
        },
        ticks: {
          callback: function(value: number | string, _index: number, values: any) {
            const arrValues: number[] = values.map((o: any) => o.value)
            arrValues.sort((a, b) => b - a)
            const secondMaxValueY = arrValues[1]
            if (value === 0 || value === secondMaxValueY) {
              return value
            }
            return ''
          },
          color: greyColor
        },
      }
  }
  }

  return { chartData, options }
}