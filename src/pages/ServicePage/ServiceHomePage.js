import React from 'react'
import { CardComponent } from '../../components/CardComponent';
import { ServiceData } from '../../assets/data/ServiceDataContext';

export const ServiceHomePage = (props) => {
    const { ServiceCategory } = ServiceData();

    const Service = ServiceCategory.filter(
      (service) => service.category === props.category
    ); 

  return (
    <> 
    {Service.map((s,i) => (
      <section className="ServicesHomePage" key={i}>
        <div class="card m-0 p-0">
          <img
            src={s.banner}
            className="img-fluid w-100 banner-image"
            alt=""
          />
          <div class="card-img-overlay text-center align-content-center text-white">
            <h3 className="position-relative fw-bold fs-1 mt-auto mb-auto">
              {s.title}
            </h3>
          </div>
        </div>
        <div className="px-md-5 p-0">
          <div className="container  text-center">
            <p className="indent px-5 pb-3 pt-5 fw-medium mx-auto">
              {s.about}
            </p>
          </div>
          <div className="row m-0 p-3 px-5">
            {s.serviceList.map((service, i) => (
              <div className="col-12 col-md-4 mx-auto" key={i}>
                <CardComponent service={service} category={s.category} />
              </div>
            ))}
          </div>
        </div>
      </section> 
    )) }

    </>
  );
};
