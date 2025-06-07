import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tenzies from './Tenzies.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tenzies />
  </StrictMode>,
)
