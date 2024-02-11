/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/shoppingCart";

const BagCartItems = ({ item }) => {
  const dispatch = useDispatch();

  
  const handelRemoveFromCart = () => {
    dispatch(cartAction.removeToCart(item.id));
  };
  
  const handelCartQuantity =(count)=>{
if (item.quantity == 1 && count == -1) {
  handelRemoveFromCart()
}
    dispatch(cartAction.manageCartQuantity({id:item.id,count}));
  }
  return (
    <>
      <div className="max-w-6xl mx-auto    p-4 rounded-xl border-3 mt-3  ">
        <div className="flex  gap-10 max-[600px]:flex-col max-[600px]:items-center max-[600px]:w-full">
          <div className="w-[30%]">
            <img
              src={item?.image}
              alt={item?.title}
              className="w-28 rounded-xl"
            />
          </div>

          <div className="w-[70%]">
            <h1 className="font-bold trancate mb-2 text-md">{item?.title}</h1>
            <p className="font-bold text-blue-500 text-md">${item?.price}</p>
            <div className="flex items-center ">
              <button
                className="px-3 py-1 rounded-xl mt-2 bg-red-500 text-white hover:bg-red-700"
                onClick={handelRemoveFromCart}>
                Remove
              </button>

              <div className="flex mt-2 ml-2">
                <button
                  className="inc-btn"
                  onClick={() => handelCartQuantity(1)}>
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="inc-btn"
                  onClick={() => handelCartQuantity(-1)}>
                  -
                </button>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
    </>
  );
};

export default BagCartItems;
