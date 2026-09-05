import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import Button from '@mui/material/Button';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";






const Footer = () => {
    return (
       <>
        <footer className='py-6 bg-[#fafafa]'>
            <div className='container'>
                <div className='flex items-center justify-center gap-2 py-8 pb-8'>
                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <LiaShippingFastSolid className='text-[40px] transition-all group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-semibold mt-2'>Free Shiping</h3>
                        <p className='text-[12px] font-normal'>For all Orders over $100</p>
                    </div>
                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <PiKeyReturn className='text-[40px] transition-all group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-semibold mt-2'>30 Days Return</h3>
                        <p className='text-[12px] font-normal'>For an Exchange Products</p>
                    </div>
                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <IoWalletOutline className='text-[40px] transition-all group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-semibold mt-2'>Secure Payment</h3>
                        <p className='text-[12px] font-normal'>Payment Cards Accepted</p>
                    </div>
                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <IoGiftOutline className='text-[40px] transition-all group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-semibold mt-2'>Special Gifts</h3>
                        <p className='text-[12px] font-normal'>Our First Product Order</p>
                    </div>
                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <BiSupport className='text-[40px] transition-all group-hover:text-[#ff5252] group-hover:-translate-y-1' />
                        <h3 className='text-[16px] font-semibold mt-2'>Support 24/7</h3>
                        <p className='text-[12px] font-normal'>Contact Us Anytime</p>
                    </div>

                </div>
                
                <br />
                <hr />


                <div className='footer flex  py-8'>
                    <div className='part1 w-[25%] border-r border-[#4b4b4b]'>
                        <h2 className='text-[18px] font-semibold mb-4'>Contact Us</h2>
                        <p className='text-[13px] font-normal pb-4'>Classyshop - Mega Super Store <br /> 507-Union Trade Center France</p>

                        <Link className='link text-[13px]' to="mailto:someone@example.com">sales@yourcompany.com</Link>
                        <span className='text-[22px] font-semibold block mt-3 mb-5 text-[#ff5252]'>(+91) 9876-543-210</span>
                        <div className='flex items-center gap-2'>
                            <IoChatboxOutline className='text-[40px] text-[#ff5252]'/>
                            <span className='text-[16px] font-semibold'>Online Chat <br /> Get Expert Help</span>
                        </div>
                    </div>

                    <div className='part2 w-[40%] flex pl-8'>
                        <div className='part2-col1 w-[50%]'>
                            <h2 className='text-[18px] font-semibold mb-4'>Products</h2>
                            <ul className='list'>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Prices drop</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>New Products</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Best sales</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Contact Us</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Sitemap</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Stores</Link></li>
                            </ul>
                        </div>
                        <div className='part2-col2 w-[50%]'>
                            <h2 className='text-[18px] font-semibold mb-4'>Our Company</h2>
                            <ul className='list'>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Delivery</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Legal Notice</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Terms And Conditions Of Use</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>About Us</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Secure Payment</Link></li>
                                <li className='text-[14px] w-full mb-2'><Link to="/" className='link'>Login</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='part3 w-[35%] flex pl-8 flex-col pr-8'>
                        <h2 className='text-[18px] font-semibold mb-4'>Subscribe To Newsletter</h2>
                        <p className='text-[13px]'>Subscribe to our latest newslater to get news about special discounts.</p>

                        <form className='mt-5'>
                            <input type="text" className='w-full h-11.25 border outline-none rounded-sm pl-3 pr-3 pl mb-4 ' placeholder='Your Email Address'/>

                            <Button className='btn-org py-2! px-4!'>SUBSCRIBE</Button>
                        </form>
                        <FormControlLabel control={<Checkbox  />} label="I agree to the term and conditions and  the privacy policy" />
                    </div>

                </div>

            </div>
        </footer>

        <div className='bottomStrip border-t border-[#000001] py-3 bg-[white]'>
            <div className='container flex items-center justify-between'>
                <ul className='flex items-center gap-2'>
                    <li><Link to='/' target='_blank' className='w-8.75 h-8.75 rounded-full border border-[#000001] flex items-center justify-center group hover:bg-[#ff5252] transition-all'><FaFacebookF className='text-[15px] group-hover:text-[white]'/></Link></li>
                     <li><Link to='/' target='_blank' className='w-8.75 h-8.75 rounded-full border border-[#000001] flex items-center justify-center group hover:bg-[#ff5252] transition-all'><FiYoutube className='text-[15px] group-hover:text-[white]'/></Link></li>
                      <li><Link to='/' target='_blank' className='w-8.75 h-8.75 rounded-full border border-[#000001] flex items-center justify-center group hover:bg-[#ff5252] transition-all'><FaInstagram className='text-[15px] group-hover:text-[white]'/></Link></li>
                </ul>
                <p className='text-[14px] text-center'>© 2024 - Ecommerce Template</p>
            </div>
        </div>
       </>


    )
}

export default Footer
