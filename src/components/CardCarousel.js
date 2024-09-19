import React from 'react'
import Slider from 'react-slick';
// import { Card } from './Card';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ServiceCard = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "350px", 
      }}
      className="mx-2 my-3 rounded-3 shadow"
    >
      <CardMedia
        component="img"
        alt={props.service.title}
        height="140"
        image={props.service.image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            sx={{
                fontWeight:'bold'
            }}
        >
          {props.service.title}
        </Typography>
        <Typography
          component='p'
          sx={{
            color: "text.secondary",
            display: "-webkit-box", 
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical", 
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize:'12px'
          }}

        >
          {props.service.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


const CardCarousel = (props) => {
  var settings = {
    dots: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    rows: 1,
    infinite: true,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
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
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {props.service.map((s, i) => (
          
                <ServiceCard service={s} key={i}/>
            
        ))}
      </Slider>
    </div>
  );
}

export default CardCarousel