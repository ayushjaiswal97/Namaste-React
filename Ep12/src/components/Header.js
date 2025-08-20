import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the Store using a Selector
  const cartIems = useSelector((store) => store.cart.items);
  console.log(cartIems);

      return (
          <div className="flex justify-between items-center px-4 py-2 bg-green-50 shadow-lg">
            <div className="flex items-center">
              <img className="w-20 h-auto" 
                   src={LOGO_URL} 
                   alt="logo" />
            </div>
            <nav className="flex items-center">
              <ul className="flex items-center space-x-6 cursor-pointer">
                <li className="text-lg text-gray-700">
                  Status : { onlineStatus ? "🟢" : "🔴"}
                </li>
                <li className="text-lg hover:text-green-600 transition-colors">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-lg hover:text-green-600 transition-colors">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="text-lg hover:text-green-600 transition-colors">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="text-lg hover:text-green-600 transition-colors">
                  <Link to="/grocery">Grocery</Link>
                </li>
                <li className="text-xl">
                  <Link to="/cart">🛒{cartIems.length}</Link>
                </li>
                <button 
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  onClick={() => {
                    btnNameReact === "login" 
                      ? setBtnNameReact("logout")
                      : setBtnNameReact("login");
                  }}
                >
                  {btnNameReact}
                </button>
                <li className="font-bold">{loggedInUser}</li>
              </ul>
            </nav>
          </div>
      )
  }
export default Header;
