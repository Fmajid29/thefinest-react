import React from 'react';
import { Button } from 'react-bootstrap';
import { RxCross1 } from 'react-icons/rx';
import './PopUp.css';

const AddItem = ({ setIsOpenPopup }) => {
    return (
        <div className='PopDiv'>
            <div>
                <RxCross1 id='ClosePopup' onClick={setIsOpenPopup.bind(this, false)} />
            </div>
            <div className='SecondDiv'>

                <div className='PopUpInput'>
                    <h2>NAME</h2>
                    <input placeholder='Enter Name' />
                </div>
                <div className='PopUpInput'>
                    <h2>DESCRIPTION</h2>
                    <input placeholder='Description' />
                </div>
                <div className='PopUpInput'>
                    <h2>PRICE</h2>
                    <input placeholder='Enter Price' />
                </div>
                <Button id='PopupBtn'>ADD</Button>
            </div>

        </div>

    )
}

export default AddItem;