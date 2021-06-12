import React from 'react';
import logo from '../../../image/logo.png';
import './Navbar.css'

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-color  ">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"> <h1> <span class="text-small">Dry</span>Cleaning  </h1>
        </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ms-5 disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
};

export default Navbar;