import React from 'react'
import car from "../../assets/img/car2.png"
import user from "../../assets/img/user.png"
import chat from "../../assets/img/chat.png"
import message from "../../assets/img/message.png"


export default function Experience() {
  return (
    <div >
      <div className='container-fluid my-5'>
        <div class="row">
            <div class="col-md-6">
           <div className='bg_experience d-flex align-items-center justify-content-center'>
             <img src={car} className='w-100 experience_img' alt="car"/>
           </div>
                
            </div>
            <div class="col-md-6">
              <span className='bg-blue px-3 py-2'>WHY CHOOSE US</span>
              <h4 className='my-4'>We offer the best experience <br/>with our rental deals</h4>
              <div className='d-flex ' >
                <div className='icon '>
                 <img src={user} alt=""/>
                </div>
                <div class="title ms-3">
                  <h4>Best price guaranteed</h4>
                  <p className='text-muted '>Find a lower price? We’ll refund you 100%<br/>
of the difference.</p>
                </div>
              </div>
               <div className='d-flex ' >
                <div className='icon'>
<img src={user} alt=""/>
                </div>
                <div class="title ms-3">
                  <h4>Experience driver</h4>
                  <p className='text-muted '>Find a lower price? We’ll refund you 100%<br/>
of the difference.</p>
                </div>
              </div>
               <div className='d-flex ' >
                <div className='icon  '>
                  <img src={message} alt=""/>
                </div>
                <div class="title ms-3">
                  <h4>Best price guaranteed</h4>
                  <p className='text-muted '>Find a lower price? We’ll refund you 100%<br/>
of the difference.</p>
                </div>
              </div>
               <div className='d-flex ' >
                <div className='icon  '>
                 <img src={chat} alt=""/>
                </div>
                <div class="title ms-3">
                  <h4>Best price guaranteed</h4>
                  <p className='text-muted '>Find a lower price? We’ll refund you 100%<br/>
of the difference.</p>
                </div>
              </div>
            </div>
        </div>
       
      </div>
      
     
    </div>
  )
}
