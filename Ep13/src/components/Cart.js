import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/createSlice";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems());
    }

    return(
        <div className="text-center m-4 p-4">
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="w-full max-w-4xl mx-auto">
          <button className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart} >
          Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h1>Cart is Empty. Add Items to the cart!</h1>
            )}
           <ItemList items={cartItems} />
          </div>
        </div>
        
    )
};
export default Cart;