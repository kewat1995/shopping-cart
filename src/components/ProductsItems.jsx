/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { cartAction } from "../store/shopingCart";
const ProductsItems = ({ items }) => {
  
  const dispatch = useDispatch();
  const handelAddToCart = () => {
    dispatch(cartAction.addToCart(items));
  };

  

  return (
    <div>
      <div className=" group flex flex-col items-center justify-between border-2 p-5 h-[360px] rounded-xl gap-3 mt-10 ml-5 border-red-950">
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
        
        </div>
      </div>
    </div>
  );
};

export default ProductsItems;
