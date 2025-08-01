import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -LOGO
 * -Nav-links
 * Body
 * -Search
 * -Restautrant Container
 * --Restaurant Card
 * ---Img
 * ---Name of res, star rating, cuisine, delvery time
 * Footer
 * -Links
 * -Contact
 * -Address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lecture-3624ld.png" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
  )
}

const RestaurantCard = () => {
  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
     <img className="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/5697054d-380a-4c96-8f07-a10d07c5e3f8_613953.jpg" 
      alt="res-logo" />
     <h3>Sharma & Vishnu Fast Food, Hamidiya Road</h3>
     <h4>Indian, Snacks, Mughlai, Beverages, Fast Food</h4>
     <h4>4.1 stars</h4>
     <h4>38 minutes</h4>
    </div>
  )
}

const Body = () =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
         <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);
