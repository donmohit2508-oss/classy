import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';
import CategoryPanel from './CategoryPanel';


const Navigation = () => {

    const [isOpenCategory, setIsOpenCategory] = useState(false);

    const openCategoryPanel=()=>{
        setIsOpenCategory(true);
    }
    return (
        <>
            <nav className='py-2'>
                <div className='container flex justify-between items-center gap-8'>
                    <div className='col_1 w-[20%]'>
                        <Button className='text-black! gap-2' onClick={openCategoryPanel}><RiMenu2Fill className='text-[18px]' />SHOP BY CATEGORIES<LiaAngleDownSolid className='text-[14px] ml-auto font-bold ' /></Button>
                    </div>
                    <div className='col_2 w-[60%] flex category-link'>
                        <ul className='flex items-center gap-12 text-[#4f4f4f]'>
                            <li>
                                <Link to="/" className='text-[14px] font-medium transition'>Home</Link>
                                
                            </li>
                            <li className='relative group'>
                                <Link to="/Electronics" className='text-[14px] font-medium transition'>Electronics</Link>
                                <div className='submenu absolute top-[120%] left-[0%] min-w-56 bg-white shadow-md opacity-0 invisible transition-all'>
                                    <ul>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Laptops</Button>
                                            </Link>
                                        </li>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Mobiles</Button>
                                            </Link>
                                        </li>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Cameras</Button>
                                            </Link>
                                        </li>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Smart Watch Accesories</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='relative group'>
                                <Link to="/Bags" className='text-[14px] font-medium transition'>Bags</Link>
                                <div className='submenu absolute top-[120%] left-[0%] min-w-50 bg-white shadow-md opacity-0 invisible transition-all'>
                                    <ul>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Men Bags</Button>
                                            </Link>
                                        </li>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Women Bags</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='relative group'>
                                <Link to="/Footwear" className='text-[14px] font-medium transition'>Footwear</Link>
                                <div className='submenu absolute top-[120%] left-[0%] min-w-50 bg-white shadow-md opacity-0 invisible transition-all'>
                                    <ul>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Men Footwears</Button>
                                            </Link>
                                        </li>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Women Footwears</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='relative group'>
                                <Link to="/Fashion" className='text-[14px] font-medium transition'>Fashion</Link>
                                <div className='submenu absolute top-[120%] left-[0%] min-w-50 bg-white shadow-md opacity-0 invisible transition-all'>
                                    <ul>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Mens</Button>
                                            </Link>
                                        </li>
                                        <li className='w-full'>
                                            <Link to = "/">
                                                <Button className='text-[#383737]! w-full text-left! font-medium justify-start!'>Womens</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='relative group'>
                                <Link to="/Beauty" className='text-[14px] font-medium transition'>Beauty</Link>
                            </li>
                            <li className='relative group'>
                                <Link to="/Groceries" className='text-[14px] font-medium transition'>Groceries</Link>
                            </li>
                            <li className='relative group'>
                                <Link to="/Jewellery" className='text-[14px] font-medium transition'>Jewellery</Link>
                            </li>
                            <li className='relative group'>
                                <Link to="/Wellness" className='text-[14px] font-medium transition'>Wellness</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col_3 w-[20%]'>
                        <p className='text-[14px] font-medium transition pl-5 flex justify-end items-center gap-3 pr-4'><GoRocket className='text-[14px]' />Free International Delivery</p>
                    </div>
                </div>
            </nav>

            {/* category panel component */}
            <CategoryPanel setIsOpenCategory={setIsOpenCategory} isOpenCategory={isOpenCategory}/>
        </>
    )
}

export default Navigation;
