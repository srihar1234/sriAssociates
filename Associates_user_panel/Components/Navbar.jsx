/* eslint-disable no-unused-vars */
import "./Navbar.css";
import {Link} from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa"
import { useState } from "react";
import React from 'react';
import name from "../src/assets/name.jpg";

const Navbar = () => {

  const [click,setClick] = useState(false);
  const handleClick = ()=> setClick(!click);

  const [color,setColor] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changeColor);

  return (

    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src={name} alt="logo"/>
      </Link>

      <ul className={click ? "listMenu active" : "listMenu"}>
        <li><Link to="/">Home</Link></li>   
        {/* <li><Link to="/startup">Startup</Link></li>      */}
        <li><Link to="/gst">GST</Link></li>    
        <li><Link to="/incometax">Income Tax</Link></li>
        {/* <li><Link to="/tax/compliance">Tax and Compliance</Link></li> 
        <li><Link to="/contact">Contact</Link></li>      */}
      </ul>

      <div className="hamBurger" onClick={handleClick}>
        {click ? 
         <FaTimes size={30} style={{color:"black"}}/> 
         :
         <FaBars size={30} style={{color:"black"}}/>
         }       
      </div>

    </div>
  )
}

export default Navbar