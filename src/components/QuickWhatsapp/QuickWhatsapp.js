import React from 'react'
import { ReactComponent as Whatsapp } from "../../assets/svg/whatsapp-svgrepo-com.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook-icon-logo-svgrepo-com.svg";


const QuickWhatsapp = () => {
  return (
    <a target='_blank' rel='noreferrer' href="https://api.whatsapp.com/send?phone=916369292028&text=Hi%2C%20we%20would%20like%20to%20enquiry%20about%20your%20services%20..."
     className='' id='QuickWhatsapp'>
        <Whatsapp id='SVG'/>
    </a>
  )
}

export default QuickWhatsapp