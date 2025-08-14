import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {resData} = props;   

  const {
    cloudinaryImageId,
    name, 
    cuisines,
    avgRating,
    costForTwo,
    sla
  } = resData?.info;       

  return (
    <div className="m-4 p-4 w-[280px] rounded-2xl bg-gray-100 hover:bg-gray-200 shadow-xl transition duration-300 ease-in-out">
      <img 
        className="rounded-xl w-full h-[180px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="mt-4">
        <h3 className="font-bold text-xl text-gray-800 truncate">{name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="flex items-center gap-1">
            <span className={`px-2 py-1 rounded-lg ${avgRating >= 4 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
              ⭐ {avgRating}
            </span>
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-600">{sla?.slaString}</span>
        </div>
        <p className="text-gray-600 mt-2 font-medium">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
