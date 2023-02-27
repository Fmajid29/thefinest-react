import { Button } from "react-bootstrap";
import React from "react";
import "./FoodCard.css";
const FoodCard = (props) => {
  return (
    <div className="Box">
      <img src={props.image} alt="img" />
      <div className="cardTextResponsive">
        <h3>{props.title}</h3>
        <p className="des">{props.description}</p>
        <p>Rs. {props.price}</p>
        <Button className="Addbtn">ADD TO CART</Button>
      </div>
    </div>
  );
};

export default FoodCard;
