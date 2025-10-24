import React from 'react'
import person from "../../assets/img/person.png"
import girl from "../../assets/img/girl.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'


export default function Testmonial() {
  return (
    <>
   <div className='testmonial text-center my-5 p-5'>
    <span className='bg-blue text-primary fs-5 py-2 px-5'>TESTMONIAL</span>
    <h3 className=' fs-1 mt-3 lh-base my-5'>    What peole say about us?</h3>


         <Swiper
         modules={[Autoplay]}
        autoplay={{delay:3000,disableOnInteraction:false}}
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >


        <SwiperSlide>
        <div className="test_card d-flex rounded shadow-sm">
        <div class="img_card   ">
<img src={person} className='w-100 h-100'/>
        </div>
        <div className='card_body  p-3'>
       <div className='d-flex'>
         <h5 className='text-bold fs-1 text-start'>5.0</h5>
        <p className='text-muted mt-4 px-2 fs-5'>Starts</p>
       </div>
        <div className='icon text-warning text-start'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <p className='text-start mt-4 fs-5'> “I feel very secure when using caretall's services.
             Your customer care team is very enthusiastic and the driver is always on time.
             ”</p>
             <h5 className='text-start fs-4 '>Charlie Johnson </h5>
             <p className='text-muted  text-start fs-5'>From New York, US</p>

        </div>
        </div>

       </SwiperSlide>
        <SwiperSlide>
        <div className="test_card d-flex rounded shadow-sm">
        <div class="img_card   bg-danger ">
<img src={girl} className='w-100 h-100'/>
        </div>
        <div className='card_body  p-3'>
       <div className='d-flex'>
         <h5 className='text-bold fs-1 text-start'>5.0</h5>
        <p className='text-muted mt-4 px-2 fs-5'>Starts</p>
       </div>
        <div className='icon text-warning text-start'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <p className='text-start mt-4 fs-5'> “I feel very secure when using caretall's services.
             Your customer care team is very enthusiastic and the driver is always on time.
             ”</p>
             <h5 className='text-start fs-4 '>Charlie Johnson </h5>
             <p className='text-muted  text-start fs-5'>From New York, US</p>

        </div>
        </div>

       </SwiperSlide>
        <SwiperSlide>
        <div className="test_card d-flex rounded shadow-sm">
        <div class="img_card   ">
<img src={girl} className='w-100 h-100'/>
        </div>
        <div className='card_body  p-3'>
       <div className='d-flex'>
         <h5 className='text-bold fs-1 text-start'>5.0</h5>
        <p className='text-muted mt-4 px-2 fs-5'>Starts</p>
       </div>
        <div className='icon text-warning text-start'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <p className='text-start mt-4 fs-5'> “I feel very secure when using caretall's services.
             Your customer care team is very enthusiastic and the driver is always on time.
             ”</p>
             <h5 className='text-start fs-4 '>Charlie Johnson </h5>
             <p className='text-muted  text-start fs-5'>From New York, US</p>

        </div>
        </div>

       </SwiperSlide>
        <SwiperSlide>
        <div className="test_card d-flex rounded shadow-sm">
        <div class="img_card   ">
<img src={person} className='w-100 h-100'/>
        </div>
        <div className='card_body  p-3'>
       <div className='d-flex'>
         <h5 className='text-bold fs-1 text-start'>5.0</h5>
        <p className='text-muted mt-4 px-2 fs-5'>Starts</p>
       </div>
        <div className='icon text-warning text-start'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <p className='text-start mt-4 fs-5'> “I feel very secure when using caretall's services.
             Your customer care team is very enthusiastic and the driver is always on time.
             ”</p>
             <h5 className='text-start fs-4 '>Charlie Johnson </h5>
             <p className='text-muted  text-start fs-5'>From New York, US</p>

        </div>
        </div>

       </SwiperSlide>





      </Swiper>
   </div>

    </>
  )
}
