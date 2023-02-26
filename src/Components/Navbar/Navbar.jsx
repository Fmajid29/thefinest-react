import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="main">
      <div className="Bar">
        <div className="navbarLogo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="container">
          <p>
            <Link to="/">HOME</Link>
          </p>
          <p>
            <Link to="/footer">MENU</Link>
          </p>
          <p>
            <Link to="/footer">ABOUT</Link>
          </p>
        </div>
        <div className="navbarCart">
          <Link to="/cart">
            <img src={cart} alt="cart logo" />
          </Link>
        </div>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <p>
                <Link to="/">HOME</Link>
              </p>
              <p>
                <a href="#wgpt3">MENU</a>
              </p>
              <p>
                <Link to="/cart">ABOUT</Link>
              </p>
              <Button id="cartbtn">View Cart</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
