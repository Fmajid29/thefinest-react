import React from 'react'
import ItemSec from './ItemSec';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

const Cartitems = () => {
    return (
        <>
            <div className='Itemdiv'>
                <ItemSec />
                <ItemSec />
                <div className='payment'>
                    <h2>Choose a payment method</h2>
                    <Dropdown className='dropdown'>
                        <Dropdown.Toggle id="dropdown-basic">
                            Payment Method
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Cash</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Pay Online</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Card</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='Userform'>
                    <h2>FULL NAME</h2>
                    <input type={Text} placeholder='Full Name' />
                    <h2>EMAIL</h2>
                    <input type='email' placeholder='Email' />
                    <h2>PHONE NUMBER</h2>
                    <input type={Number} placeholder='Phone No' />
                    <h2>ADDRESS</h2>
                    <input type={Text} placeholder='Address' />
                </div>
                <div className='Charges'>
                    <div className='secOne'>
                        <div>
                            <h3>Delivery Charges</h3>
                            <p>Rs 150</p>
                        </div>
                      
                        <div>
                            <h3>Payment Method</h3>
                            <p>Cash on  delivery</p>
                        </div>
                    </div>
                    <div className='secTwo'>
                       
                        <div className='innersecTwo' >
                          <h2>Total Bill</h2> 
                        <div className='TBPrice'>Rs 7896</div>
                        </div>
                        <Button id='OrderNowbtn'>Order Now</Button>
                    </div>
                </div>
            </div>
        </>





    )
}

export default Cartitems;