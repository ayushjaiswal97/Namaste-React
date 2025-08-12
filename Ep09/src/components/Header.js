import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();

      return (
          <div className="header">
          <div className="logo-container">
              <img className="logo" src={LOGO_URL} alt="logo" />
          </div>
          <div className="nav-items">
              <ul>
              <li>
                Status : { onlineStatus ? "🟢" : "🔴"}
              </li>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About Us</Link>
                </li>
                <li>
                <Link to="/contact">Contact Us</Link>
                </li>
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