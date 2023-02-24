import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import './Navbar.css';
import { Button } from 'react-bootstrap';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="main">
            <div className="Bar">
                <div className="navbarLogo">
                    <img src={logo} />
                </div>
                <div className="container">
                    <p><a href="#home">HOME</a></p>
                    <p><a href="#wgpt3">MENU</a></p>
                    <p><a href="#possibility">DEALS</a></p>

                </div>
                <div className="navbarCart">

                    <img src={cart} />
                </div>
            </div>

            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu_container">
                        <div className="navbar-menu_container-links">
                            <p><a href="#home">HOME</a></p>
                            <p><a href="#wgpt3">MENU</a></p>
                            <p><a href="#possibility">ABOUT</a></p>
                            <Button id='cartbtn'>View Cart</Button>


                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;