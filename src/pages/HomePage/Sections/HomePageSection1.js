import React from 'react'
import Hero1 from '../../../assets/images/heroimg1.png'

export const HomePageSection1 = () => {
  return (
    <section className="py-3 px-5 row m-0" id="HomePageSection1">
      <h2 className="my-3 text-center text-decoration-underline mb-4 link-offset-2 link-offset-1-hover lh-base" style={{fontWeight:'900'}}>
        
        WELCOME TO VELAN FACILITY SERVICE
      </h2>
      <div className="col-12 col-lg-5 d-flex align-items-center" id="left">
        <img
          src={Hero1}
          alt=""
          height="auto"
          width="90%"
          className="mx-auto px-2 py-3"
        />
      </div>
      <div className="col-12 col-lg-7 fw-semibold" id="right">
        <p className="indent">
          We take immense pleasure in introducing Velan Facility Service
          {`(VFS) –`} a team of smart security and manpower professionals
          committed to ensuring a safe, secure, and vigilant environment for
          you.
        </p>
        <p className="indent">
          Our security infrastructure has been meticulously designed with utmost
          care and precision under the expert guidance of skilled retired police
          officers and ex-defense personnel, ensuring that your premises are
          well-protected and fortified. VFS is strengthened by a well-trained
          and disciplined guard force, supported by a 24-hour control office
          that responds promptly to any emergencies, ensuring uninterrupted
          service.
        </p>
        <button className="btn btn-outline-warning fw-bold">
          Read More...
        </button>
      </div>
      <div className="mx-auto">
        <hr className="hr" />
      </div>
    </section>
  );
};

            //   <p>
            //        Based in Chennai, we offer an
            //       integrated range of services including Armed & Unarmed Manned Guarding,
            //       Bouncer & Bodyguard Services, Event Security Management, Facility
            //       Management, Housekeeping, Skilled & Unskilled Manpower Services, and
            //       Investigation Services.
            //   </p>
            //   <p>
            //       Our professional team is dedicated to providing
            //       world-class services to meet your needs, whether it{`’`}s securing your
            //       business, events, or personal safety. With VFS, you can rest assured that
            //       your security is in expert hands.
            //   </p> 
            //   <p>
            //       We look forward to being at your service
            //       and furthering your success with reliable and comprehensive security
            //       solutions.
            //   </p>