import React from "react";
import FoodCard from "./FoodCard";
import "./ItemSection.css";
import Pepperoni from "../ItemSection/Pepperoni.jpg";

const ItemSection = () => {
  return (
    <div className="ItemMain">
      <FoodCard
        image={Pepperoni}
        title="Tikka Pizza"
        description="this is the area for description"
        price="900"
      />
      <FoodCard
        image={Pepperoni}
        title="Tikka Pizza"
        description="this is the area for description"
        price="900"
      />
      <FoodCard
        image={Pepperoni}
        title="Tikka Pizza"
        description="this is the area for description"
        price="900"
      />
      <FoodCard
        image={Pepperoni}
        title="Tikka Pizza"
        description="this is the area for description"
        price="900"
      />
      <FoodCard
        image={Pepperoni}
        title="Tikka Pizza"
        description="this is the area for description"
        price="900"
      />
      <FoodCard
        image={Pepperoni}
        title="Tikka Pizza"
        description="this is the area for description"
        price="900"
      />
      <FoodCard
        image={Pepperoni}
        title="Tikka Pizza"
        description="this is the area for description"
        price="900"
      />
    </div>
  );
};

export default ItemSection;
