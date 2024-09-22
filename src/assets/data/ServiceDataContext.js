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
import eventstaffing from '../../assets/images/eventstaff.jpg';
// banners
import securitybanner from '../../assets/images/security services.jpeg';
import facilitybanner from '../../assets/images/Facility-services.jpg';
import manpowerbanner from '../../assets/images/manpower-services.jpeg'

import React, { createContext, useContext,  } from 'react'
import { OfficeManpower } from './ServiceDataContents.js/OfficeManpower';
import { TempStaffing } from './ServiceDataContents.js/TempStaffing';
import { EventStaffing } from './ServiceDataContents.js/EventStaffing';
import { HouseKeeping } from './ServiceDataContents.js/HouseKeeping';
import { PantryBoy } from './ServiceDataContents.js/PantryBoy';
import { OfficeBoy } from './ServiceDataContents.js/OfficeBoy';
import { SecurityGuard } from './ServiceDataContents.js/SecurityGuard';
import { BodyGuard } from './ServiceDataContents.js/BodyGuard';
import { EscortGuard } from './ServiceDataContents.js/EscortGuard';
import { FemaleGuard } from './ServiceDataContents.js/FemaleGuard';
import { CashManagement } from './ServiceDataContents.js/CashManagement';
import { DogSquad } from './ServiceDataContents.js/DogSquad';
import { EventSecurity } from './ServiceDataContents.js/EventSecurity';
import { TouristSecurity } from './ServiceDataContents.js/TouristSecurity';
import { OfficeSecurity } from './ServiceDataContents.js/OfficeSecurity';
import { BuildingSecurity } from './ServiceDataContents.js/BuildingSecurity';
import { BankSecurity } from './ServiceDataContents.js/BankSecurity';
import { IndustrialSecurity } from './ServiceDataContents.js/IndustrialSecurity';
import { RetailSecurity } from './ServiceDataContents.js/RetailSecurity';
import { HospitalSecurity } from './ServiceDataContents.js/HospitalSecurity';
import { PropertySecurity } from './ServiceDataContents.js/PropertySecurity';
import { SchoolSecurity } from './ServiceDataContents.js/SchoolSecurity';


const ServiceDataContext = createContext();

