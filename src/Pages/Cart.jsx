import React from 'react'
import Cartitems from '../Components/Cartitems/Cartitems'
import '../Components/Cartitems/Cartitems.css';
import Footer from '../Components/Footer/Footer';

const Cart = () => {
  return (
    <div id='MainCart'>
      <Cartitems/>
      <Footer/>
    </div>
  )
}

export default Cart;