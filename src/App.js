import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import SelectOrder from "./Pages/SelectOrder";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <SelectOrder /> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
