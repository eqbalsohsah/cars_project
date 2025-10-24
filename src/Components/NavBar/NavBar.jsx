import React from 'react'
import { Link } from 'react-router-dom'
import logo  from"../../assets/img/logo.png"


export default function NavBar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand text-primary fs-5" href="#"><img src={logo}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Become a renter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Rental deals</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="#">How it work</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="#">Why choose us</Link>
        </li>
      
      </ul>
      <div className=''>
        <button className='btn btn-outlined mx-1'>Sign in</button>
          <button className='btn btn-primary'> Sign out</button>
      </div>
     
    </div>
  </div>
</nav>
    </div>
  )
}
