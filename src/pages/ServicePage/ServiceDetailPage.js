import React from 'react'
import { useParams } from 'react-router-dom'
import { ServiceData } from '../../assets/data/ServiceDataContext';

export const ServiceDetailPage = () => {
    const { category, serviceName} = useParams();
    const {ServiceCategory} = ServiceData();

    const service = ServiceCategory.find(
        (s) => category === s.category )?.serviceList.find(
        (service) => service.name === serviceName);
 
  return (
    <>
      <section className="ServiceDetailPage">
        <div class="card m-0 p-0">
          <img
            src={service.image}
            className="img-fluid w-100 banner-image"
            alt=""
          />
          <div class="card-img-overlay text-center align-content-center text-white">
            <h3 className="position-relative fw-bold fs-1 mt-auto mb-auto">
              <span className="border-5 rounded-4 border-warning border py-3 px-1 border-bottom-0 border-end-0 ">
                <span className="border-5 rounded-3 border-warning-subtle border py-2 px-4 border-bottom-0 border-end-0 ">
                  {service.title}
                </span>
              </span>
            </h3>
          </div>
        </div>

        <h3 className="my-4 fw-bold lh-base text-center">
          <span className="Heading-Text">{service.title} Service </span>
        </h3>

        <div className="px-lg-5">
          <div className="px-md-5 pb-3">
            {service.contents && <service.contents />}
          </div>
        </div>
      </section>
    </>
  );
}
