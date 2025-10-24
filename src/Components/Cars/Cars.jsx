import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CarCard from '../Car Card/CarCard';
import Pagination from '../Pagination/Pagination';
import "./Cars.css"




export default function Cars() {
     const [cars ,setCars]=useState([]);
      const [searchInput,setSearchInput]=useState("");
        const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;
      const handelChange=(e)=>{
        setSearchInput(e.target.value);
        console.log(searchInput);

      }
      const filterCars=cars.filter((car)=>
      car.car.toLowerCase().includes(searchInput.toLowerCase())
      )
       const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filterCars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePagination = (pageNumber) => setCurrentPage(pageNumber);
      const  getCars= async()=>{
          let response= await axios.get("https://myfakeapi.com/api/cars/");
          setCars(response.data.cars);

      }
      useEffect(()=>{
  getCars();
      },[])
  return (
     <div >
       <div className='container breadcrmp mt-5' >
        <Link  className="fs-5 text-muted me-2 " to="/home">Home</Link>/
        <Link  className="fs-5 text-muted ms-2" to="/cars">Cars</Link>
        </div>
  <div  className='input-group container mt-5'>

        <input type="text" placeholder='search by name'  className='form-control'
        onChange={handelChange}/>
        <button class="btn btn-primary">search</button>
        </div>
        <div className='text-center my-5'>
           <span className="text-primary bg-blue px-4 py-2 ">POPULAR RENTAL DEALS</span>
           <h3 className='my-2 fw-bold fs-5'>Most popular cars rentaldeals </h3>
        </div>
        <div className='container'>
          <div class="row">



           {currentCars.map((car)=>
           <CarCard carInfo={car}/>

           )}

          </div>
        </div>
         <Pagination
          carsPerPage={carsPerPage}
          length={filterCars.length}
          handlePagination={handlePagination}
          currentPage={currentPage}
        />


   </div>



     )

}
