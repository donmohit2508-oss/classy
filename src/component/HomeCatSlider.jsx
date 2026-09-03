import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";


const HomeCatSlider = () => {
    return (
        <>
            <div className='py-5 homecatslider'>
                <div className='container'>
                    <Swiper navigation={true} slidesPerView={7} spaceBetween={30} modules={[Navigation]} className="mySwiper catslider overflow-hidden! flex items-center!">
                        <SwiperSlide>
                            <Link to="/">
                                <div className='p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760186931/1760186917128_Fashion.png" alt=""  className='w-15'/>
                                <h3 className='text-[16px] font-medium'>Fashion</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link>
                                <div className='p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760186960/1760186947523_Electronics.png" alt=""  className='w-15'/>
                                <h3 className='text-[16px] font-medium'>Electronics</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className='p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760187076/1760187063603_Bags.png" alt=""  className='w-15'/>
                                <h3 className='text-[16px] font-medium'>Bags</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className='p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760187094/1760187080496_Footwear.png" alt=""  className='w-15'/>
                                <h3 className='text-[16px] font-medium'>Footwear</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className='p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760187141/1760187127470_Groceries.png" alt=""  className='w-15'/>
                                <h3 className='text-[16px] font-medium'>Groceries</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className='p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760187220/1760187206726_Jewellery.png" alt=""  className='w-15'/>
                                <h3 className='text-[16px] font-medium'>Jewellery</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className='p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760187180/1760187166944_Beauty.png" alt=""  className='w-15'/>
                                <h3 className='text-[16px] font-medium'>Beauty</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/">
                                <div className='p-3 bg-white rounder-sm text-center flex items-center justify-center flex-col'>
                                <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760187207/1760187194162_Wellness.png" alt=""  className='w-15'/>
                                <h3 className='text-[16px] font-medium'>Wellness</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeCatSlider;
