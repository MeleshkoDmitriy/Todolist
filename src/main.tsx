import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TodosProvider } from './context/context.tsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <TodosProvider>
            <App />
        </TodosProvider>
      </QueryClientProvider>
  </BrowserRouter>
)
