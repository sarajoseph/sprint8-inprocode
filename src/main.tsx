import { createRoot } from 'react-dom/client'
import { App } from './pages/App.tsx'
import { WeeklyExpensesProvider } from './context/WeeklyExpensesContext.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <WeeklyExpensesProvider>
    <App />
  </WeeklyExpensesProvider>
)
