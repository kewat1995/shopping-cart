/* eslint-disable react/prop-types */
import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {cartAction} from "../store/shoppingCart"
const ProductsItems = ({ items }) => {
  const cardItems = useSelector(state=>state.cart.cart);
  
 const counting =  cardItems.find(value =>value.id == items.id)?.quantity || 0
 
  const dispatch = useDispatch();
  const handelAddToCart = () => {
    dispatch(cartAction.addToCart(items));
  };

  

  return (
    <div>
      <div className=" group flex flex-col items-center justify-between border-2 p-4 h-[380px] rounded-xl gap-2 mt-10 ml-5 border-red-950">
        <div className="min-h-[180px] ">
          <img
            src={items?.image}
            alt={items?.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-lg font-bold w-40 truncate mt-3 text-gray-700">
            {items?.title}
          </h1>
          <p className="font-bold">price: ${items.price}</p>
        </div>
        <div className="max-w-40 ">
         
            {/* <button
              onClick={handelRemoveToCart}
              className="  px-4 py-2 border-2 rounded-lg bg-red-900 text-white font-bold"
            >
              Remove
            </button> */}
          
            <button
              onClick={handelAddToCart}
              className="  px-4 py-2 border-2 rounded-lg bg-green-900 text-white font-bold"
            >
              Add Cart
            </button>
          { counting ? <span className="translate-middle badge rounded-pill bg-danger">
                  {counting }
                </span> :null}
        
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
