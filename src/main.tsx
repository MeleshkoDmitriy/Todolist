import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TodosProvider } from './context/context.tsx'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TodosProvider>
          <App />
        </TodosProvider>
      </QueryClientProvider>
  </BrowserRouter>
)
