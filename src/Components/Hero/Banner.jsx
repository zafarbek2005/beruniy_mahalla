import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import shm from './shm.jpg'
import mahhalaHerro from './mahhalaHerro.png'
import './Banner.scss'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard ,Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard ,Autoplay]}
        className="mySwiper container"
      >
        <SwiperSlide>
            <img src= {shm} alt="" />
        </SwiperSlide>
        <SwiperSlide>
           <img src={mahhalaHerro} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
