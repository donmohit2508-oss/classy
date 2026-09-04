import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductsItem from './ProductsItem';

const ProductsSlider = (props) => {
  return (
    <section className='ProductsSlider'>
        <Swiper navigation={true} slidesPerView={props.items} spaceBetween={10} modules={[Navigation]} className="mySwiper AdsBanner">
          <SwiperSlide>
            <ProductsItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem/>
          </SwiperSlide>
          <SwiperSlide>
            <ProductsItem/>
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default ProductsSlider;
