import { Link, useNavigate } from "react-router-dom"
import logo from "../productImages/Logo.png"
import React, { useEffect, useState } from "react";
import bg  from '../productImages/navbarImage.jpg';

export default function Navigation_bar() {

  const nav=useNavigate();

  
    return (
<nav className="navbar navbar-expand-lg container-fluid" style={{
            // backgroundImage: `url(${bg})`, 
            backgroundColor:'darkviolet',
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTrim:'100%',
            width:'99vw',
            borderRadius:'30px',
            
        }}> 
  <div className="container-fluid">
    <img src={logo} style={{width:"60px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-disabled="true">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ">
        <li className="nav-item">
         <Link to='/home' className='nav-link' aria-current='page' href='#' ><h4 style={{color:'white'}}>OneStopShop</h4></Link>
        </li>        
        <li className="nav-item">
            <Link to='/login' className='nav-link' aria-current='page' href='#' ><p style={{color:'white'}}>Login</p></Link>
        </li>
        <li className="nav-item">
         <Link to='/address' className='nav-link' aria-current='page' href='#' ><p style={{color:'white'}}>Address</p></Link>
        </li>
        <li className="nav-item">
         <Link to='/products' className='nav-link' aria-current='page' href='#' ><p style={{color:'white'}}>Products</p></Link>
        </li>               
        <li className="nav-item">
         <Link to='/category' className='nav-link' aria-current='page' href='#' ><p style={{color:'white'}}>Category</p></Link>
        </li> 
        <li className="nav-item">
         <Link to='/featuredProducts' 
         className='nav-link' 
         style={{borderRadius:'100px'}}
         aria-current='page' href='#' ><p style={{color:'white'}}>Ad</p></Link>
        </li> 
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Looking for something?" style={{width:"300px"}} aria-label="Search" />
        <button className="btn btn-dark button-design" type="submit" style={{borderRadius:'100px'}}>Search</button>

      </form>      
      <li className="nav-item">
          <Link to='/logout' className='btn btn-outline-warning button-design' aria-current='page' href='#' 
         style={{borderRadius:'100px'}} >Logout</Link>
        </li> 
    </div>
  </div>
</nav>
)
}
