import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItems } from "../utils/createSlice";

const ItemList = ({ items }) => {
    
  const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an Action
        dispatch(addItems(item));
    };  
    
    return(
        <div
         className="grid gap-4 p-4">
            {items.map((item) => (
              <div data-testid="foodItems"
              key={item.card.info.id} 
              className="flex justify-between p-6 m-4 border-b border-gray-200 rounded-lg transition-shadow duration-300 hover:shadow-lg">
                <div className="flex-1 pr-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.card.info.name}</h3>
                    <span className="text-base font-medium text-gray-700">
                    ₹
                    {item.card.info.price ?
                    item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.card.info.description}</p>
                </div>
                <div className="w-32 relative">
                  <img src={CDN_URL + item.card.info.imageId} 
                       className="w-full h-28 object-cover rounded-lg shadow-sm"
                       alt={item.card.info.name}/>
                   <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white
                  text-green-600 px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all
                   duration-300 hover:bg-green-50 hover:scale-105 focus:outline-none 
                   focus:ring-2 focus:ring-green-500"
                    onClick={() =>handleAddItem(item)}>
                    ADD+
                    </button> 
                 </div>
              </div>
              ))}
        </div>
    );
};
export default ItemList;
