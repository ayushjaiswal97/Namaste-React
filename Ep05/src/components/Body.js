import RestaurantCard  from "./RestaurantCard";
import resList  from "../utils/mockData";

const Body = () =>{

 

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={() => {
         console.log("Button Clicked");
        }}
        >
        Filter
        </button>
      </div>
      <div className="res-container">
      {
        resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
      }
      </div>
    </div>
  )
}

export default Body;
