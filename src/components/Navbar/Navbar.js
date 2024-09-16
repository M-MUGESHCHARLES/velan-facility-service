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
              <a class="nav-link active"  href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
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
