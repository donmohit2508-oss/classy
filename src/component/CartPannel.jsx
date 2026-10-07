import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from "react-icons/md";
import Button from '@mui/material/Button';

const CartPannel = () => {
    return (
        <>


            <div className='Scroll w-fill max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4'>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[#000111] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <img src="https://bacola-server.advanceuitechniques.com/download/file_1783945976779_xmLzZ9iF_b968ebcea8cd4f1595211aafa0520928.jpg" alt="" />
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <div className='text-[14px] font-[500]'>
                            <h4>A-Link Kurti With Sharee and Dupatta</h4>
                            <p className='flex items-center gap-5 mt-2 mb-2'>
                                Qty: <span>2</span> <span className='text-[#ff5252] font-bold'>Price: $25</span>
                            </p>
                            <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all '/>
                        </div>
                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[#000111] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <img src="https://bacola-server.advanceuitechniques.com/download/file_1783945976779_xmLzZ9iF_b968ebcea8cd4f1595211aafa0520928.jpg" alt="" />
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <div className='text-[14px] font-[500]'>
                            <h4>A-Link Kurti With Sharee and Dupatta</h4>
                            <p className='flex items-center gap-5 mt-2 mb-2'>
                                Qty: <span>2</span> <span className='text-[#ff5252] font-bold'>Price: $25</span>
                            </p>
                            <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all '/>
                        </div>
                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[#000111] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <img src="https://bacola-server.advanceuitechniques.com/download/file_1783945976779_xmLzZ9iF_b968ebcea8cd4f1595211aafa0520928.jpg" alt="" />
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <div className='text-[14px] font-[500]'>
                            <h4>A-Link Kurti With Sharee and Dupatta</h4>
                            <p className='flex items-center gap-5 mt-2 mb-2'>
                                Qty: <span>2</span> <span className='text-[#ff5252] font-bold'>Price: $25</span>
                            </p>
                            <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all '/>
                        </div>
                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[#000111] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <img src="https://bacola-server.advanceuitechniques.com/download/file_1783945976779_xmLzZ9iF_b968ebcea8cd4f1595211aafa0520928.jpg" alt="" />
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <div className='text-[14px] font-[500]'>
                            <h4>A-Link Kurti With Sharee and Dupatta</h4>
                            <p className='flex items-center gap-5 mt-2 mb-2'>
                                Qty: <span>2</span> <span className='text-[#ff5252] font-bold'>Price: $25</span>
                            </p>
                            <MdOutlineDelete className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all '/>
                        </div>
                    </div>
                </div>
            </div>

            <br />


            <div className='bottomsec absolute bottom-[10px] left-[10px] w-full pr-5'>
            <div className='bottominfo py-3 px-4 w-full border-t border-[#000111] flex items-center justyfy-between flex-col'>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-[600] text-[14px]'>1 item</span>
                    <span className='text-[#ff5252] font-bold'>$86.00</span>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-[600] text-[14px]'>Shipping</span>
                    <span className='text-[#ff5252] font-bold'>$8.00</span>
                </div>
            </div>

            <div className='bottominfo py-3 px-4 w-full border-t border-[#000111] flex items-center justyfy-between flex-col'>
                <div className='flex items-center justify-between w-full'>
                    <span className='font-[600] text-[14px]'>Total (tax excl.)</span>
                    <span className='text-[#ff5252] font-bold'>$93.00</span>
                </div>
                
                
                <br />
                <div className='flex items-center justify-between w-full gap-5'>
                    <Button className='btn-org btn-lg w-[50%]'>View Cart</Button>
                    <Button className='btn-org btn-lg w-[50%]'>Checkout</Button>
                </div>

            </div>
            </div>


        </>
    )
}

export default CartPannel;
