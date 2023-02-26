import React from 'react'
import './Cartitems.css';
import { RxCross1 } from 'react-icons/rx';
import item from "./item.jpg";
import { Button } from 'react-bootstrap';


const display = document.getElementById('display');
function counter_add() {
    const number = display.innerText;
    display.innerText = parseInt(number, 10) + 1;
}
function counter_minus() {
    const number = display.innerText;
    display.innerText = parseInt(number, 10) - 1;
}

const ItemSec = () => {
    return (
        <div className='Itemsec'>
            <img src={item} alt='item' />
            <div>
                <p>Et est sit labore veniam labore.</p>
                <div className='QtyPrc'>
                    <div className='control'>
                        <Button onClick={counter_minus}>-</Button>
                        <div id='display' className='Qdisplay'>0</div>
                        <Button onClick={counter_add}>+</Button>
                    </div>
                    <p>Rs 900</p>
                </div>

            </div>
            <RxCross1 />
        </div>
    )
}

export default ItemSec