import React from 'react'
import car1 from "../../assets/img/car1.png"
import { Link } from 'react-router-dom';

export default function CarCard(Props) {
    let {carInfo}=Props;
  return (

<div class="col-md-3 gy-4 shadow-sm  p-5 h-auto">
  <div>
    <img src={car1}/>
<div className=' d-flex'>
      {/* <h6>car :</h6> */}
      <p className='px-2 m-auto fw-bold my-1 '>{carInfo.car}</p>
  </div>

  <div className=' d-flex'>
    {/* <h6>car Model:</h6> */}
      <p className='px-2 m-auto fw-bold my-1 '>{carInfo.car_model}</p>
  </div>

  <div className='my-2'>
    <i class="fa-solid fa-star text-warning text-left"></i><span className='bold'>4.8  (2.436 reviews)</span>
  </div>
            <p className=' text-muted'><i class="fa-solid fa-fan"></i> Air Conditioning</p>
          <p className=' text-muted'><i class="fa-regular fa-user"></i> 2 passanger</p>
          <hr/>
           <div className=' d-flex justify-content-between'>
    <h6 className='text-muted mr-1'> price:</h6>
      <span className='px-2  text-black '>{carInfo.price}/<span className='text-muted'>day</span></span>
  </div>
 <div class="avalibility">

 </div>
 <Link to={`/cars/${carInfo.id}`}
 className='text-white btn btn-primary text-center px-3 w-100 m-auto  mt-2 '>
    Rent Now
<i class="fa-solid fa-arrow-right ms-2"></i>
 </Link>



   </div>
  </div>


  )
}
