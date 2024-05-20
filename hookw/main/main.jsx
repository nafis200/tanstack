import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Main from './components/Main';
import Home from './components/Home';
import Menu from './components1/Menu';
import Order from './components1/Order';
import Login from './components/components2/Login';
import Signup from './components/components2/Signup';
import Authprovider from './components/components2/Authprovider';
import Secret from './components/components2/Secret';
import Privateroute from './components/components2/Privateroute';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Dashboard from './components/components2/Dashboard';
import Cart from './Dashboard/Cart';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
       {
         path:'/',
         element:<Home></Home>
       },
       {
         path: '/menu',
         element:<Menu></Menu>
       },
       {
         path:`/order/:category`,
         element:<Order></Order>
       },
       {
         path: '/login',
         element: <Login></Login>
       },
       {
         path:'/signup',
         element:<Signup></Signup>
       },
       {
         path:'/secret',
         element:<Privateroute> <Secret></Secret> </Privateroute>
       }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </HelmetProvider>
    </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>
);

