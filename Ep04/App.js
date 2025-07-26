import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -->logo
 *  -->Nav Items
 * Body
 *  -->Search Bar
 *  -->RestaurantList (Restaurant Conatainer)
 *    -->RestaurantCard
 *      --> Image
 *      --> Name of Restaurant, Star rating, Cuisine, delivery time
 *      -->  
 *      --> 
 * Footer
 *  -->Copyright
 *  -->Links
 *  -->Address
 *  -->Contact
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
                    <li>AboutUs</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

 
const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
            className="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o6prrzzimmmnsgeuxf73" 
             alt="res-logo" 
             />
            <h3>Meghana Foods</h3>
            <h4>Veg-Biryani, North-India, Asia</h4>
            <h4>4.4 stars</h4>
            <h4>30 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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
root.render(<AppLayout />);