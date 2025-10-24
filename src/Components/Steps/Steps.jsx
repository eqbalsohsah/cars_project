import React from 'react'

export default function Steps() {
  return (
    <div className='container'>
      <div className='text-center'>
        <span className='text-primary  bg-blue px-4  py-2 my-3'>HOW IT WORK</span>
        <h3 className=' fs-1 mt-3 lh-base'>Rent with following 3 working steps</h3>
        <div class="row my-5">
          <div class="col-md-4">
            <i class="fa-solid fa-location-dot bg-blue  fa-2x   text-primary rounded"></i>
            <h6 className='my-2'>Choose location</h6>
            <span className='text-muted'>Choose your and find<br/>
your best car</span>
          </div>
          <div class="col-md-4">
            <i class="fa-solid fa-calendar-days fa-2x text-primary bg-blue rounded"></i>
            <h6 className='my-2'>Pick-up date</h6>
            <span className='text-muted'>Select your pick up date and<br/>
time to book your car</span>
          </div>
          <div class="col-md-4">
            <i class="fa-solid fa-car-rear fa-2x text-primary bg-blue rounded "></i>
            <h6 className='my-2'>Book your car</h6>
            <span className='text-muted'>Book your car and we will deliver<br/>
it directly to you</span>
          </div>
        </div>
      </div>
    </div>
  )
}
