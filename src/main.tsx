import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TodosProvider } from './context/context.tsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';
import { ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <TodosProvider>
            <App />
        </TodosProvider>
      </QueryClientProvider>
    <ToastContainer 
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
       />
  </BrowserRouter>
)
