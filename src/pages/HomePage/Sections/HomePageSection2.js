import React from 'react'
import Security from '../../../assets/images/security services.jpeg'
import CardCarousel from '../../../components/CardCarousel';
import { ServiceData } from '../../../assets/data/ServiceDataContext';
import { Button } from '@mui/material';

const HomePageSection2 = () => {

    const {SecurityServices} = ServiceData();

  return (
    <section className="py-3 px-5 row m-0" id="HomePageSection2">
      <div className="row m-0">
        <div className="col-12 text-center">
          <h2 className="my-2 fw-bold mb-4 lh-base">
            <span className='Heading-Text'>SECURITY SERVICES</span>
          </h2>
        </div>
        <div className="col-12 row m-0 p-0">
          <div
            className="col-12 col-lg-8 fw-semibold p-0 d-flex order-1 order-lg-0"
            id="left"
          >
            <p className="text-center align-self-center indent">
              Security is at the heart of our business, and we approach our work
              with passion and dedication. In today{`’`}s fast-changing world,
              Manned Guarding is no longer a one-size-fits-all solution. The
              expectations for security personnel have evolved, and the required
              capabilities can differ greatly, even within the same
              organization. <br />
              <br />
              At Velan Facility Service (VFS), we understand that each client
              {`’`}s security needs are unique. That{`’`}s why we offer
              customized security solutions, carefully tailored after assessing
              your specific pain points, taking into account factors such as the
              size, location, and nature of your business.
              <Button
                variant="text"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Read More...
              </Button>
            </p>
          </div>
          <div
            className="col-12 col-lg-4 d-flex align-items-center order-0 order-lg-1"
            id="right"
          >
            <img
              src={Security}
              alt=""
              height="auto"
              width="90%"
              className="mx-auto px-2 py-3"
            />
          </div>
        </div>
        <div className="col-12 py-4 p-0">
          <CardCarousel service={SecurityServices} category='security-service'/>
        </div>
      </div>
      <div className="mx-auto">
        <hr className="hr" />
      </div>
    </section>
  );
}

export default HomePageSection2

