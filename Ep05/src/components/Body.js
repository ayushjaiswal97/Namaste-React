import RestaurantCard  from "./RestaurantCard";
import resList  from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
  // State variable to hold the list of restaurants
  // Local State variable - Super powerful variable
// const [listOfRestaurants, setListOfRestaurants] = useState(resList);
const arr = useState(resList);

const [listOfRestaurants, setListOfRestaurants] = arr;
 
return (
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
  )
}

export default Body;
