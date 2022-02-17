import React from "react";
import "../css/header.css"

function HeaderComponent() {
  return (
    <div classNameNameName="container">
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand btn btn-primary" href="/">Inor</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active  btn btn-outline-success" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-outline-success " href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  btn btn-outline-success" aria-current="page" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  btn btn-outline-success" aria-current="page" href="/upcommings">up commings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  btn btn-outline-success" aria-current="page" href="/gallary">Photo Galary</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  btn btn-outline-success" aria-current="page" href="/appointments">Appointment</a>
              </li>

              <li className="nav-item">
                <a className="nav-link  btn btn-outline-success" aria-current="page" href="/services">Services</a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default HeaderComponent;
