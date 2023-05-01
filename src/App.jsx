
import HeaderPage from './Shared/header'
import HomePage from './Pages/home'

import WellnessPage from './Pages/wellness'
import BeautyPage from './Pages/beauty'
import FitnessPage from './Pages/fitness'

import ShopPage from './Pages/shop'

import CartPage from './Pages/cart'
import NotFound from './Pages/error'
import ProductPage from './Pages/product'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Slider from './slider/slider'


import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  useLocation
} from "react-router-dom";



const router = createBrowserRouter([{
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    }, {
      path: "/wellness",
      element: <WellnessPage />,
    }, {
      path: "/beauty",
      element: <BeautyPage />,
    }, {
      path: "/fitness",
      element: <FitnessPage />,
    }, {
      path: "/shop",
      element: <ShopPage />,
    }, {
      path: "/cart",
      element: <CartPage />,
    }, {
      path: "/product/:id",
      element: <ProductPage />,
    }, {
      path: "/error",
      element: <NotFound />,
    },

  ]
},
  ,
]);

import React, { Component } from 'react';
import Layout from './Shared/layout'
import CartProvider from './store/cartcontext'


function App() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
