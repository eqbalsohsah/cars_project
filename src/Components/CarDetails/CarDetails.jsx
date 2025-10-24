import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import car2 from "../../assets/img/car2.png"
import axios from 'axios';


export default function CarDetails() {
 const {id} =useParams();
 const [car,setCar]=useState(null);

   const  getCars= async()=>{
          let res= await axios.get(`https://myfakeapi.com/api/cars/${id}`);
          setCar(res?.data?.Car);
        
   
      }
      useEffect(()=>{
  getCars();
      },[id]);
 
  return (
    
    <div className='container-fluid'>
     <div className='container breadcrmp mt-5' >
        <Link  className="fs-5 text-muted me-2 " to="/home">Home</Link>/
        <Link  className="fs-5 text-muted ms-2" to="/cars">Cars</Link>
        </div>
        <div className='row mt-5'>
          <div className="col-md-6  ">
<div className='bg_cardetails d-flex align-items-center justify-content-center'>
   <img src={car2} className="w-100 cardetails_img"/>
</div>
              
           
          </div>
        
        <div className="col-md-6">
          <span className='text-primary  bg-blue py-2 px-4 rounded'>WHY CHOOSE US</span>
          <h2 className='mt-3'>We offer the best experience<br/> with our rental deals</h2>
          <h6 className='text-primary'>Car Details:</h6>
            <p className='text-muted fs-4'>Car:{car?.car}</p>

          <p className='text-muted fs-4'>Car_model:{car?.car_model}</p>
           <p className='text-muted fs-4'>Car:{car?.price}</p>
          <p className='fs-5 text-muted'><i class="fa-solid fa-fan"></i> Air Conditioning</p>
          <p className='fs-5 text-muted'><i class="fa-regular fa-user"></i> 2 passanger</p>
          
        

        </div>
        </div>
   
      
    </div>)
  
}
