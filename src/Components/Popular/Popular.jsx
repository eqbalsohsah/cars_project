import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CarCard from '../Car Card/CarCard';
import { Link } from 'react-router-dom';


export default function Popular() {
    const [cars ,setCars]=useState([]);
    const [searchInput,setSearchInput]=useState("");
    const handelChange=(e)=>{
      setSearchInput(e.target.value);
      console.log(searchInput);

    }
    const filterCars=cars.filter((car)=>
    car.car.toLowerCase().includes(searchInput.toLowerCase())
    )
    const  getCars= async()=>{
        let response= await axios.get("https://myfakeapi.com/api/cars/");
        setCars(response.data.cars.slice(0,4));

    }
    useEffect(()=>{
getCars();
    },[])
  return (
    <div>
      <div  className='input-group container'>

        <input type="text" placeholder='search by name'  className='form-control'
        onChange={handelChange}/>
        <button class="btn btn-primary">search</button>
        </div>
        <div className='text-center my-5'>
           <span className="text-primary btn btn-outline bg-blue px-4 py-2">POPULAR RENTAL DEALS</span>
           <h3 className=' fs-1 mt-3 lh-base'>Most popular cars rental deals</h3>
        </div>
        <div class="container">
        <div class="row ">
     {filterCars.map((car)=>(

          < CarCard  key={car.id} carInfo={car}/>





     ))};


</div>
   </div>
  <div className='text-center my-3' >
     <Link to="/cars" className='btn  text-muted fs-5 border  px-3 mb-2'>
   Show all vehicles
   <i class="fa-solid fa-arrow-right ms-2"></i>
   </Link>
  </div>
    </div>
  )
}
