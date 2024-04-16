/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import "../Components/HeroImage.css";
import Accounts from "../src/assets/Accounts.jpg"

const HeroImage = () => {
  return (
    <div className="hero"> 
    <div className="mask">
      <img className="introImage" src={Accounts} alt="introImg"/>
    </div>
    <div className="content">
      <h1>BEGIN YOUR JOURNEY AS A BUSINESS OWNER WITH US</h1>
      <div className="buttons">
        <button className='btn'>EXPLORE MORE</button>
      </div>
    </div>  
  </div>
  )
}

export default HeroImage
