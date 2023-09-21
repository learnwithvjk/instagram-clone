import React from 'react'
import ReactDOM from 'react-dom/client'
import '@src/index.css'
import Routes from './routes/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
