import React from 'react';
import { Button } from 'react-bootstrap';
import './Selection.css';
import slide3 from './slide3.jpg';
const Selection = () => {
  return (
    <div className='MainSelection'>
        <div className='Vimg'>
            <img src={slide3}/>
        </div>
        <div>
            <div>
                <Button></Button>
            </div>
            <div>
                <h2>Extra Toppings</h2>
                <div> 
                <Button></Button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Selection