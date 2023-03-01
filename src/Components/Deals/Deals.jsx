import React from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import img from './Deal.jpg';
import './Deals.css';
const Deals = () => {
    return (

       
            <div className='DealCard'>
                <img src={img} alt="Dealimg"/>
                <div className='section2'>
                  <div>
                        <h3>Rs 1500</h3>
                    </div>
                    <div className='details' id='DealDetail'>
                        <p>2 Burgers</p>
                        <p>Regular Fries</p>
                        <p>2 wings</p>
                    </div>
                    <div className='radiobtn'>
                    
                        <Form>
                        
                            {['radio'].map((type) => (
                                <>
                                
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Sprite"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Coke"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />

                                </div>
                                </>
                               
                            ))}
                        </Form>
                    </div>
                    
                </div>

                <Button>Add To Cart</Button>
            </div>
        


    )
}

export default Deals