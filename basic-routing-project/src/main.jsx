import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { RouterProvider } from 'react-router'
import { router } from './router'
import NavBar from './components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
)
