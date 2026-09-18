import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Button from '@mui/material/Button';




const Sidebar = () => {
  

  const [isOpenedCategoryFilter, setIsOpenedCategoryFilter] = useState(true);
  const [isOpenedAvailabilityFilter, setIsOpenedAvailabilityFilter] = useState(true);
  const [isOpenedSizeFilter, setIsOpenedSizeFilter] = useState(true);

  return (
    <aside className='sidebar py-5'>
      <div className='box'>
        <h3 className='w-full mb-3 text-[16px] font-medium flex items-center pr-5'>Shop by Category <Button className='w-7.5! h-7.5! rounded-full! min-w-7.5! ml-auto! text-[black]!' onClick={() => setIsOpenedCategoryFilter(!isOpenedCategoryFilter)}>

        {
          isOpenedCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
        }

        </Button></h3>
        <Collapse isOpened={isOpenedCategoryFilter}>
          <div className='scroll px-3 relative -left-3.25'>
            <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Electronic" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Bags" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Footwear" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Groceries" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Jewellery" className='w-full' />
          </div>
        </Collapse>
      </div>

      <div className='box'>
        <h3 className='w-full mb-3 text-[16px] font-medium flex items-center pr-5'>Availability<Button className='w-7.5! h-7.5! rounded-full! min-w-7.5! ml-auto! text-[black]!' onClick={() => setIsOpenedAvailabilityFilter(!isOpenedAvailabilityFilter)}>

        {
          isOpenedAvailabilityFilter === true ? <FaAngleUp /> : <FaAngleDown />
        }

        </Button></h3>
        <Collapse isOpened={isOpenedAvailabilityFilter}>
          <div className='scroll px-3 relative -left-3.25'>
            <FormControlLabel control={<Checkbox size="small" />} label="Available (17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="In Stock (10)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Not Available (17)" className='w-full' />
          </div>
        </Collapse>
      </div>

      <div className='box mt-3'>
        <h3 className='w-full mb-3 text-[16px] font-medium flex items-center pr-5'>Shop by Category <Button className='w-7.5! h-7.5! rounded-full! min-w-7.5! ml-auto! text-[black]!' onClick={() => setIsOpenedSizeFilter(!isOpenedSizeFilter)}>

        {
          isOpenedSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />
        }

        </Button></h3>
        <Collapse isOpened={isOpenedSizeFilter}>
          <div className='scroll px-3 relative -left-3.25'>
            <FormControlLabel control={<Checkbox size="small" />} label="Small (17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Medium (10)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="Large (17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="XL (17)" className='w-full' />
            <FormControlLabel control={<Checkbox size="small" />} label="XXL (17)" className='w-full' />
          </div>
        </Collapse>
      </div>

    </aside>
  )
}

export default Sidebar;
