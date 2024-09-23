import React from "react";
import LOGO from "../assets/VFS_Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ServiceData } from "../assets/data/ServiceDataContext";

export const Navbar = () => {
  const {SecurityServices , FacilityServices, ManPowerServices} = ServiceData();
  
  const handleOffcanvas = () => {
    // Close the offcanvas and remove the backdrop
    const offcanvasElement = document.querySelector(".offcanvas");
    if (offcanvasElement) {
      offcanvasElement.classList.remove("show"); // Hide offcanvas
    }

    const backdrop = document.querySelector(".offcanvas-backdrop");
    if (backdrop) {
      backdrop.remove(); // Remove backdrop
    }
  };

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

          <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="NavBar">
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
                    data-bs-toggle="dropdown"
                  >
                    Security Services
                  </button>

                  <ul className="dropdown-menu">
                    <li className="fw-bold" >
                      <Link
                        to="/security-service"
                        className="dropdown-item fw-bold"
                        onClick={handleOffcanvas}
                      >
                        All Security Services
                      </Link>
                    </li>
                    {SecurityServices.map((s, i) => (
                      <li key={i}>
                        <Link
                          to={`/security-service/${s.name}`}
                          className="dropdown-item"
                          onClick={handleOffcanvas}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link fw-semibold px-lg-3 dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Facility Services
                  </button>
                  <ul className="dropdown-menu">
                    <li className="">
                      <Link
                        to="/facility-service"
                        className="dropdown-item fw-bold fw-bold"
                        onClick={handleOffcanvas}
                      >
                        All Facility Services
                      </Link>
                    </li>
                    {FacilityServices.map((s, i) => (
                      <li key={i}>
                        <Link
                          to={`/facility-service/${s.name}`}
                          className="dropdown-item"
                          onClick={handleOffcanvas}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    className="nav-link fw-semibold px-lg-3 dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Manpower Services
                  </button>
                  <ul className="dropdown-menu">
                    <li className="fw-bold">
                      <Link
                        to="/manpower-service"
                        className="dropdown-item fw-bold"
                        onClick={handleOffcanvas}
                      >
                        All Manpower Services
                      </Link>
                    </li>
                    {ManPowerServices.map((s, i) => (
                      <li key={i}>
                        <Link
                          to={`/manpower-service/${s.name}`}
                          className="dropdown-item"
                          onClick={handleOffcanvas}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/about-us">
                    <button
                      className="nav-link fw-semibold px-lg-3"
                      data-bs-dismiss="offcanvas"
                    >
                      About Us
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact-us">
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
