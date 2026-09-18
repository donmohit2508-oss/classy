import React, { useState } from 'react'
import Sidebar from '../component/Sidebar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductsItem from '../component/ProductsItem';
import Button from '@mui/material/Button';
import { IoGrid } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';





const ProductListing = () => {
  const id = React.useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className='py-5 '>
      <div className='container'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            to="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            to="/material-ui/getting-started/installation/"
            className="link transition"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className='bg-white p-2 mt-4'>
        <div className='container flex gap-3'>
          <div className='sidebarWrapper w-[20%] h-full bg-white'>
            <Sidebar />
          </div>
          <div className='rightContent w-[80%] py-3'>
            <div className='bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items center justify-between'>
              <div className='col1 flex items-center'>
                <Button className='w-10! h-10! min-w-10! rounded-full! text-[black]!' ><IoGrid className='text-[#2e2e32]' /></Button>
                <Button className='w-10! h-10! min-w-10! rounded-full! text-[black]!' ><LuMenu className='text-[#2e2e32]' /></Button>
                <span className='text-[14px] font-medium pl-3 text-[#2e2e32]'>There are 27 Products</span>
              </div>

              <div className='col2 ml-auto flex items-center justify-end gap-3 pr-4'>
                <span className='text-[14px] font-medium pl-3 text-[#2e2e32]'>Sort By</span>
                <Button
                  id={buttonId}
                  aria-controls={open ? menuId : undefined}
                  aria-haspopup="true"
                  aria-expanded={open}
                  onClick={handleClick}
                  className='bg-white! text-[13px]! text-[#000000]! capitalize! font-semibold! '
                >
                  Sales, higest to lowest
                </Button>
                <Menu
                  id={menuId}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      'aria-labelledby': buttonId,
                    },
                  }}
                >
                  <MenuItem onClick={handleClose} className=' text-[13px]! text-[#000000]! capitalize! '>Sales, higest to lowest</MenuItem>
                  <MenuItem onClick={handleClose} className=' text-[13px]! text-[#000000]! capitalize!' >Relevance</MenuItem>
                  <MenuItem onClick={handleClose} className=' text-[13px]! text-[#000000]! capitalize!' >Name, A to Z</MenuItem>
                  <MenuItem onClick={handleClose} className=' text-[13px]! text-[#000000]! capitalize!' >Name, Z to A</MenuItem>
                  <MenuItem onClick={handleClose} className=' text-[13px]! text-[#000000]! capitalize!' >Price, low to high</MenuItem>
                  <MenuItem onClick={handleClose} className=' text-[13px]! text-[#000000]! capitalize!' >Price, high to low</MenuItem>
                </Menu>
              </div>
            </div>

            <div className='grid grid-cols-4 md:grid-cols-4 gap-4'>
              
              <>
              <ProductsItem />
              <ProductsItem />
              <ProductsItem />
              <ProductsItem />
              <ProductsItem />
              <ProductsItem />
              <ProductsItem />
              <ProductsItem />
              </>
            
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductListing;
