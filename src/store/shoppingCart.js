
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  totalQuantity: 0,
  totalPrice: 0,
};
const shopinCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);

      if (find == -1) {
        const item = action.payload && { ...action.payload, quantity: 1 };
        item && state.cart.push(item);
      } else {
        const cardItem = state.cart.map((value, index) => {
          if (index == find) {
            return { ...value, quantity: ++value.quantity };
          }
          return value;
        });

        state.cart = cardItem;
        return state;
      }
    },
    removeToCart: (state, action) => {
      const cardItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = cardItem;
      return state;
    },
    manageCartQuantity: (state, action) => {
      const cardItem = state.cart.map((value) => {
        if (value.id == action.payload.id) {
          return { ...value, quantity: value.quantity + action.payload.count };
        }
        return value;
      });
      state.cart = cardItem;
      return state;
    },
    
  },
});
export const cartAction = shopinCart.actions;
export default shopinCart;
