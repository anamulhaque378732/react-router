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
import UserDetails from './Component/UserDetails/UserDetails';
import Posts from './Component/Posts/Posts';

import PostDetails from './Component/PostDetails/PostDetails';
import ErrorPages from './Component/ErrorPages/ErrorPages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPages></ErrorPages>,
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
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),

        element: <UserDetails></UserDetails>

      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },




    ]

  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
