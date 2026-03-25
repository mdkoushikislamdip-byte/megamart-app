import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Layout from './components/Layout'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Registration from './pages/Registration'




const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/registration' element={<Registration />} />
        <Route path="/" element ={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<ProductDetails/>} />
         </ Route>
      </Routes>
   </BrowserRouter>
   
  )
}

export default App
