import React from 'react'
import ios from "../../assets/img/ios.png"
import andriod from "../../assets/img/andriod.png"
import iphone from "../../assets/img/iphone.png"


export default function DownloadApp() {
  return (
    <>
    <div className='download container   px-2'>
<div class="row">
    <div className="col-md-6">
        <h3 className=' fs-3 mt-3 ' >Download Rentcars<br/> App for<span className='text-primary'>FREE</span> </h3>
        <p>For faster, easier booking and exclusive deals.</p>
       <div className="d-flex   mt-1" >
                       <img src={ios} className="me-2"/>
                          <img src={andriod}/>

                     </div>

    <form className=' w-75 '>
        <input type="text" className='form-control my-2 rounded-pill  bg-blue p-2 ' placeholder='Name'/>
          <input type="number" className='form-control  rounded-pill my-2 bg-blue p-2' placeholder='phone'/>
            <input type="email" className='form-control  bg-blue rounded-pill p-2' placeholder='email'/>
          <button className= ' btn bg-primary text-white rounded-pill w-25 m-auto d-block mt-2 ' value="submit">send</button>

    </form>
    </div>
    <div className='col-md-6 '>
      <div className='d-flex justify-content-center align-items-end d-md-block d-none mb-0'>
          <img src={iphone} alt="iphone" className='w-75   '/>
      </div>

    </div>
</div>
    </div>

    </>
  )
}
