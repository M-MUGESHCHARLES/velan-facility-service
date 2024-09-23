import React from "react";
import { ServiceData } from "../../../assets/data/ServiceDataContext";
import CardCarousel from "../../../components/CardCarousel";
import { Button } from "@mui/material";
import ManPower from "../../../assets/images/manpower-services.jpeg";

export const HomePageSection4 = () => {
  const { ManPowerServices } = ServiceData();

  return (
    <>
      <section className="py-3 px-5 row m-0" id="HomePageSection2">
        <div className="row m-0">
          <div className="col-12 text-center">
            <h2 className="my-2 fw-bold lh-base">
              <span className="Heading-Text">MANPOWER SERVICES</span>
            </h2>
          </div>
          <div className="col-12 row m-0 p-0">
            <div
              className="col-12 col-lg-8 fw-semibold p-0 d-flex order-1 order-lg-0"
              id="left"
            >
              <p className="text-center align-self-center indent">
                We Velan Facility Services provide all type of Manpower Services
                required for Back Office, Front Office and Labour Service. More
                and more organisation are successfully hiring their Human
                Resource requirement on contract basis, as it protects them
                against inefficiency of staff, high replacement cost, compliance
                issue and complexity of labour laws.
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
                src={ManPower}
                alt=""
                height="auto"
                width="90%"
                className="mx-auto px-2 py-3"
              />
            </div>
          </div>
          <div className="col-12 py-4 p-0">
            <CardCarousel
              service={ManPowerServices}
              category="manpower-service"
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
