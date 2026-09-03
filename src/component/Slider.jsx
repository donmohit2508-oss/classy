import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <>

            <div className='py-4'>
                    <Swiper  slidesPerView={1.2} centeredSlides={true} navigation={true} spaceBetween={10} modules={[Navigation, Autoplay]} autoplay={{ delay: 2000 }} className="mySwiper swiper-img">
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760352199/1760352196147_banner7.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760352063/1760352059789_banner5.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760352479/1760352476203_banner1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760349204/1760349201500_Banner3.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760352077/1760352074636_banner6.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760352479/1760352476203_banner1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://res.cloudinary.com/dwfml89qp/image/upload/v1760350321/1760350318572_Banner4.jpg" alt="" />
                        </SwiperSlide>
                        
                    </Swiper>
            </div>

        </>
    )
}

export default Slider;
