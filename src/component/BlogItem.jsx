import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


const BlogItem = () => {
  return (
    <div className='blogItem '>
      <div className='imageWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
        <img src="https://gilded-haupia-bb8875.netlify.app/banner1.webp" alt="" className='w-full transition-all hover:scale-105 object-cover!'/>
        <span className='flex items-center justify-center text-white absolute bottom-3.75 right-3.75 bg-[#ff5252] rounded-md p-1 text-[11px] font-medium gap-1'>
          <IoMdTime className='text-[16px]'/> 5 April, 2023
        </span>
        {/* <img src="https://gilded-haupia-bb8875.netlify.app/banner2.webp" alt="" />
        <img src="https://gilded-haupia-bb8875.netlify.app/banner3.webp" alt="" />
        <img src="https://gilded-haupia-bb8875.netlify.app/banner4.webp" alt="" /> */}
      </div>

      <div className="info p-4">
          <h2 className="text-[16px] text-[black] font-semibold link pb-2">Nullam ullamcorper ornare molestie</h2>
          <p className="text-[13px] text-[rgba(0,0,0,0.8)] font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum incidunt dolorem atque ...</p>
          <Link className="link font-bold text-[14px] flex items-center gap-1 py-3">Read More <IoIosArrowForward/></Link>
      </div>
    </div>
  )
}

export default BlogItem;
