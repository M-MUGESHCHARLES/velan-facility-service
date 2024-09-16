import React from 'react'
import {ReactComponent as Youtube} from '../../assets/svg/youtube-svgrepo-com.svg'
import {ReactComponent as Instagram} from '../../assets/svg/instagram-1-svgrepo-com.svg'
import {ReactComponent as Facebook} from '../../assets/svg/facebook-icon-logo-svgrepo-com.svg'
import {ReactComponent as Whatsapp} from '../../assets/svg/whatsapp-icon-logo-svgrepo-com.svg'

const Footer = () => {
  return (
    <footer class="pt-5 px-3 " id='Footer'>
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h6 className='text-white mb-3'>Section</h6>
        <ul class="nav flex-column">
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Home</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Features</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Pricing</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>FAQs</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>About</p></a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h6 className='text-white mb-3'>Section</h6>
        <ul class="nav flex-column">
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Home</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Features</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Pricing</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>FAQs</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>About</p></a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h6 className='text-white mb-3'>Section</h6>
        <ul class="nav flex-column">
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Home</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Features</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>Pricing</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>FAQs</p></a></li>
          <li class="nav-item mb-1"><a href="#" class="nav-link p-0 text-body-secondary"><p>About</p></a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h6 className='text-white mb-3'>Mail Us </h6>
          <p className='mb-3'>Feel free to send us your email address, and we{`’`}ll get back to you shortly.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Your Email address"/>
            <button class="btn btn-outline-secondary text-white" type="button">Send</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p className='mb-4' >© Copyright {new Date().getFullYear()} Velan Facility Service. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" target='_blank' href="https://www.facebook.com/share/NifJCNatxSnmdJhq/?mibextid=LQQJ4d"> <Facebook className='social-icons rounded-2'/> </a> </li>
        <li class="ms-3"><a class="link-body-emphasis" target='_blank' href="https://api.whatsapp.com/send?phone=916369292028&text=Hi%2C%20we%20would%20like%20to%20enquiry%20about%20your%20services%20..."> <Whatsapp className='social-icons rounded-2'/> </a> </li>
        <li class="ms-3"><a class="link-body-emphasis" target='_blank' href="https://www.instagram.com/velan_facility_service?igsh=MWV4MW5peDlvazZoZg%3D%3D&utm_source=qr"> <Instagram className='social-icons rounded-2'/> </a> </li>
        <li class="ms-3"><a class="link-body-emphasis" target='_blank' href="https://youtube.com/@velanfacilityservice?si=XuZrUCB_N4VnSMDv"> <Youtube className='social-icons rounded-2'/> </a> </li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer