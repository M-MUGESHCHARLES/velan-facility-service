import React from "react";
import { ServiceData } from "../../../assets/data/ServiceDataContext";
import { Button } from "@mui/material";
import Facility from "../../../assets/images/Facility-services.jpg";
import CardCarousel from "../../../components/CardCarousel";

const HomePageSection3 = () => {
  const { FacilityServices } = ServiceData();

  return (
    <>
      <section className="py-3 px-5 row m-0" id="HomePageSection2">
        <div className="row m-0">
          <div className="col-12 text-center">
            <h2 className="my-2 fw-bold lh-base">
              <span className="Heading-Text">FACILITY MANAGEMENT SERVICES</span>
            </h2>
          </div>
          <div className="col-12 row m-0 p-0">
            <div
              className="col-12 col-lg-4 d-flex align-items-center"
              id="right"
            >
              <img
                src={Facility}
                alt=""
                height="auto"
                width="90%"
                className="mx-auto px-2 py-3"
              />
            </div>
            <div className="col-12 col-lg-8 fw-semibold p-0 d-flex" id="left">
              <p className="text-center align-self-center indent">
                VFS Facility Management services are unique due to our in-depth
                understanding of customers’ individual needs and the extensive
                experience upon which we have built best practices and our
                company. Our Facility Management services provide Housekeeping
                Service, Office Boy Service, Pantry Boy Service, and Labour
                Service.
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
          </div>
          <div className="col-12 py-4 p-0">
            <CardCarousel
              service={FacilityServices}
              category="facility-service"
            />
          </div>
        </div>
        <div className="mx-auto">
          <hr className="hr" />
        </div>
      </section>
    </>
  );
};

export default HomePageSection3;
