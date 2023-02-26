import React from "react";
import { Button } from "react-bootstrap";
import "./Selection.css";
import slide3 from "./slide3.jpg";

const display = document.getElementById("display");
function counter_add() {
  const number = display.innerText;
  display.innerText = parseInt(number, 10) + 1;
}
function counter_minus() {
  const number = display.innerText;
  display.innerText = parseInt(number, 10) - 1;
}

const Selection = () => {
  return (
    <div className="MainSelection">
      <div className="Vimg">
        <img src={slide3} />
        <h2>Name</h2>
        <p>
          Reference site about Lorem Ipsum, giving information on its origins.
          as well as a random Lipsum generator.
        </p>
      </div>
      <div className="NextSection">
        <div className="Sizes">
          <Button>8" S</Button>
          <Button>10" M</Button>
          <Button>13" L</Button>
          <Button>16" XL</Button>
        </div>
        <div>
          <h1 id="toppingsheading">Extra Toppings</h1>
          <div className="toppings">
            <Button>Chicken +20Rs</Button>
            <Button>Cheese +20Rs</Button>
            <Button>Olives +0Rs</Button>
            <Button>Pepperoni +0Rs</Button>
          </div>
          <div className="addsection">
            <div>
              <div className="control">
                <Button onClick={counter_add}>+</Button>
                <div id="display" className="Qdisplay">
                  0
                </div>
                <Button onClick={counter_minus}>-</Button>
              </div>
            </div>
            <div id="pricebox">Price</div>
          </div>
          <Button id="addtocartbtn">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Selection;
