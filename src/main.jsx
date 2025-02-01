
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthState from './context/index.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthState>
    <App />
  </AuthState>
  </BrowserRouter>
)
