import { createSlice } from "@reduxjs/toolkit";

const initialState={
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
}
const shopinCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find == -1) {
        const item = action.payload && {...action.payload, itemCount: 1}
        item && state.cart.push(item);
      } else {
       const cartItems = state.cart.map((value, index) => {
          if(index == find) {
            return {...value, itemCount: ++value.itemCount}
          }
          return value
        });
        state.cart = cartItems
        return state
      }
    },
    removeToCart: (state, action) => {
      const cartItems = state.cart.filter((item) => item.id !== action.payload);
      state.cart = cartItems
      return state;
    },
    manageCartItemCount: (state, action) => {
      const cartItems = state.cart.map((value, index) => {
        if(value.id == action.payload.id) {
          return {...value, itemCount: value.itemCount + action.payload.count}
        }
        return value
      });
      state.cart = cartItems
      return state;
    },
  },
});
export const cartAction = shopinCart.actions;
export default shopinCart;
