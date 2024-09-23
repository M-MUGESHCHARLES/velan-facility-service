import React from 'react'
import Slider from 'react-slick';
import { CardComponent } from './CardComponent';

const CardCarousel = (props) => {
  var settings = {
    dots: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    rows: 1,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    accessibility: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots:false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          fade: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {props.service.map((s, i) => (
          
                <div className=' px-2' key={i}>
                  <CardComponent service={s} category={props.category} />
                </div>
            
        ))}
      </Slider>
    </div>
  );
}

export default CardCarousel