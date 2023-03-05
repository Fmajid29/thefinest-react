import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";
import { FaBreadSlice } from "react-icons/fa";

import "./Options.css";
const Options = () => {
  return (
    <div className="OptionBar">
      <ul className="MainBar">
        <li>
          <FaPizzaSlice className="OptionIcon" />
          <span>PIZZA</span>
        </li>
        <li>
          <GiHamburger className="OptionIcon" />
          <span>BURGER</span>
        </li>
        <li>
          <FaBreadSlice className="OptionIcon" />
          <span>SANDWHICH</span>
        </li>
        <li>
          <MdFastfood className="OptionIcon" />
          <span>OTHERS</span>
        </li>
        <li>
          <CiCoffeeCup id="LOptionIcon" />
          <span>DRINKS</span>
        </li>
      </ul>
    </div>
  );
};

export default Options;
