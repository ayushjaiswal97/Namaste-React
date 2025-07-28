import React from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
    // Local State Variable - Super Powefull Variable 
    const [listOfRestaurants, setListOfRestaurants] = useState([
        {
        data: {
            id: "1",
            name: "Restaurant A",
            imageId: "bdcd233971b7c81bf77e1fa4471280eb",
            cuisines: ["Indian", "Chinese"],
            costForTwo: 50000,
            deliveryTime: 30,
            avgRating: 3.8,
        }
    },
     {
        data: {
            id: "2",
            name: "Restaurant B",
            cuisines: ["Italian", "Mexican"],
            costForTwo: 60000,
            deliveryTime: 25,
            imageId: "bdcd233971b7c81bf77e1fa4471280eb",
            avgRating: 4.2,
        }
    },
     {
        data: {
            id: "3",
            name: "Restaurant C",
            cuisines: ["American", "French"],
            costForTwo: 70000,
            deliveryTime: 20,
            imageId: "bdcd233971b7c81bf77e1fa4471280eb",
            avgRating: 4.8,
        }
    }
]);
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    // Filter logic here
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4.0
                    );
                    setListOfRestaurants(filteredList);
                }}>
                Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {
                listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;