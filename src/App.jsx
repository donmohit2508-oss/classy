import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import Footer from './component/Footer';
import ProductDetails from './Pages/ProductDetails';
// import Slider from './component/Slider';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ProductListing'  element={<ProductListing/>}></Route>
        <Route path='/product/:id'  element={<ProductDetails/>}></Route>
      </Routes>

      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App;
