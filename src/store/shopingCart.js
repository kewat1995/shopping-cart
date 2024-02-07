import { createSlice } from "@reduxjs/toolkit";

const shopinCart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeToCart: (state, action) => {
      // console.log(state, action);
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const cartAction = shopinCart.actions;
export default shopinCart;
