import React from 'react';
import { Button } from 'react-bootstrap';
import './Selection.css';
import slide3 from './slide3.jpg';
const Selection = () => {
    return (
        <div className='MainSelection'>
            <div className='Vimg'>
                <img src={slide3} />
            </div>
            <div className='NextSection'>
                <div className='Sizes'>
                    <Button>8" S</Button>
                    <Button>10" M</Button>
                    <Button>13" L</Button>
                    <Button>16" XL</Button>
                </div>
                <div >
                   <h1>Extra Toppings</h1>
                    <div className='toppings'>
                        <Button>Chicken</Button>
                        <Button>Cheese</Button>
                        <Button>Olives</Button>
                        <Button>Pepperoni</Button>
                        
                    </div>
                    <div className='addsection'>
                    
                        <Button>Add To Cart</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Selection