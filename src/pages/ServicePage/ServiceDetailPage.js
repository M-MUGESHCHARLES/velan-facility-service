import React, { useEffect } from 'react'
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
              {service.title}
            </h3>
          </div>
        </div>

        <div className="px-md-5 py-3">
          {service.contents && <service.contents />}
        </div>
      </section>
    </>
  );
}
