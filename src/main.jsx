import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage/homePage'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HomePage/>
    </StrictMode>,
)
