import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State variable - 
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //Whenever state variable update, react triggers a reconciliation cycle(re-renders the components),
  console.log("Body Renderd" ,listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.062017821881533&lng=72.54186391723825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return (
      <h1 className="text-2xl font-bold text-center text-red-500 mt-5">
        Looks like you're offline!! Please check your internet connection.
      </h1>
    )
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <div className="flex items-center">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 m-1"
              value={searchText}
              placeholder="Search restaurants..."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-r-lg hover:bg-green-600 transition-colors 
              duration-200"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurants);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button
          className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="transform hover:scale-105 transition-transform duration-200"
          >
             {/** if the restaurant is promoted then add a promoted label to it */}
             {
              restaurant.info.promoted ? (
               <RestaurantCardPromoted resData={restaurant}/> 
               ):(
               <RestaurantCard resData={restaurant} />
               )}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;