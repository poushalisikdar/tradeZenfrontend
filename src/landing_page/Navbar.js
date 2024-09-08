import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg border-bottom sticky-top bg-body-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="media/logo.svg" style={{width:"19%", padding:"10px",marginLeft:"12rem"}}/>
          </Link>

     
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active mr-5" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="product">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="support">
                  Support
                </Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link active" to="#">
                <i class="fa-solid fa-bars"></i>
                </Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
   
  );
}

export default Navbar;
