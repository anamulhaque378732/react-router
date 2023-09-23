import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import User from './Component/User/User';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact>?</Contact>
      },
      {
        path: '/users',
        element: <User></User>
      }

    ]

  },

  {
    path: '/about',
    element: <div>I am in the about page</div>
  },
  {
    path: '/content',
    element: <div>cell me right now</div>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
