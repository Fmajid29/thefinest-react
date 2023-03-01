import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Components/Review.css';
const ReviewPage = () => {
    return (
        <div >
          <Form className='MainFeedback'>
      <Form.Group className="mb-3 sec" controlId="formBasicEmail">
        <Form.Label style={{fontSize:'2rem', fontWeight:'bolder'}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='input'/>
       
      </Form.Group>

      <Form.Group className="mb-3 sec " controlId="formBasicPassword" >
        <Form.Label style={{fontSize:'2rem', fontWeight:'bolder'}}>FeedBack</Form.Label>
        <Form.Control type="text" placeholder="Let Us Know" id='Feedbackinput'/>
        
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}

export default ReviewPage;