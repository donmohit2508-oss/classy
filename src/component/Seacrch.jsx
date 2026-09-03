import React from 'react';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";


const Seacrch = () => {
  return (
    <div className='searchBox w-full  bg-[#e5e5e5] rounded-[5px] relative p-3 pr-12'>
      <input type="text" placeholder='Search for products...' className='w-full outline-none' />
      <Button className='absolute! right-1.5 z-50 w-2! rounded-full!'>
        <FaSearch className='text-black'/>
      </Button>
    </div>
  )
}

export default Seacrch;
