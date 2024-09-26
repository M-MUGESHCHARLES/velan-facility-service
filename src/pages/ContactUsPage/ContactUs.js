import React from "react";
import Contact_Us2 from "../../assets/images/contact-us banner2.jpg";
import Contact_Us from '../../assets/images/contact-us banner.jpg'
import Slider from "react-slick";
import { FaMapLocationDot } from "react-icons/fa6";
import { ButtonsSection } from "../../components/ButtonsSection";

const Banner = () =>  {
  var settings = {
    dots: false,
    arrows:false,
    pauseOnHover: true,
    pauseOnFocus: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    accessibility: true,
    adaptiveHeight: true,
  };
 return (
     <Slider {...settings}>
       <img src={Contact_Us} className="img-fluid w-100 banner-image" alt="" />
       <img src={Contact_Us2} className="img-fluid w-100 banner-image" alt="" />
     </Slider>
 );};

function ContactUs() {

  return (
    <div className="">
      <div class="card m-0 p-0">
        <Banner />
        <div class="card-img-overlay text-center align-content-center text-white">
          <h3 className="position-relative fw-bold fs-1 mt-auto mb-auto">
            <span className="border-5 rounded-4 border-secondary border py-3 px-1 border-start-0 border-end-0 ">
              <span className="border-5 rounded-3 border-secondary-subtle border py-2 px-4 border-bottom-0 border-top-0 ">
                Contact Us
              </span>
            </span>
          </h3>
        </div>
      </div>

      <div class="py-4 px-5" id="contact-us">
        <div class="container">
          <h2 className="text-center fw-bold my-4 ">
            <span className="Heading-Text">Contact Us</span>
          </h2>
          <div class="row ">
            <div class="col-12 col-md-5 col-lg-6 px-lg-5 ">
              <p className="indent">
                You can reach us through call, filling up enquiry form, whatsapp
                or through an email. We respond instantly. Our office addresses
                are given below:
              </p>

              <p className="fw-semibold mb-4">
                Our security company alternate contact number is <br />
                <strong>
                  
                  <a href="tel:+917092140297"> 7092140297</a>
                </strong> &nbsp;
                / &nbsp;
                <strong>
                  
                  <a href="tel:+916369292028"> 6369292028</a>
                </strong>
              </p>
              <ul className="list-unstyled">
                <li className="address">
                  <h4 className="fs-3 C1 fw-bold mb-3">
                    <FaMapLocationDot /> VELAN FACILITY SERVICE
                  </h4>
                  <p className="fw-semibold">
                    No.6, R.E.Nagar,4th Street(West)
                    <br />
                    Porur, Chennai - 600116
                    <br />
                    Phone: 7092140297
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-7 col-lg-6 px-lg-5">
              <h3 className="fw-semibold C1">Get a Quote</h3>
              <p className="fw-semibold mb-4">
                Please fill up the Inquiry Form. We will contact you within 2
                working hours
              </p>

              <div class="wpcf7 js" id="wpcf7-f32-o2" lang="en-US" dir="ltr">
                <div class="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true"></p>
                  <ul></ul>
                </div>
                <form
                  action="/contact-us/#wpcf7-f32-o2"
                  method="post"
                  class="wpcf7-form init"
                  aria-label="Contact form"
                  novalidate="novalidate"
                  data-status="init"
                >
                  <div style={{ display: "none" }}>
                    <input type="hidden" name="_wpcf7" value="32" />
                    <input type="hidden" name="_wpcf7_version" value="5.9.8" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      value="wpcf7-f32-o2"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      value="0"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_posted_data_hash"
                      value=""
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_recaptcha_response"
                      value="03AFcWeA6MNXuI5ZuBk3FaEGkGe39U9VZ3Sj16Q0MQ8UHrjodXtQcr_bjocfidDDtnfQlzJXMtRR5q_5omO9Xey8yzgfAIpE_kDPmmyS_pbqVD2pgS7Txhz3Cz4B6_T7BxXZOrZnX673NLnApUgVpYpzVM_khahW6MhblrBzNANcXXRLAH7E5zdiVziqJU7kmVHV3xX_gOA1uBGRiYGTbnfHK75BB2jKsCWxLoecl7lu4DZU6qU8vUMlZxXmLb_atJ_eq4q4XeM2P0I3ivgMf4oTPsC2Mshmfw39rPdayB4LnQGzvvVPblOVlul9--S1gCmstdt9ZUBfwM9ZutbXJIKzp74PfrrwBrGCjfBnsJaLF46G2w20s3DoVFwiAUQNZHe7n2N5JANjeSUDG7S1r6mQmJ_jTodN07NCovt0q6PxXLx_HgYhXykPnu0tTIHXvjOhjfRcmaFCb7w4M7H2kj6JX1c0AEo6fZrUIn8YcCLP8LyZmo_R8e12LCKPOYeVICGK67I2bkMctZZAFC8dUW-wjEdFwoP53hSyxshgsKA1LBKFlliLGGgPRFJ9-0RBdGigkRexhJpzIYkMokAaz1Hk6PtXYp3EyH-pTQRoWlN8n6zdXHyNmPFEAEsGlaaxbQonaUH8biVwQgcRAWpMLHHeEtHBeX_v5_1OyjhatmwSPbvd8SLYhtE9bTuHf-QPQj3WZWXLQF9KVdg7tqwNp1zekavTydwZYp9Xyl1vSfYQlGm8AvfVX7QfY7REQQhVj2N8GBv6-gUSuSIIA4iADxMLforBe90TvahACsnQ_ETur3hrLQdr2tqMcPUdh41WniQZO-A3a3wd_ocE_vO6QBBVhTbbU19bWZWA09yIDNtfhAqr9mDNZmIBB7-h3K7KjERVC2asHhNzZzFXFTeODONdp9WAiojJu2l9fUFsciH_dADj6lJGODN64"
                    />
                  </div>
                  <div class="row">
                    <div class="col-sm-6 form-group">
                      <p>
                        <label>Contact Persons Name:</label>
                        <span
                          class="wpcf7-form-control-wrap"
                          data-name="your-name"
                        >
                          <input
                            size="40"
                            maxlength="400"
                            class="wpcf7-form-control wpcf7-text form-control"
                            aria-invalid="false"
                            value=""
                            type="text"
                            name="your-name"
                          />
                        </span>
                      </p>
                    </div>
                    <div class="col-sm-6 form-group">
                      <p>
                        <label>Email:</label>
                        <span
                          class="wpcf7-form-control-wrap"
                          data-name="your-email"
                        >
                          <input
                            size="40"
                            maxlength="400"
                            class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="abc@example.com"
                            value=""
                            type="email"
                            name="your-email"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 form-group">
                      <p>
                        <label>Contact Number:</label>
                        <span
                          class="wpcf7-form-control-wrap"
                          data-name="your-phone"
                        >
                          <input
                            size="40"
                            maxlength="400"
                            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                            aria-required="true"
                            aria-invalid="false"
                            value=""
                            type="text"
                            name="your-phone"
                          />
                        </span>
                      </p>
                    </div>
                    <div class="col-sm-6 form-group">
                      <p>
                        <label>Company Name:</label>
                        <span
                          class="wpcf7-form-control-wrap"
                          data-name="your-company"
                        >
                          <input
                            size="40"
                            maxlength="400"
                            class="wpcf7-form-control wpcf7-text form-control"
                            aria-invalid="false"
                            value=""
                            type="text"
                            name="your-company"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="form-group">
                    <p>
                      <label>Your Inquiry:</label>
                      <span
                        class="wpcf7-form-control-wrap"
                        data-name="your-message"
                      >
                        <textarea
                          cols="40"
                          rows="10"
                          maxlength="2000"
                          class="wpcf7-form-control wpcf7-textarea form-control"
                          aria-invalid="false"
                          name="your-message"
                        ></textarea>
                      </span>
                    </p>
                  </div>
                  <div class="">
                    <p>
                      <input
                        class="wpcf7-form-control wpcf7-submit has-spinner btn btn-primary"
                        type="submit"
                        value="Submit"
                      />
                      <span class="wpcf7-spinner"></span>
                    </p>
                  </div>
                  <div class="wpcf7-response-output" aria-hidden="true"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto col-10">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2117.040146819699!2d80.1367948361909!3d13.018643867079401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52605a1aa6362f%3A0xe041c4ae0d786324!2sLakshmi%20Nagar%2C%20Moulivakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1726997115108!5m2!1sen!2sin"
          className="w-100 shadow-lg rounded-4"
          height="350"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ButtonsSection/>
    </div>
  );
}

export default ContactUs;


{
  /* <form class="row g-3">
                <div class="form-floating mb-2 col-12 col-md-10">
                  <input type="text" class="form-control" id="floatingPassword" placeholder="Your Name"/>
                  <label htmlFor="floatingPassword" className="ps-4"> Your Name</label>
                </div>
                <div class="form-floating mb-2 col-12 col-md-10 ">
                  <input type="text" class="form-control" id="floatingInput" placeholder="Phone"/>
                  <label htmlFor="floatingInput" className="ps-4">Phone </label>
                </div>
                <div class="form-floating mb-2 col-12">
                  <input type="email" class="form-control" id="floatingInput" placeholder="E-mail"/>
                  <label htmlFor="floatingInput" className="ps-4">E-mail </label>
                </div>
                <div class="form-floating mb-3 col-12">
                  <textarea class="form-control" placeholder="Your Enquiry" id="floatingTextarea2" style={{height:"100px"}}></textarea>
                  <label htmlFor="floatingTextarea2" className="ps-4">Your Enquiry</label>
                </div>
              </form> */
}