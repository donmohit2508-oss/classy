import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './Pages/Home';
// import Slider from './component/Slider';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App;
