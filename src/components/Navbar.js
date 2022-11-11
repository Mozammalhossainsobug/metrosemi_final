import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/metrosemi_logo.png';

function Navbar() {
  return (
    <> 
 <nav class="navbar fixed-top navbar-expand-lg bg-light nav">
  <div class="container-fluid ">
  <img src={logo} width="150" height="60"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav-right-align" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
          <Link className="link" to="">
              Home
            </Link>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Stress Tools
          </a>
          <ul class="dropdown-menu">
            <li>
            <Link className="link dropdown-item" to="fsm128L">
            FSM 128L
            </Link>
            </li>
            <li>
            <Link className="link dropdown-item" to="fsm500TC">
            FSM 500TC
            </Link>
            </li>
            <li><Link className="link dropdown-item" to="fsm900TC">
            FSM 900TC
            </Link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Thickness Tools
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item"><Link className="link" to="fsm413C2C">
            FSM 413C2C
            </Link></li>
            <li class="dropdown-item"> <Link className="link" to="azx400">
              AZX400
            </Link>
            </li>
            <li class="dropdown-item"> <Link className="link" to="f20Series">
              F20s
            </Link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Defect Inspection Tool
          </a>
          <ul class="dropdown-menu">
            <li><Link className="link dropdown-item" to="raman360">
            RAMAN-360
            </Link>
            </li>
            <li><a class="dropdown-item" href="#">XRF-W Series</a></li>
            <li><a class="dropdown-item" href="#">XRF-G Series</a></li>
            <li class="dropdown-item"> <Link className="link" to="azx400">
            XRF-AZX400
            </Link>
            </li>
            <li><Link className="link dropdown-item" to="fsm900TC">
            FSM 900TC
            </Link>
            </li>
            <li><a class="dropdown-item" href="#">Mass Spectrometer</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
          <Link className='link' to='/contactUs'>
          Measurement services
          </Link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
      
      
    </>
  );
}

export default Navbar;