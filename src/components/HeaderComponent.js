import React from "react";
import { NavLink } from "react-router-dom";
import "../css/header.css"

function HeaderComponent() {
  return (
    <div classNameNameName="container">
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand " id="logoName" to="/">Inor</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-NavLink   btn btn-outline-success" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink btn btn-outline-success " to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink  btn btn-outline-success" aria-current="page" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink  btn btn-outline-success" aria-current="page" to="/upcommings">up commings</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink  btn btn-outline-success" aria-current="page" to="/gallary">Photo Galary</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink  btn btn-outline-success" aria-current="page" to="/appointments">Appointment</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-NavLink  btn btn-outline-success" aria-current="page" to="/services">Services</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default HeaderComponent;
