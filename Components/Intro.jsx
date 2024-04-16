/* eslint-disable no-unused-vars */
import React from 'react'
import "../Components/Intro.css";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

const Intro = () => {
    return (
        <div className="footer">
        <div className="footer-container">
  
          <div className="left">
              <div className="location">
                  <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                  <div>
                      <p>PLG Building, 11/111, next to BANK OF BARODA, Aranthangi, Tamil Nadu 614616</p>
                      <p>Tamil Nadu,India</p>
                  </div>
              </div>
  
              <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                +91 9442067042
                </h4>
                <h4>
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                +91 8903670624
                </h4>
              </div>
  
              <div className="mail">
              <h4>
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                sriassociates614616@gmail.com
                </h4>
              </div>
  
          </div>
  
          <div className="right">
              <h4>Connect with us in</h4>
              <div className="social">
              <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              </div>
          </div> 
  
        </div>
      </div>
    )
}

export default Intro
