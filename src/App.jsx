import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './components/Layout'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Auth from './pages/Auth'





const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path="/" element ={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<ProductDetails/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
         </ Route>
      </Routes>
   </BrowserRouter>
   
  )
}

export default App;
