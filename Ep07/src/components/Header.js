import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import {  } from 'react';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  console.log("Header Rendered");

      return (
          <div className="header">
          <div className="logo-container">
              <img className="logo" src={LOGO_URL} alt="logo" />
          </div>
          <div className="nav-items">
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
                  <button className="login"
                   onClick={() => {
                     btnNameReact === "login" 
                     ? setBtnNameReact("logout")
                     : setBtnNameReact("login");
                   }} >
                   {btnNameReact}
                  </button>
              </ul>
          </div>
          </div>
      )
  }
  

export default Header;