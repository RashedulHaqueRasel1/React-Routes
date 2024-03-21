import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Users from './component/Users/Users';
import App from './App.jsx'
import UserDetails from './component/UserDetails/UserDetails.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/about",
        element : <About></About>
      }, 
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path : '/users/:id',
        loader : ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails></UserDetails>
      }
    ],
  },
 

]);

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
