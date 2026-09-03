import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";



const CategoryPanel = (props) => {

    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCategory(newOpen)
    };

    const [open , setOpen] = useState(false);
    
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
            <h3 className='p-3 text-[16px] font-medium flex items-center justify-between'>Shop By Categories <IoClose onClick={toggleDrawer(false)} className='cursor-pointer text-[20px]'/></h3>
            <div className='scroll'>
                <ul className='w-full'>
                    <li className='flex items-center relative flex-col'>
                        <Button className='w-full justify-start! px-3 text-[#000001]!'>Electronics</Button>
                        <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer' onClick={() => setOpen(open === "electronics" ? "" : "electronics")}/>

                        {open === "electronics" && (
                            <ul className='submenu  w-full pl-3'>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Laptops</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Mobiles</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Cameras</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Smart Watch Accessories</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                        </ul>
                        )}
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className='flex items-center relative flex-col'>
                        <Button className='w-full justify-start! px-3 text-[#000001]!'>Bags</Button>
                        <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer' onClick={() => setOpen(open === "bags" ? "" : "bags")}/>

                        {open === "bags" && (
                            <ul className='submenu  w-full pl-3'>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Men Bags</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Women Bags</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            
                        </ul>
                        )}
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className='flex items-center relative flex-col'>
                        <Button className='w-full justify-start! px-3 text-[#000001]!'>Footwear</Button>
                        <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer' onClick={() => setOpen(open === "footwear" ? "" : "footwear")}/>

                        {open === "footwear" && (
                            <ul className='submenu  w-full pl-3'>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Men Footwear</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Women Footwear</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            
                        </ul>
                        )}
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className='flex items-center relative flex-col'>
                        <Button className='w-full justify-start! px-3 text-[#000001]!'>Fashion</Button>
                        <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer' onClick={() => setOpen(open === "fashion" ? "" : "fashion")}/>

                        {open === "fashion" && (
                            <ul className='submenu  w-full pl-3'>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Men</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            <li className='relative'>
                                <Button className='w-full justify-start! px-3 text-[#424246]!'>Women</Button>
                                <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer'/>
                            </li>
                            
                        </ul>
                        )}
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className='flex items-center relative flex-col'>
                        <Button className='w-full justify-start! px-3 text-[#000001]!'>Beauty</Button>
                        <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer' onClick={() => setOpen(open === "beauty" ? "" : "beauty")}/>
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className='flex items-center relative flex-col'>
                        <Button className='w-full justify-start! px-3 text-[#000001]!'>Groceries</Button>
                        <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer' onClick={() => setOpen(open === "beauty" ? "" : "beauty")}/>
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className='flex items-center relative flex-col'>
                        <Button className='w-full justify-start! px-3 text-[#000001]!'>Jewellery</Button>
                        <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer' onClick={() => setOpen(open === "beauty" ? "" : "beauty")}/>
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className='flex items-center relative flex-col'>
                        <Button className='w-full justify-start! px-3 text-[#000001]!'>Wellness</Button>
                        <FaRegPlusSquare className='absolute right-3.75 top-2.5 cursor-pointer' onClick={() => setOpen(open === "beauty" ? "" : "beauty")}/>
                    </li>
                </ul>
            </div>
        
        </Box>
    );
    return (
        <>
            <Drawer open={props.isOpenCategory} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default CategoryPanel;
