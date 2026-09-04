import React from 'react';
import {Link} from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineZoomOutMap } from "react-icons/md";



const ProductsItem = () => {
  return (
    <div className='productsitem  rounded-md overflow-hidden border border-[#0000001a] shadow-lg'>
      <div className='group imgWrapper rounded-md w-full h-80 overflow-hidden relative'>
        <img src="https://bacola-server.advanceuitechniques.com/download/file_1783945976779_xmLzZ9iF_b968ebcea8cd4f1595211aafa0520928.jpg" alt="" className='w-full object-cover'/>
        <span className='discount flex items-center absolute top-2.5 left-2.5 bg-[#ff5252] text-white text-[12px] p-2 rounded-md'>10%</span>
        <div className='actions absolute -top-50 right-1.25 flex items-center gap-2 flex-col w-12.5 transition-all group-hover:top-3.75'>
          <Button className='w-8.75 h-8.75 min-w-0! bg-white! rounded-full! hover:bg-[#ff5252]! hover:text-white! text-black!'>
            <MdOutlineZoomOutMap className='text-[18px] '/>
          </Button>
          <Button className='w-8.75 h-8.75 min-w-0! bg-white! rounded-full! hover:bg-[#ff5252]! hover:text-white! text-black!'>
            <GoGitCompare className='text-[18px] '/>
          </Button>
          <Button className='w-8.75 h-8.75 min-w-0! bg-white! rounded-full! hover:bg-[#ff5252]! hover:text-white! text-black!'>
            <FaRegHeart className='text-[18px] '/>
          </Button>
        </div>
      </div>

      <div className='info p-3 bg-[#f1f1f1] '>
        <h6 className='text-[14px]'><Link to="/" className='link transition-all'>Soylent Green</Link></h6>
        <h3 className='text-[14px] title mt-2 font-medium mb-1 text-[#000001]'><Link to="/" className='link transition-all'>Siril Geogette Pink Color Saree with Blouse piece</Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly/>
        <div className='flex items-center gap-4'>
          <span className='oldPrice line-through text-gray-500'>$58.00</span>
          <span className='oldPrice text-[#ff5252] font-bold'>$58.00</span>
        </div>
        
      </div>
    </div>
  )
}

export default ProductsItem;


