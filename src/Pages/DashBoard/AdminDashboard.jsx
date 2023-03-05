import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import './Amin.css';
import AddItem from "./AddItem";
const AdminDashboard = () => {
  const[isOpenPopup,setIsOpenPopup]=useState(false);
  return (
    <div className="Omain">
      <div className="Sections">
      <div className="head">
      <h1>DEALS</h1>
        <Button className="PopUpAddbtn" onClick={setIsOpenPopup.bind(this,true)}>+</Button>
        {isOpenPopup && <AddItem setIsOpenPopup={setIsOpenPopup}/>}
      </div>
      

        <div className="ItemsDiv">
          <h2>Name</h2>
          <div>
            <AiTwotoneEdit className="ManageIcons"/>
            <AiTwotoneDelete className="ManageIcons"/>
          </div>

        </div>
        <div className="ItemsDiv">
          <h2>Name</h2>
          <div>
            <AiTwotoneEdit className="ManageIcons"/>
            <AiTwotoneDelete className="ManageIcons"/>
          </div>

        </div>
        <div className="ItemsDiv">
          <h2>Name</h2>
          <div>
            <AiTwotoneEdit className="ManageIcons"/>
            <AiTwotoneDelete className="ManageIcons"/>
          </div>

        </div>
      </div>

      <div className="Sections">
      <div className="head">
      <h1>PIZZA</h1>
        <Button className="PopUpAddbtn">+</Button>
      </div>
      

        <div className="ItemsDiv">
          <h2>Name</h2>
          <div>
            <AiTwotoneEdit className="ManageIcons"/>
            <AiTwotoneDelete className="ManageIcons"/>
          </div>

        </div>
        <div className="ItemsDiv">
          <h2>Name</h2>
          <div>
            <AiTwotoneEdit className="ManageIcons"/>
            <AiTwotoneDelete className="ManageIcons"/>
          </div>

        </div>
        <div className="ItemsDiv">
          <h2>Name</h2>
          <div>
            <AiTwotoneEdit className="ManageIcons"/>
            <AiTwotoneDelete className="ManageIcons"/>
          </div>

        </div>
      </div>
    </div>
  );

};

export default AdminDashboard;
