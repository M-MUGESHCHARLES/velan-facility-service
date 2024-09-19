import securitygaurd from '../../assets/images/security.jpeg'
import bodygaurd from "../../assets/images/bodygaurds.jpg";
import escort from "../../assets/images/escort security.jpg";
import femalesecurity from "../../assets/images/female security.png";
import cashmanagement from "../../assets/images/cash management security.jpg";
import dogsquad from "../../assets/images/dogsquad.png";
import eventsecurity from "../../assets/images/event security.jpg";
import touristsecurity from "../../assets/images/tourist security.jpg";
import officesecurity from "../../assets/images/office security.jpg";
import buildingsecurity from "../../assets/images/building security.jpg";
import banksecurity from "../../assets/images/bank security.jpg";
import industrialsecurity from "../../assets/images/industrial security.jpg";
import retailsecurity from "../../assets/images/retail security.jpg";
import hospitalsecurity from "../../assets/images/hospital security.jpeg";
import propertysecurity from "../../assets/images/property security.jpg";
import schoolsecurity from "../../assets/images/school security.jpeg";
import housekeeping from '../../assets/images/housekeeping.jpg';
import officeboy from '../../assets/images/officeboy.jpg'
import pantryboy from '../../assets/images/pantryboy.jpg'
import frontbackofficemanpower from "../../assets/images/frontbackoffice.jpg";
import tempstaffing from '../../assets/images/tempstaffing.jpg'
import eventstaffing from '../../assets/images/eventstaff.jpg'


import React, { createContext, useContext,  } from 'react'


const CardDataContext = createContext();

export const CardDataProvider = ({children}) => {

    const SecurityServices =[
        {
            id:1,
            title:"Security Gaurd",
            image:securitygaurd,
            detail:'Get trained Security Guard , Supervisor and Security Officer at competetive rate with excellent track record and PCC verified.'
        },
        {
            id:2,
            title:"Bouncer / BodyGaurd",
            image:bodygaurd,
            detail:'Hire professional , trained and well build Bouncers and Bodygaurd for your short term or long term security needs.'
        },
        {
            id:3,
            title:"Escort Gaurd",
            image:escort,
            detail: 'Hire Professional Escort Guard for safegaurd your female employees during commuting at night in compliance with S&E Act.'
        },
        {
            id:4,
            title:"Female Gaurd",
            image:femalesecurity,
            detail: ' Trained Lady Guard for frisking female visitors and securing your business like office, factory, building, mall, school and shop.'
        },
        {
            id:5,
            title:"Cash Management",
            image:cashmanagement,
            detail: 'Hire cash van for a trip or on monthly basis to saftey transport your valuables with state of the art safety features.'
        },
        {
            id:6,
            title:"Dog Squads",
            image:dogsquad,
            detail: 'Our dog squad comprises highly pedigreed and trained canine with experienced handlers to safeguard person & property. '
        },
        {
            id:7,
            title:"Event Security",
            image:eventsecurity,
            detail: 'Looking for quick short term security services for an event? we have experience and expertise in event management.'
        },
        {
            id:8,
            title:"Tourist Security",
            image:touristsecurity,
            detail: 'Security concerns while travelling to India ? relax and allow us to safeguard and guide you to make your journey safe and memorable.'
        },
        {
            id:9,
            title:"Office Security",
            image:officesecurity,
            detail: 'Our Security manages all security needs of modern corporate office by adhering to SOP to secure your Office 24/7.'
        },
        {
            id:10,
            title:"Building Security",
            image:buildingsecurity,
            detail: 'Secure your modern commercial or residential complex with professional and trained security to protect the community 24/7. '
        },
        {
            id:11,
            title:"Bank Security",
            image:banksecurity,
            detail: 'Protect your Bank and ATM with trained and alert security guards 24/7 . We are sucessfully securing many Banks and ATMs across country.'
        },
        {
            id:12,
            title:"Industrial Security",
            image:industrialsecurity,
            detail: 'Secure your factory & warehouse and mitigate the risk by hiring labour law & factory act compliant with VFS.'
        },
        {
            id:13,
            title:"Retail Security",
            image:retailsecurity,
            detail:"Get best security for retail stores, malls,shoping complex & multiplex to protect 24/7 against shoplifters and organized criminals."
        },
        {
            id:14,
            title:"Hospital Security",
            image:hospitalsecurity,
            detail: 'Protect your hospital and patients with trained and alert security guards 24/7 .',
        },
        {
            id:15,
            title:"Property Security",
            image:propertysecurity,
            detail:'Need security for property recovered from loan defaulters?  We are expert in providing security solutions for protecting your property.'
        },
        {
            id:16,
            title:"School Security",
            image:schoolsecurity,
            detail:'Safeguard your schools & colleges within your budget like a fortress with our tailor made security solutions plus additional benefits.'
        },
    ];

    const FacilityServices = [
        {
            id:1,
            title:"Corporate House Keeping",
            image:housekeeping,
            detail:'Get the best Housekeeping service at resonable price along with bouquet of related services under one roof.'
        },
        {
            id:2,
            title:"Office Boy",
            image:officeboy,
            detail:'Hire Office Boy service on monthly contractual basis at competitive rate to support your staff in carrying out routine task.'
        },
        {
            id:3,
            title:'Pantry Boy',
            image:pantryboy,
            detail:'Hire trained and uniformed pantry boy service at competitive rate and give complete makeover to your office image.',
        }
    ];

    const ManPowerServices =[
        {
            id:1,
            title:'Front & Back Office ManPower',
            image:frontbackofficemanpower,
            detail:'Hire Front & Back Office ManPower and labour service on contract basis like Plumber, Electritcian, Driver, Gardner, etc.,',
        },
        {
            id:2,
            title:'Temp Staffing',
            image:tempstaffing,
            detail:'Hire temporary staff and join thousand of companies getting benifited through contract staffing and save time, effort & money.', 
        },
        {
            id:3,
            title:'Event Staffing',
            image:eventstaffing,
            detail:'Get event anchors, models, exhibition attendants, tele callers, mall promoters, etc., as per your need for all type of events.',
        }
    ];

  return (
    <CardDataContext.Provider
      value={{
        SecurityServices,
        FacilityServices,
        ManPowerServices,
      }}
    >
      {children}
    </CardDataContext.Provider>
  );
};

export const CardData = () => {
  return useContext(CardDataContext);
};





