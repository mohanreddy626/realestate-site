import React from "react";
import "../Stylescss/header.css";
import logo from "../images/logo.jpg";
import {Link } from "react-router-dom";

export default function Header() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg justify-content-center align-items-center">
        <div class="container ">
          <Link class="navbar-brand" to="/">
            <img src={logo} className="logo"/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About us
                </Link>
              </li>
              
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Projects
                </Link>
                <ul class="dropdown-menu text-dark">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Ongoing Projects
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                      Completed Projects
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 Events
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="#">
                     Company Aniversary Celebrations
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="#">
                     Project Pre-launch Events
                    </Link>
                  </li>
                </ul>
              </li><br />
              <li class="nav-item contact-us">
                <Link class="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="img-sec">

      </div>

    
    </div>
  );
}
