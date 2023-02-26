import React from "react";
import FoodCard from "./FoodCard";
import "./ItemSection.css";
const ItemSection = () => {
  return (
    <div className="ItemMain">
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </div>
  );
};

export default ItemSection;
