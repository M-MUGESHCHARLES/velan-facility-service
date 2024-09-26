import React from 'react'
import {ReactComponent as Youtube} from '../assets/svg/youtube-svgrepo-com.svg'
import {ReactComponent as Instagram} from '../assets/svg/instagram-1-svgrepo-com.svg'
import {ReactComponent as Facebook} from '../assets/svg/facebook-icon-logo-svgrepo-com.svg'
import {ReactComponent as Whatsapp} from '../assets/svg/whatsapp-icon-logo-svgrepo-com.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="pt-5 px-4 px-md-5 " id='Footer'>
    <div className="row m-0 px-md-4">
      <div className="col-6 col-md-2 mb-3">
        <h6 className='text-white mb-3'>VFS</h6>
        <ul className="nav flex-column">
          <li className="nav-item mb-1"><Link to='/' className="nav-link p-0 text-body-secondary"><p>Home</p></Link></li>
          <li className="nav-item mb-1"><Link to='/about-us' className="nav-link p-0 text-body-secondary"><p>About</p></Link></li>
          <li className="nav-item mb-1"><Link to='/contact-us' className="nav-link p-0 text-body-secondary"><p>Contact</p></Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h6 className='text-white mb-3'>Services</h6>
        <ul className="nav flex-column">
          <li className="nav-item mb-1"><Link to='/security-service' className="nav-link p-0 text-body-secondary"><p>Security</p></Link></li>
          <li className="nav-item mb-1"><Link to='/facility-service' className="nav-link p-0 text-body-secondary"><p>Facility Management</p></Link></li>
          <li className="nav-item mb-1"><Link to='/manpower-service' className="nav-link p-0 text-body-secondary"><p>Manpower</p></Link></li>
        </ul>
      </div>

      {/* <div className="col-6 col-md-2 mb-3">
        <h6 className='text-white mb-3'>Section</h6>
        <ul className="nav flex-column">
          <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary"><p>Home</p></a></li>
          <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary"><p>Features</p></a></li>
          <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary"><p>Pricing</p></a></li>
          <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary"><p>FAQs</p></a></li>
          <li className="nav-item mb-1"><a href="#" className="nav-link p-0 text-body-secondary"><p>About</p></a></li>
        </ul>
      </div> */}

      <div className="col-md-5 ms-auto me-0 mb-3">
        <form>
          <h6 className='text-white mb-3'>Mail Us </h6>
          <p className='mb-3'>Feel free to send us your email address, and we{`’`}ll get back to you shortly.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Your Email address"/>
            <button className="btn btn-outline-secondary text-white" type="button">Send</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 px-md-4 border-top">
      <p className='mb-4' >© Copyright {new Date().getFullYear()} Velan Facility Service. All rights reserved. Designed by <strong>MJM Solutions</strong>. </p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" target='_blank' href="https://www.facebook.com/share/NifJCNatxSnmdJhq/?mibextid=LQQJ4d"> <Facebook className='social-icons rounded-2'/> </a> </li>
        <li className="ms-3"><a className="link-body-emphasis" target='_blank' href="https://api.whatsapp.com/send?phone=916369292028&text=Hi%2C%20we%20would%20like%20to%20enquiry%20about%20your%20services%20..."> <Whatsapp className='social-icons rounded-2'/> </a> </li>
        <li className="ms-3"><a className="link-body-emphasis" target='_blank' href="https://www.instagram.com/velan_facility_service?igsh=MWV4MW5peDlvazZoZg%3D%3D&utm_source=qr"> <Instagram className='social-icons rounded-2'/> </a> </li>
        <li className="ms-3"><a className="link-body-emphasis" target='_blank' href="https://youtube.com/@velanfacilityservice?si=XuZrUCB_N4VnSMDv"> <Youtube className='social-icons rounded-2'/> </a> </li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer