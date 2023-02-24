import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";

// import Fries from './fries.png';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Button } from 'react-bootstrap';
import logo from "./logo.png";

const Footer = () => {
    return (
        <div className="footer">
            <Container className="Fcontainer">
                <Row>
                    <Col xs={12} md={12} className="Fsocials">
                        <h3>
                            Get connected with us on social networks{" "}
                            <BsInstagram className="Ficons" />{" "}
                            <FaFacebookF className="Ficons" />
                        </h3>
                    </Col>
                </Row>



                <Row>
                    <Col xs={12} md={3} lg={3} className="Fsec Bborder">
                        <img src={logo} />
                    </Col>
                    <Col xs={12} md={3} className="Bborder">
                        <h1>Information</h1>
                        <p>About Us</p>
                        <p>Help</p>
                        <p>services</p>
                    </Col>
                    <Col xs={12} md={3} lg={3} className="Bborder">
                        <h1>Useful links</h1>
                        <p><SiGooglemaps className='Ficons' /> Google Maps</p>
                        <p> <BsInstagram className='Ficons' /> @TheFinestRestraut</p>
                        <p>   <FaFacebookF className='Ficons' /> @TheFinestRestraut</p>


                    </Col>
                    <Col xs={12} md={3} lg={3} className="Bborder">
                        <h1>Contact</h1>
                        <p><AiFillHome className='Ficons' /> New York, NY 10012, US</p>
                        <p><GrMail className='Ficons' /> info@example.com</p>
                        <p><IoIosCall className='Ficons' /> + 01 234 567 88</p>

                    </Col>
                </Row>

                <Row className='lastR' >
                    <Col xs={12} md={12}>

                        <p>© 2021 Copyright</p>

                    </Col>

                </Row>

               
            </Container>
        </div>


    )
}

export default Footer;




