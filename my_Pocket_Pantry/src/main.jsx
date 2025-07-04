import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import Home from '../pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
  </StrictMode>,
)
