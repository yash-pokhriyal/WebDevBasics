import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {App} from './App.jsx'
// import Suman from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Suman /> */}
    <App />

  </StrictMode>,
)
