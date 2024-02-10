import { createSlice } from "@reduxjs/toolkit";

const initialState={
  cart: [],
  quantity:0,
  totalQuantity: 0,
  totalPrice: 0,
}
const shopinCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].rating.count +=1 ;
      } else {
        state.cart.push(action.payload);
      }
     
  
    },
    removeToCart: (state, action) => {
      
      return state.filter((item) => item.id !== action.payload);
    },
   
     
      
     
    
  },
});
export const cartAction = shopinCart.actions;
export default shopinCart;
