import React from 'react'
import logo_footer from "../../assets/img/logo-footer.png"

export default function Footer() {
  return (
    <div class="footer bg-footer text-white p-5 ">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div className='mb-4'>
            <img src={logo_footer}/>
          </div>
         <div className='d-flex align-items-center'>
           <i className="fa-solid fa-location-dot fa-x"></i>
          <span className='px-2'>25566 Hc 1, Glenallen, Alaska,<br/> 99588, USA</span>
         </div>
          <br/>
       <div  className='d-flex align-items-center'>
             <i className="fa-solid fa-phone fa-x"></i>
            <span className='px-2'>+603 4784 273 12</span>
       </div>
            <br/>
          <div className='d-flex align-items-center'>
             <i className="fa-solid fa-envelope" ></i>
             <span className='px-2'>rentcars@gmail.com</span>
          </div>
        </div>

        <div class="col-sm-2">
          <h6 className='mb-3'>Our Product</h6>
          <ul >
            <li> Career</li>
              <li> Car</li>
                <li>Package</li>
                  <li>Features</li>
                    <li>Principle</li>
          </ul>
        </div>
         <div class="col-sm-2">
            <h6 className='mb-3'>Resources</h6>
          <ul >
            <li> Download</li>
              <li> Help Centre</li>
                <li>Guides</li>
                  <li>Partner Network</li>
                    <li>Cruises</li>
                     <li>Developer</li>
                    </ul>
        </div>
         <div class="col-sm-2">
            <h6 className='mb-3'>About Rentcars</h6>
          <ul >
            <li> Why choose us</li>
              <li>Our Story</li>
                <li>Investor Relations</li>
                  <li>Press Center</li>
                    <li>Advertise</li>
                    </ul>
        </div>
         <div class="col-sm-2">
            <h6 className='mb-3'>Follow Us</h6>
         <i class="fa-brands fa-square-facebook fa-2x me-2"></i>
         <i class="fa-brands fa-square-instagram fa-2x me-2"></i>
         <i class="fa-brands fa-youtube fa-2x "></i>
        </div>

      </div>
    </div>
    </div>
  )
}
