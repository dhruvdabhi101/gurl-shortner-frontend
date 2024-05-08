import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Auth/Login.jsx'

const router = createBrowserRouter (
  [
    {
      path: '/',
      element: <App/>
    }
    ,
    {
      path: '/login',
      element: <Login/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
