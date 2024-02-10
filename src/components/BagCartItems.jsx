/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/shopingCart";

const BagCartItems = ({ item }) => {
  const dispatch = useDispatch();
  

  const handelRemoveFromCart = () => {
    dispatch(cartAction.removeToCart(item.id));
  };
  
  return (
    <>
      <div className="max-w-6xl mx-auto    p-4 rounded-xl border-3 mt-3  ">
        <div className="flex  gap-10 max-[600px]:flex-col max-[600px]:items-center max-[600px]:w-full">
          <div>
            <img
              src={item?.image}
              alt={item?.title}
              className="w-28 rounded-xl"
            />
          </div>

          <div>
            <h1 className="font-bold trancate mb-2 text-xl">{item?.title}</h1>
            <p className="font-bold text-blue-500 text-md">${item?.price}</p>
            <button
              className="px-3 py-1 rounded-xl mt-2 bg-red-500 text-white hover:bg-red-700"
              onClick={handelRemoveFromCart}>
              Remove
            </button>
            
          </div>
          
        </div>
        <div className="counter">
            <button className="inc-btn">+</button>
            <p>{item.rating.count}</p>
            <button className="inc-btn">-</button>
            </div>
      </div>
    </>
  );
};

export default BagCartItems;
