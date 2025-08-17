import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
    // console.log(items);
    return(
        <div className="menu-items-list">
            {items.map((item) => (
              <div key={item.card.info.id} 
              className="menu-item p-4 m-3 border-gray-200 border-b hover:shadow-lg flex justify-between">
                <div className="menu-item-details w-9/12">
                  <div className="py-2">
                    <h3 className="font-semibold text-lg">{item.card.info.name}</h3>
                    <span className="text-sm font-medium">
                    ₹
                    {item.card.info.price ?
                    item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.card.info.description}</p>
                </div>
                <div className="menu-item-image relative w-3/12">
                  <img src={CDN_URL + item.card.info.imageId} 
                       className="w-full h-24 object-cover rounded-lg"/>
                   <button className="absolute bottom-1 left-1/2 transform -translate-x-1/2 
                                   bg-white text-green-600 px-6 py-2 rounded-lg font-medium
                                   shadow-md hover:bg-green-50 cursor-pointer">
                    ADD+
                  </button>
                </div>
              </div>
              ))}
        </div>
    );
};
export default ItemList;
