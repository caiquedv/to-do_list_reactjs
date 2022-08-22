import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>
)
