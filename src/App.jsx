import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import Footer from './component/Footer';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp } from 'react-icons/io5';

const MyContext = createContext();


// import Slider from './component/Slider';

const App = () => {
  
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const values = {
    setOpenCartPanel
  }

  return (
    <>
      <BrowserRouter>
      <MyContext.Provider value={values}>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ProductListing'  element={<ProductListing/>}></Route>
        <Route path='/product/:id'  element={<ProductDetails/>}></Route>
        <Route path='/login'  element={<Login/>}></Route>
        <Route path='/register'  element={<Register/>}></Route>
      </Routes>

      <Footer/>
      </MyContext.Provider>
      </BrowserRouter>

      {/* cart */}
      <Drawer open={openCartPanel} onClose={toggleCartPanel(false)} anchor={"right"} className='cartPanel'>
        <div className='flex items-center justify-between py-3 px-4 gap-3 border-b border-[#000111]'>
          <h4>Shoping Cart (1) </h4>
          <IoCloseSharp  className='text-[20px] cursor-pointer' onClick={toggleCartPanel(false)}/>
        </div>
        <div className='Scroll w-fill max-h-[300px] overflow-y-scroll overflow-x-hidden'>
          <div className='cartItem w-full flex items-center'>
            <div className='img'>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </Drawer>
      
    </>
  )
}

export default App;

export { MyContext };
