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
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Stress Tools
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">FSM 128L</a></li>
            <li><a class="dropdown-item" href="#">FSM 500TC</a></li>
            <li><a class="dropdown-item" href="#">FSM 900TC</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Thickness Tools
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">FSM 413C2C</a></li>
            <li><a class="dropdown-item" href="#">AZX400</a></li>
            <li><a class="dropdown-item" href="#">F20s</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Defect Inspection Tool
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">RAMAN-360</a></li>
            <li><a class="dropdown-item" href="#">XRF-W Series</a></li>
            <li><a class="dropdown-item" href="#">XRF-G Series</a></li>
            <li><a class="dropdown-item" href="#">XRF-AZX400</a></li>
            <li><a class="dropdown-item" href="#">FSM 900TC</a></li>
            <li><a class="dropdown-item" href="#">Mass Spectrometer</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Measurement services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
      
      
    </>
  );
}

export default Navbar;