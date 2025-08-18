import RestaurantCategory from "../RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from 'react';

const RestaurantMenu = () => {
    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => 
            c?.card?.["card"]?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const toggleCategory = (index) => {
        if(index === showIndex) {
            setShowIndex(null); // collapse if clicked category is already expanded
        } else {
            setShowIndex(index); // expand clicked category
        }
    };

    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => (
                <RestaurantCategory 
                    key={category?.card?.card.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => toggleCategory(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
