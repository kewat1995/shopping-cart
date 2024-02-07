import { configureStore } from "@reduxjs/toolkit";
import shopinCart from "./shopingCart";
export const store = configureStore({
  reducer: {
    cart: shopinCart.reducer,
  },
});
