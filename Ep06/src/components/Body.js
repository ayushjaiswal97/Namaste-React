  import RestaurantCard  from "./RestaurantCard";
  import resList  from "../utils/mockData";
  import { useEffect, useState } from "react";
  import Shimmer from "./Shimmer";


  const Body = () =>{
  // local state variable - super powerful variable  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect (() =>{
    fetchData();
  }, []);
  
  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.062017821881533&lng=72.54186391723825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Conditional Rendering
  if (listOfRestaurants.length === 0){
    return <Shimmer/>;
  }

  return  (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter((res) => 
            res.info.avgRating > 4.5);
            setListOfRestaurants(filteredList);
          }
          }
          >
          Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
        {
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
        </div>
      </div>
    );
  };

  export default Body;
