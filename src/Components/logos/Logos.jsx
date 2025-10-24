import React from 'react'
import nissan from "../../assets/img/nissan.png"
import audi from "../../assets/img/audi.png"
import volvo from "../../assets/img/volvo.png"
import ac from "../../assets/img/ac.png"
import jagar from "../../assets/img/jaguar.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'


export default function Logos() {
  return (
   <div>
      <Swiper className='  container-fluid my-3'
      spaceBetween={50}
      slidesPerView={6}
      modules={[Autoplay]}
      autoplay={{delay:1000,disableOnInteraction:false}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={nissan} className="img-fluid"/></SwiperSlide>
      <SwiperSlide><img src={ac} className='img-fluid'/></SwiperSlide>
      <SwiperSlide><img src={volvo} className='img-fluid'/></SwiperSlide>
      <SwiperSlide><img src={jagar} className='img-fluid'/></SwiperSlide>
       <SwiperSlide><img src={audi} className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={volvo} className='img-fluid'/></SwiperSlide>
          <SwiperSlide><img src={nissan} className="img-fluid"/></SwiperSlide>
      <SwiperSlide><img src={ac} className='img-fluid'/></SwiperSlide>
      <SwiperSlide><img src={volvo} className='img-fluid'/></SwiperSlide>
      <SwiperSlide><img src={jagar} className='img-fluid'/></SwiperSlide>
       <SwiperSlide><img src={audi} className='img-fluid'/></SwiperSlide>
        <SwiperSlide><img src={volvo} className='img-fluid'/></SwiperSlide>
      
    </Swiper>
   </div>
  )
}

