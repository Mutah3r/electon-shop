import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Orders from './components/Orders/Orders'
import Login from './components/Login/Login'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import { getProducts } from './loader/getProducts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: getProducts,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
