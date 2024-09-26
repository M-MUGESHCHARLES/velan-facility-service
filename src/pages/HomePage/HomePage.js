import React from "react";
import { HomePageSection1 } from "./Sections/HomePageSection1";
import HomePageSection2 from "./Sections/HomePageSection2";
import Slider from "react-slick";
import Image1 from "../../assets/images/security banner.jpg";
import Image2 from "../../assets/images/DogSquad banners.jpg";
import Image3 from "../../assets/images/housekeeping banner.jpg";
import HomePageSection3 from "./Sections/HomePageSection3";
import { HomePageSection4 } from "./Sections/HomePageSection4";

const CarouselBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    accessibility: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container homepageBanner" id="CarouselBanner">
        <Slider {...settings}>
          <div className="banner-container">
            <div className="card text-bg-dark">
              <img
                src={Image1}
                alt=""
                className="card-img w-100 banner-image"
              />
              <div className="card-img-overlay d-flex text-center align-items-center">
                <div className="col-12 col-md-8 p-5">
                  <h2 className="card-title text-warning fw-bold pb-4">
                    Security Service
                  </h2>
                  <p className="card-text fw-bold ">
                    Security is our core business and we are very passionate
                    about our work.
                  </p>
                  {/* <a
                    href="#"
                    target="parent"
                    className=" d-inline fw-bold pe-5 ps-3 py-2 rounded-1 text-bg-warning text-secondary"
                    id="ReadMore"
                  >
                    
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="banner-container">
            <div className="card text-bg-dark">
              <img
                src={Image2}
                alt=""
                className="card-img w-100 banner-image"
              />
              <div className="card-img-overlay d-flex text-center align-items-center">
                <div className="col-12 col-md-8 p-5">
                  <h2 className="card-title text-warning fw-bold pb-4">
                    Dog Squad Service
                  </h2>
                  <p className="card-text fw-bold">
                    Our dog squad comprise of highly pedigreed and trained
                    German Shepherds, Doberman and Labradors canine along with
                    skilled and experienced handlers.
                  </p>
                  {/* <a
                    href="#"
                    target="parent"
                    className=" d-inline fw-bold pe-5 ps-3 py-2 rounded-1 text-bg-warning text-secondary"
                    id="ReadMore"
                  >
                    
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="banner-container">
            <div className="card text-bg-dark">
              <img
                src={Image3}
                alt=""
                className="card-img w-100 banner-image"
              />
              <div className="card-img-overlay d-flex text-center align-items-center">
                <div className="col-12 col-md-8 p-5">
                  <h2 className="card-title text-warning fw-bold pb-4">
                    House Keeping Service
                  </h2>
                  <p className="card-text fw-bold">
                    We follow best housekeeping practice to earn customer
                    satisfaction and thereby customer retention.
                  </p>
                  {/* <a
                    href="#"
                    target="parent"
                    className=" d-inline fw-bold pe-5 ps-3 py-2 rounded-1 text-bg-warning text-secondary"
                    id="ReadMore"
                  >
                    
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

function HomePage() {
  return (
    <>
      <CarouselBanner />

      <div className="m-0 p-0 px-md-5 mx-md-auto" id="section1">
        <div className="m-0 p-0 px-md-5 mx-md-auto">
          <HomePageSection1 />
        </div>
      </div>

      <div className="m-0 p-0 px-md-5 mx-md-auto" id="section2">
        <div className="m-0 p-0 px-md-5 mx-md-auto">
          <HomePageSection2 />
        </div>
      </div>

      <div className="m-0 p-0 px-md-5 mx-md-auto " id="section3">
        <div className="m-0 p-0 px-md-5 mx-md-auto">
          <HomePageSection3 />
        </div>
      </div>

      <div className="m-0 p-0 px-md-5 mx-md-auto" id="section4">
        <div className="m-0 p-0 px-md-5 mx-md-auto">
          <HomePageSection4 />
        </div>
      </div>
    </>
  );
}

export default HomePage;
