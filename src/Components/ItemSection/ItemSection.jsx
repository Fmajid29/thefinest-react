import React from 'react'
import FoodCard from './FoodCard';
import './ItemSection.css';
const ItemSection = () => {
  return (
    <div className='mainSection'>

    <FoodCard/>
    <FoodCard/>
    <FoodCard/>
    <FoodCard/>
    <FoodCard/>
    <FoodCard/>
    </div>
  )
}

export default ItemSection