import RestaurantCard  from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{
  // local state variable - super powerful variable  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect (() =>{
    fetchData();
  }, []);

  const fetchData = async () =>{
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.062017821881533&lng=72.54186391723825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Conditional Rendering 
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"  className="search-button" value={searchText} 
          placeholder="Search" onChange={(e) =>{
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) => 
              res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurants);
          }}>Search</button>
        </div>
        <button className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter((res) => 
              res.info.avgRating > 4.5);
            setFilteredRestaurant(filteredList);
          }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
         <Link 
          key={restaurant.info.id}
         to={"/restaurants/" + restaurant.info.id}>
         <RestaurantCard resData={restaurant} 
         /></Link>  
        ))}
      </div>
    </div>
  );
};

export default Body;