export const ServiceDataProvider = ({children}) => {

    const SecurityServices =[
        {
            id:1,
            name:'security-gaurd',
            title:"Security Gaurd",
            image:securitygaurd,
            detail:'Get trained Security Guard , Supervisor and Security Officer at competetive rate with excellent track record and PCC verified.',
            contents:SecurityGuard,
        },
        {
            id:2,
            name:'bodyguard',
            title:"Bouncer / BodyGuard",
            image:bodygaurd,
            detail:'Hire professional , trained and well build Bouncers and Bodyguard for your short term or long term security needs.',
            contents:BodyGuard,
          },
        {
            id:3,
            name:'escort-gaurd',
            title:"Escort Gaurd",
            image:escort,
            detail: 'Hire Professional Escort Guard for safegaurd your female employees during commuting at night in compliance with S&E Act.',
            contents:EscortGuard,
          },
        {
            id:4,
            name:'female-gaurd',
            title:"Female Gaurd",
            image:femalesecurity,
            detail: ' Trained Lady Guard for frisking female visitors and securing your business like office, factory, building, mall, school and shop.',
            contents:FemaleGuard,
          },
        {
            id:5,
            name:'cash-management',
            title:"Cash Management",
            image:cashmanagement,
            detail: 'Hire cash van for a trip or on monthly basis to saftey transport your valuables with state of the art safety features.',
            contents:CashManagement,
          },
        {
            id:6,
            name:'dog-squad',
            title:"Dog Squads",
            image:dogsquad,
            detail: 'Our dog squad comprises highly pedigreed and trained canine with experienced handlers to safeguard person & property. ',
            contents:DogSquad,
          },
        {
            id:7,
            name:'event-security',
            title:"Event Security",
            image:eventsecurity,
            detail: 'Looking for quick short term security services for an event? we have experience and expertise in event management.',
            contents:EventSecurity,
          },
        {
            id:8,
            name:'tourist-security',
            title:"Tourist Security",
            image:touristsecurity,
            detail: 'Security concerns while travelling to India ? relax and allow us to safeguard and guide you to make your journey safe and memorable.',
            contents:TouristSecurity,
          },
        {
            id:9,
            name:'office-security',
            title:"Office Security",
            image:officesecurity,
            detail: 'Our Security manages all security needs of modern corporate office by adhering to SOP to secure your Office 24/7.',
            contents:OfficeSecurity,
          },
        {
            id:10,
            name:'building-security',
            title:"Building Security",
            image:buildingsecurity,
            detail: 'Secure your modern commercial or residential complex with professional and trained security to protect the community 24/7. ',
            contents:BuildingSecurity,
          },
        {
            id:11,
            name:'bank-security',
            title:"Bank Security",
            image:banksecurity,
            detail: 'Protect your Bank and ATM with trained and alert security guards 24/7 . We are sucessfully securing many Banks and ATMs across country.',
            contents:BankSecurity,
          },
        {
            id:12,
            name:'industrial-security',
            title:"Industrial Security",
            image:industrialsecurity,
            detail: 'Secure your factory & warehouse and mitigate the risk by hiring labour law & factory act compliant with VFS.',
            contents:IndustrialSecurity,
          },
        {
            id:13,
            name:'retail-security',
            title:"Retail Security",
            image:retailsecurity,
            detail:"Get best security for retail stores, malls,shoping complex & multiplex to protect 24/7 against shoplifters and organized criminals.",
            contents:RetailSecurity,
          },
        {
            id:14,
            name:'hospital-security',
            title:"Hospital Security",
            image:hospitalsecurity,
            detail: 'Protect your hospital and patients with trained and alert security guards 24/7 .',
            contents:HospitalSecurity,
          },
        {
            id:15,
            name:'property-security',
            title:"Property Security",
            image:propertysecurity,
            detail:'Need security for property recovered from loan defaulters?  We are expert in providing security solutions for protecting your property.',
            contents:PropertySecurity,
          },
        {
            id:16,
            name:'school-security',
            title:"School Security",
            image:schoolsecurity,
            detail:'Safeguard your schools & colleges within your budget like a fortress with our tailor made security solutions plus additional benefits.',
            contents:SchoolSecurity,
          },
    ];

    const FacilityServices = [
        {
            id:1,
            name:'house-keeping',
            title:"Corporate House Keeping",
            image:housekeeping,
            detail:'Get the best Housekeeping service at resonable price along with bouquet of related services under one roof.',
            contents:HouseKeeping,
          },
            {
            id:2,
            name:'office-boy',
            title:"Office Boy",
            image:officeboy,
            detail:'Hire Office Boy service on monthly contractual basis at competitive rate to support your staff in carrying out routine task.',
            contents:OfficeBoy,
          },
        {
            id:3,
            name:'pantry-boy',
            title:'Pantry Boy',
            image:pantryboy,
            detail:'Hire trained and uniformed pantry boy service at competitive rate and give complete makeover to your office image.',
            contents:PantryBoy,
          }
    ];

    const ManPowerServices = [
      {
        id: 1,
        name: "office-manpower",
        title: "Front & Back Office ManPower",
        image: frontbackofficemanpower,
        detail: "Hire Front & Back Office ManPower and labour service on contract basis like Plumber, Electritcian, Driver, Gardner, etc.,",
        contents: OfficeManpower,
      },
      {
        id: 2,
        name: "temporary-staffing",
        title: "Temporary Staffing",
        image: tempstaffing,
        detail:
          "Hire temporary staff and join thousand of companies getting benifited through contract staffing and save time, effort & money.",
        contents: TempStaffing ,
      },
      {
        id: 3,
        name: "event-staffing",
        title: "Event Staffing",
        image: eventstaffing,
        detail:
          "Get event anchors, models, exhibition attendants, tele callers, mall promoters, etc., as per your need for all type of events.",
        contents: EventStaffing ,
      },
    ];

    const ServiceCategory = [
      {
        id: 1,
        category: "security-service",
        title: "Security Service",
        banner: securitybanner,
        about: `Security is at the heart of our business, and we approach our work
                with passion and dedication. In today’s fast-changing world, Manned
                Guarding is no longer a one-size-fits-all solution. The expectations
                for security personnel have evolved, and the required capabilities
                can differ greatly, even within the same organization. At Velan
                Facility Service (VFS), we understand that each client’s security
                needs are unique. That’s why we offer customized security solutions,
                carefully tailored after assessing your specific pain points, taking
                into account factors such as the size, location, and nature of your
                business. Based in Chennai, we provide a comprehensive range of
                security services to meet diverse requirements, ensuring the right
                level of protection for every situation. From small businesses to
                large enterprises, our flexible and professional services cater to
                all types of security needs. Let us help you create a secure
                environment with a solution that is uniquely suited to your
                business.`,
        serviceList: SecurityServices,
      },
      {
        id: 2,
        category: "facility-service",
        title: "Facility Service",
        banner: facilitybanner,
        about: `At Velan Facility Service (VFS), our facility management services stand out due to our deep understanding of our clients' unique needs and our wealth of experience, which has helped us establish industry-leading best practices.
                Based in Chennai, VFS offers a comprehensive range of facility management solutions, including Housekeeping Services, Office Boy Services, Pantry Boy Services, and Labor Services. Our commitment to excellence ensures that we provide efficient, 
                reliable, and tailored services to meet the specific requirements of your business.
                By choosing VFS, you're partnering with a team dedicated to maintaining a clean, organized, and productive environment, allowing you to focus on your core business while we take care of the rest.`,
        serviceList: FacilityServices,
      },
      {
        id: 3,
        category: "manpower-service",
        title: "ManPower Service",
        banner: manpowerbanner,
        about: `We Velan Facility Services provide all type of Manpower
                  Services required for Back Office, Front Office and Labour
                  Service. More and more organisation are successfully hiring
                  their Human Resource requirement on contract basis, as it
                  protects them against inefficiency of staff, high replacement
                  cost, compliance issue and complexity of labour laws.`,
        serviceList: ManPowerServices,
      },
    ];


  return (
    <ServiceDataContext.Provider
      value={{
        SecurityServices,
        FacilityServices,
        ManPowerServices,
        ServiceCategory,
      }}
    >
      {children}
    </ServiceDataContext.Provider>
  );
};

export const ServiceData = () => {
  return useContext(ServiceDataContext);
};





