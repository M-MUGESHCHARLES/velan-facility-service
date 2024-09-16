import React from 'react'
import LOGO from '../../assets/VFS_Logo.png'

export const Navbar = () => {
  return (
    <header className=''>
    <nav class="navbar navbar-expand-lg border-bottom bg-body-tertiary " >
    <div class="container-fluid d-sm-flex ">
       
        <img src={LOGO} className='img-thumbnail' alt='' id='Logo' />

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#NavBar" >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="NavBar" >
        
        <div class="offcanvas-header">
            <img src={LOGO} className='' alt='' id='Logo' />
            <h5 class="offcanvas-title fw-bold" id="VFSName">VELAN FACILITY SERVICE</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link fw-bold active"  href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                Security Services
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Security Gaurd</a></li>
                <li><a class="dropdown-item" href="#">Bouncer & Body Gaurd</a></li>
                <li><a class="dropdown-item" href="#">Escort Gaurd</a></li>
                <li><a class="dropdown-item" href="#">Female Security Gaurd</a></li>
                <li><a class="dropdown-item" href="#">Cash Management</a></li>
                <li><a class="dropdown-item" href="#">Dog Squads Service</a></li>
                <li><a class="dropdown-item" href="#">Event Security</a></li>
                <li><a class="dropdown-item" href="#">Tourist Security</a></li>
                <li><a class="dropdown-item" href="#">Office Security</a></li>
                <li><a class="dropdown-item" href="#">Building Security</a></li>
                <li><a class="dropdown-item" href="#">Bank Security</a></li>
                <li><a class="dropdown-item" href="#">Industrial Security</a></li>
                <li><a class="dropdown-item" href="#">Retail Security</a></li>
                <li><a class="dropdown-item" href="#">Hospital Security</a></li>
                <li><a class="dropdown-item" href="#">Property Security</a></li>
                <li><a class="dropdown-item" href="#">School Security</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                Facility Services
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">House Keeping</a></li>
                <li><a class="dropdown-item" href="#">Office Boy</a></li>
                <li><a class="dropdown-item" href="#">Pantry Boy </a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link fw-bold dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                Manpower Services
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Front & Back Office Manpower </a></li>
                <li><a class="dropdown-item" href="#">Temp Staffing</a></li>
                <li><a class="dropdown-item" href="#">Event Staffing</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#">Contact Us</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    </nav>
    <div className='border-bottom py-2'>
        <h4 className='fw-bold text-center m-0' id='VFSName' > VELAN FACILITY SERVICE </h4>
    </div>
    </header>
  )
}
