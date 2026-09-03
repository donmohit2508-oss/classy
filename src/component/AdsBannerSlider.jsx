import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BannerBox from './BannerBox';


const AdsBannerSlider = (props) => {
  return (
    <div className='py-5 w-full'>
      <Swiper navigation={true} slidesPerView={props.items} spaceBetween={10} modules={[Navigation]} className="AdsBanner mySwiper overflow-hidden! flex items-center! ">

        <SwiperSlide>
            <BannerBox img={"banner1.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={"banner2.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={"banner3.jpg"}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={"banner4.webp"}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={"banner5.jpg"}/>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default AdsBannerSlider;
