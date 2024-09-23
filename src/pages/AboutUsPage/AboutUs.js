import React from "react";
import { ReactComponent as Mission } from "../../assets/svg/mission.svg";
import { ReactComponent as Purpose } from "../../assets/svg/purpose.svg";
import WhyChooseUs from "../../assets/images/whychooseus.jpg";
import HowWeWork from "../../assets/images/HowWeWork.jpg";
import WhyUs from "../../assets/images/why1.jpg";
import About_Us from '../../assets/images/about-us-banner.jpeg'

export const AboutUs = () => {
  return (
    <section className="" id="AboutUs">
      <div class="card m-0 p-0">
        <img src={About_Us} className="img-fluid w-100 banner-image" alt="" />
        <div class="card-img-overlay text-center align-content-center text-white">
          <h3 className="position-relative fw-bold fs-1 mt-auto mb-auto">
            <span className="border-5 rounded-4 border-secondary border py-3 px-1 border-start-0 border-end-0 ">
              <span className="border-5 rounded-3 border-secondary-subtle border py-2 px-4 border-bottom-0 border-top-0 ">
                ABout Us 
              </span>
            </span>
          </h3>
        </div>
      </div>
      <div className="px-5 pt-5 pb-3">
        <div className="d-grid text-center container m-0">
          <h1
            className=" fw-bold C1 text-decoration-underline mb-4 link-offset-2 link-offset-1-hover"
            style={{ fontWeight: "900" }}
          >
            WELCOME TO VELAN FACILITY SERVICE
          </h1>
          <p className=" fw-semibold indent">
            Welcome to Velan Facility Service (VFS), where safety, security, and
            manpower excellence meet. We pride ourselves on providing highly
            professional and tailored facility management services, designed to
            meet the unique needs of each client. With a team led by skilled,
            retired police officers and ex-defense personnel, we guarantee a
            secure, vigilant environment for your organization. Our services are
            supported by a well-trained, disciplined guard force and a 24-hour
            control office, ready to respond to any emergency situation.
          </p>
        </div>
        <div className="mx-auto w-75">
          <hr className="hr" />
        </div>
  
        <div>
          <div className="px-md-5" id="OurMission">
            <h2 className="text-center fw-bold my-4 ">
              <span className="Heading-Text">Our Mission</span>
            </h2>
            <div className="row m-0">
              <div className="col-12 col-md-4 text-center">
                <Mission className="mission-svg" />
              </div>
              <div className="col-12 col-md-8 d-flex align-items-center">
                <p className="indent">
                  At VFS, our mission is to manage talent for sustainable growth.
                  We build strong, lasting relationships with our clients by
                  delivering tailored solutions that ensure security and
                  operational efficiency. Our aim is to be a trusted partner for
                  all your facility management needs.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-75">
            <hr className="hr" />
          </div>
  
          <div className="px-md-5" id="OurPurpose">
            <h2 className="text-center fw-bold my-4 ">
              <span className="Heading-Text">Our Purpose</span>
            </h2>
            <div className="row m-0">
              <div className="col-12 col-md-8 d-flex align-items-center order-1 order-md-0 ">
                <p className="indent ">
                  We believe in finding the best talent to match the market’s
                  needs. At VFS, we secure the right candidates for the right
                  roles to provide the best possible services. Whether it's
                  security personnel, housekeeping, or manpower contracting, our
                  team is dedicated to achieving excellence.
                </p>
              </div>
              <div className="col-12 col-md-4 text-center order-0 order-md-1">
                <Purpose className="purpose-svg" />
              </div>
            </div>
          </div>
          <div className="mx-auto w-75">
            <hr className="hr" />
          </div>
  
          <div className="px-md-5" id="OurServices">
            <h2 className="text-center fw-bold my-4 ">
              <span className="Heading-Text">Our Services</span>
            </h2>
            <div className="row m-0">
              <div className="col-10 col-md-4 mx-auto">
                <h6 className="fw-bold">Security services :</h6>
                <ul>
                  <li>Security Gaurd</li>
                  <li> Bouncer and BodyGaurd</li>
                  <li>Escort Gaurd</li>
                  <li>Female Gaurd</li>
                  <li>Cash Management</li>
                  <li>Dog Squad</li>
                  <li>Event Security</li>
                  <li>Tourist Security</li>
                  <li>Office Security</li>
                  <li> Building Security</li>
                  <li>Bank Security</li>
                  <li>Industrial Security</li>
                  <li>Retail Security</li>
                  <li>Hospital Security</li>
                  <li>Property Security </li>
                  <li>School Security</li>
                </ul>
              </div>
              <div className="row m-0 p-0 col-10 col-md-8 mx-auto">
                <div className=" col-12 col-md-6">
                  <h6 className="fw-bold">Facility Services :</h6>
                  <ul className="">
                    <li>Corporate House Keeping</li>
                    <li>Office Boy</li>
                    <li>Pantry Boy</li>
                  </ul>
                </div>
  
                <div className=" col-12 col-md-6">
                  <h6 className="fw-bold"> Manpower Services :</h6>
                  <ul className="">
                    <li>Front & Back Office Manpower</li>
                    <li>Temporary Staffing</li>
                    <li>Event Staffing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-75">
            <hr className="hr" />
          </div>
          <div className="row m-0 px-md-5 " id="WhyChoose">
            <h2 className="C1 col-12 my-4 fw-bold order-0 text-decoration-underline mb-4 link-offset-2 link-offset-1-hover">
              Why Choose VFS ?
            </h2>
            <div className="col-10 col-md-4 order-1 order-md-2 text-center mx-auto ">
              <img src={WhyChooseUs} alt="" className="mx-auto w-75 h-auto" />
            </div>
            <p className="col-md-8 col-12 order-2 order-md-1 indent ">
              Our team consists of well-trained professionals, led by Mr. G. Malai
              Chamy, a retired army officer and the Managing Director of VFS. His
              extensive experience in vigilance and investigation guarantees
              top-notch service. We provide continuous training to our guards and
              supervisors, equipping them with the latest security tools and
              technologies. Our services are supported by comprehensive training
              in fire-fighting, first-aid, vehicle parking, and much more. 24/7
              Monitoring: We maintain a vigilant watch over your premises,
              ensuring safety through regular surprise inspections and
              round-the-clock availability.
            </p>
          </div>
          <div className="mx-auto w-75">
            <hr className="hr" />
          </div>
          <div className="row m-0 px-md-5 " id="HowWeWork">
            <h2 className="C1 my-4 col-12 fw-bold text-decoration-underline mb-4 link-offset-2 link-offset-1-hover">
              How We Work ?
            </h2>
            <div className="col-10 col-md-4 text-center mx-auto">
              <img
                src={HowWeWork}
                alt=""
                height="auto"
                className="mx-auto h-auto w-75 "
              />
            </div>
            <p className="col-12 col-md-8 indent ">
              Our inspection team operates 24/7 to ensure consistent security and
              safety standards. We provide easy and flexible payment options,
              including handling legal entitlements like PF, ESI, and bonuses for
              our security personnel. Our security staff are always well-groomed
              and dressed in easily identifiable uniforms, with options for
              customization as per your requirements.
            </p>
          </div>
          <div className="mx-auto w-75">
            <hr className="hr" />
          </div>
          <div className="row m-0 px-md-5" id="WhyUs">
            <h2 className="C1 my-4 col-12 order-0 fw-bold text-decoration-underline mb-4 link-offset-2 link-offset-1-hover">
              Why Us ?
            </h2>
            <div className="col-10 col-md-4 order-1 order-md-2 text-center mx-auto ">
              <img src={WhyUs} alt="" className="mx-auto w-75 h-auto" />
            </div>
            <p className="col-md-8 col-12 order-2 order-md-1 indent ">
              We offer reliable, hassle-free services that anticipate potential
              issues, ensuring smooth operations for our clients. Our experienced
              team is equipped with modern technology to deliver unmatched
              security services, including the provision of lady guards if needed.
              At Velan Facility Service, we ensure that your environment remains
              secure, professional, and well-managed, providing you with peace of
              mind and the highest standard of service.
            </p>
          </div>
        </div>
        <div className="mx-auto w-50">
          <hr className="hr" />
        </div>
      </div>
    </section>
  );
};
