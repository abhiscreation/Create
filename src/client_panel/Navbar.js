import React from "react"
import "bootstrap/dist/js/bootstrap.bundle"; 
import "bootstrap/dist/css/bootstrap.min.css";  
import { NavLink } from "react-router-dom";
export default function Navbar(){
    return(
<>
<div className="container-fluid nav bg-primary">
<div className="row">
<div className="col-30 mx-auto  ">
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <NavLink  exact className="navbar-brand"  to="/">Begin</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <NavLink activeClassName = "menu_active" exact className="nav-link active" aria-current="page" to="/" style={{color:'white'}}>Home</NavLink>
        </li>
        <li className="nav-item">
           <NavLink activeClassName = "menu_active" className="nav-link" to="/service" style={{color:'white'}}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName = "menu_active" className="nav-link" to="/about" style={{color:'white'}}>About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName = "menu_active"  className="nav-link" to="/contact" style={{color:'white'}} >Contact</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>
</div>
</div>
</>
    )
}