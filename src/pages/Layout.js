import React from 'react'
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { ReactComponent as Whatsapp } from "../assets/svg/whatsapp-svgrepo-com.svg";
import { Outlet } from 'react-router-dom';

const QuickWhatsapp = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://api.whatsapp.com/send?phone=916369292028&text=Hi%2C%20we%20would%20like%20to%20enquiry%20about%20your%20services%20..."
      className="position-fixed"
      id="QuickWhatsapp"
    >
      <Whatsapp id="SVG" />
    </a>
  );
};

export const Layout = () => {
  return (
    <>
      <Navbar />
        <Outlet/>
      <QuickWhatsapp />
      <Footer />
    </>
  );
}
