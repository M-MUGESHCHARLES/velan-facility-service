import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const CardComponent = (props) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/${props.category}/${props.service.name}`);
  };

  return (
    <Card
      onClick={handleClick}
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "350px",
      }}
      className="mx-auto mx-2 my-3  rounded-3 shadow border-2 border border-warning"
    >
      <CardMedia
        component="img"
        alt={props.service.title}
        height="150"
        image={props.service.image}
      />
      <CardContent sx={{ flexGrow: 1, backgroundColor: "#F0EBE3" }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#0D1282",
          }}
        >
          {props.service.title}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "#787A91",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "12px",
          }}
        >
          {props.service.detail}
        </Typography>
        <CardActions>
          <Typography variant='subtitle2' sx={{fontSize:'10px'}} onClick={handleClick} >
            <button 
              className="text-primary btn icon-link icon-link-hover ms-0 ps-0"
              
            >
              Know More <IoMdArrowRoundForward className="bi" />
            </button>
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};
