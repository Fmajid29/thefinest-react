import React from "react";
import {FaPizzaSlice} from 'react-icons/fa';
import {GiHamburger} from 'react-icons/gi';
import {MdFastfood} from 'react-icons/md';
import {CiCoffeeCup} from 'react-icons/ci';
import {FaBreadSlice} from 'react-icons/fa';


import "./Options.css";
const Options = () => {
  return (
    <div className="OptionBar">
      

        
         <ul className="MainBar">
          <li><a href="#"><FaPizzaSlice className="OptionIcon"/><span>PIZZA</span></a></li>
          <li><a href="#"><GiHamburger className="OptionIcon"/><span>BURGER</span></a></li>
          <li><a href="#"><FaBreadSlice className="OptionIcon"/><span>SANDWHICH</span></a></li>
          <li><a href="#"><MdFastfood className="OptionIcon"/><span>OTHERS</span></a></li>
          <li><a href="#"><CiCoffeeCup id="LOptionIcon"/><span>DRINKS</span></a></li>
         </ul>
        
       
      
    </div>
  );
};

export default Options;
