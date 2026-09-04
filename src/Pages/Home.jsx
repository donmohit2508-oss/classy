import React from 'react'
import Slider from '../component/Slider';
import HomeCatSlider from '../component/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from '../component/AdsBannerSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from '../component/ProductsSlider';

const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Slider />
      <HomeCatSlider />

      <section className=' bg-white pb-15'>
        <div className='container'>
          <div className='flex items-center justify-between py-5'>
            <div className='left-sec'>
              <h3 className='text-[20px] font-semibold'>Popular Products</h3>
              <p className='text-[14px] font-medium text-[#303030] pt-2'>Do not miss the current offers until the end of March.</p>
            </div>
            <div className="right-sec w-[50%] ">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="product categories">

                  <Tab label="Fashion"/>
                  <Tab label="Electronics"  />
                  <Tab label="Wellness" />
                  <Tab label="Beauty" />
                  <Tab label="footwears" />
                  <Tab label="Bags" />
                  <Tab label="Groceries" />
                  <Tab label="Jewellery" />
                </Tabs>
            </div>
          </div>
          <ProductsSlider items={5}/>
        </div>
      </section>

      <section className='py-5 bg-white'>
        <div className='container'>
          <div className='freeShipping w-[80%] m-auto p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-8'>
            <div className='col1 flex items-center gap-5 ]'>
              <FaShippingFast className='text-[50px]' />
              <h3 className='uppercase font-semibold text-[20px]'>Free Shipping</h3>
            </div>
            <div className='col2 font-medium '>
              <p>Free Delivery Now on your First Order and over $200</p>
            </div>
            <div className='col3 font-bold text-[25px]'>-Only $200*</div>
          </div>
          <AdsBannerSlider items={4} />
        </div>
      </section>


      <br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Home;


