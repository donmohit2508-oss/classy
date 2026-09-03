import React from 'react'
import { Link } from "react-router-dom";
import Seacrch from './Seacrch';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';





const Header = () => {
    return (
        <>
            <header className='bg-white'>
                <div className='top-strip border border-gray-300 py-2'>
                    <div className='container'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p className='text-[14px] font-medium'>Get up to 50% off new season styles, limited time only</p>
                            </div>
                            <div className='customer-qurry'>
                                <ul className='flex items-center gap-5 font-medium text-[13] transition'>
                                    <li><Link to="/help-center">Help Center</Link></li>
                                    <li><Link to="/order-tracking">Order Tracking</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header py-4 border border-gray-300'>
                    <div className='container'>
                        <div className='flex items-center justify-between '>
                            <div className='col1 w-[25%]'>
                                <Link to={"/"}>
                                    <img src="logo.jpg" alt="" />
                                </Link>
                            </div>
                            <div className='col2 w-[45%]'>
                                <Seacrch />
                            </div>
                            <div className='col3 w-[30%] flex items-center pl-30'>
                                <ul className='login flex items-center justify-between w-full'>
                                    <li>
                                        <Link to="/login" className='font-medium text-[15] transition'>Login</Link>
                                    </li>&nbsp; | &nbsp;
                                    <li>
                                        <Link to="/register" className='font-medium text-[15] transition'>Register</Link>
                                    </li>
                                    <li className='flex items-center gap-3 pl-3'>
                                        <Tooltip title="Compare">
                                            <IconButton aria-label="show 0 unread messages">
                                                <Badge badgeContent={3} showZero>
                                                    <GoGitCompare />
                                                </Badge>
                                            </IconButton>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip title="Wishlist">
                                            <IconButton aria-label="show 0 unread messages">
                                                <Badge badgeContent={0} showZero>
                                                    <MdOutlineShoppingCart />
                                                </Badge>
                                            </IconButton>
                                        </Tooltip>
                                    </li>
                                    <li>
                                        <Tooltip title="Cart">
                                            <IconButton aria-label="show 0 unread messages">
                                                <Badge badgeContent={0} showZero>
                                                    <FaRegHeart />
                                                </Badge>
                                            </IconButton>
                                        </Tooltip>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Navigation/>
            </header>
        </>
    )
}

export default Header;
