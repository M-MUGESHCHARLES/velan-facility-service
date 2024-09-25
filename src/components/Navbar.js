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

          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="NavBar"
          >
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
                  <Link to="/" className="nav-link fw-semibold px-lg-3 nav-links">
                    Home
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <button className="nav-link fw-semibold px-lg-3 nav-links" id="menu">
                    Security Services
                  </button>

                  <div className="menu-options px-3 bg-body-secondary py-2 border border-2 rounded-1 border-secondary-subtle largeMenu">
                    <ul className="row m-0 p-0 col">
                      <li className="fw-bold py-2 px-1 col-12 text-left  text-nowrap">
                        <Link
                          to="/security-service"
                          className="fw-bold text-uppercase px-3 py-2 "
                          onClick={handleOffcanvas}
                        >
                          Security Services
                        </Link>
                      </li>
                      <hr className="m-0 " />
                      {SecurityServices.map((s, i) => (
                        <li
                          key={i}
                          className="p-1 col-6 col-md-4 text-left  text-nowrap py-2"
                        >
                          <Link
                            to={`/security-service/${s.name}`}
                            className="px-3 py-2"
                            onClick={handleOffcanvas}
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="nav-item d-none d-lg-block">
                  <button className="nav-link fw-semibold px-lg-3 nav-links" id="menu">
                    Facility Services
                  </button>

                  <div className="menu-options px-3 bg-body-secondary py-2 border border-2 rounded-1 border-secondary-subtle smallMenu">
                    <ul className="row m-0 p-0 col">
                      <li className="fw-bold py-2 px-1 col-12 text-left  text-nowrap">
                        <Link
                          to="/facility-service"
                          className="fw-bold text-uppercase px-3 py-2"
                          onClick={handleOffcanvas}
                        >
                          Facility Services
                        </Link>
                      </li>
                      <hr className="m-0 " />
                      {FacilityServices.map((s, i) => (
                        <li
                          key={i}
                          className="p-1 col-12 text-left  text-nowrap py-2"
                        >
                          <Link
                            to={`/facility-service/${s.name}`}
                            className=" px-3 py-2"
                            onClick={handleOffcanvas}
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="nav-item d-none d-lg-block">
                  <button className="nav-link fw-semibold px-lg-3 nav-links" id="menu">
                    Manpower Services
                  </button>

                  <div className="menu-options px-3 bg-body-secondary py-2 border border-2 rounded-1 border-secondary-subtle smallMenu">
                    <ul className="row m-0 p-0 col">
                      <li className="fw-bold py-2 px-1 col-12 text-left  text-nowrap py-2">
                        <Link
                          to="/manpower-service"
                          className="fw-bold text-uppercase px-3 py-2"
                          onClick={handleOffcanvas}
                        >
                          Manpower Services
                        </Link>
                      </li>
                      <hr className="m-0 " />
                      {ManPowerServices.map((s, i) => (
                        <li
                          key={i}
                          className="p-1 col-12 text-left text-nowrap py-1"
                        >
                          <Link
                            to={`/manpower-service/${s.name}`}
                            className=" px-3 py-2"
                            onClick={handleOffcanvas}
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown d-block d-lg-none">
                  <button
                    className="nav-link fw-semibold px-lg-3 dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Security Services
                  </button>
                  <div className="dropdown-menu ">
                    <li className=" ">
                      <Link
                        to="/security-service"
                        className="dropdown-item fw-bold text-uppercase"
                        onClick={handleOffcanvas}
                      >
                        security Services
                      </Link>
                    </li>
                    <hr className="m-0 " />

                    {SecurityServices.map((s, i) => (
                      <li key={i} className="">
                        <Link
                          to={`/security-service/${s.name}`}
                          className="dropdown-item"
                          onClick={handleOffcanvas}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                </li>
                <li className="nav-item dropdown d-block d-lg-none">
                  <button
                    className="nav-link fw-semibold px-lg-3 dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Facility Services
                  </button>
                  <div className="dropdown-menu">
                    <li className="">
                      <Link
                        to="/facility-service"
                        className="dropdown-item fw-bold text-uppercase"
                        onClick={handleOffcanvas}
                      >
                        Facility Services
                      </Link>
                    </li>
                    <hr className="m-0 " />

                    {FacilityServices.map((s, i) => (
                      <li key={i} className="">
                        <Link
                          to={`/facility-service/${s.name}`}
                          className="dropdown-item"
                          onClick={handleOffcanvas}
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                </li>
                <li className="nav-item dropdown d-block d-lg-none">
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
                        className="dropdown-item fw-bold text-uppercase"
                        onClick={handleOffcanvas}
                      >
                        Manpower Services
                      </Link>
                    </li>
                    <hr className="m-0 " />

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
                  <Link
                    to="/about-us"
                    className="nav-link fw-semibold px-lg-3 nav-links"
                    data-bs-dismiss="offcanvas"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact-us"
                    className="nav-link fw-semibold px-lg-3 nav-links"
                    data-bs-dismiss="offcanvas"
                  >
                    Contact Us
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
