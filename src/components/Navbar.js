import React from "react";
import LOGO from "../assets/VFS_Logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg border-bottom bg-body-tertiary ">
        <div className="container-fluid d-sm-flex ">
          <img src={LOGO} className="img-thumbnail" alt="" id="Logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#NavBar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-start" tabindex="-1" id="NavBar">
            <div className="offcanvas-header">
              <img src={LOGO} className="" alt="" id="Logo" />
              <h5 className="offcanvas-title fw-bold" id="VFSName">
                VELAN FACILITY SERVICE
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end mx-auto">
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link to="/">
                    
                    <button className="nav-link fw-semibold px-lg-3 active">
                      Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link fw-semibold px-lg-3 dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-dismiss="offcanvas"
                  >
                    <Link to="/security-services">Security Services </Link>
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Security Gaurd
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Bouncer & Body Gaurd
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Escort Gaurd
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Female Security Gaurd
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Cash Management
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Dog Squads Service
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Event Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Tourist Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Office Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Building Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Bank Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Industrial Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Retail Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Hospital Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Property Security
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        School Security
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link fw-semibold px-lg-3 dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Facility Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        House Keeping
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Office Boy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Pantry Boy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link fw-semibold px-lg-3 dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Manpower Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Front & Back Office Manpower
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Temp Staffing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas">
                        Event Staffing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/About-us">
                    <button
                      className="nav-link fw-semibold px-lg-3"
                      data-bs-dismiss="offcanvas"
                    >
                      About Us
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact-us">
                    <button
                      className="nav-link fw-semibold px-lg-3"
                      data-bs-dismiss="offcanvas"
                    >
                      Contact Us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="border-bottom py-2">
        <h4 className="fw-bold text-center m-0" id="VFSName">
          
          VELAN FACILITY SERVICE
        </h4>
      </div>
    </header>
  );
};
