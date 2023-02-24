import { Button } from "react-bootstrap";
import React from "react";
import "./FoodCard.css";
import Pepperoni from "../ItemSection/Pepperoni.jpg";
const FoodCard = () => {
  return (
    <div className="Box">
      <img src={Pepperoni} />
      <h3>CREAMY TIKKA</h3>
      <Button className="Addbtn">ADD</Button>
    </div>
  );
};

export default FoodCard;
