import { configureStore } from "@reduxjs/toolkit";
import shopinCart from "./shoppingCart";
export const store = configureStore({
  reducer: {
    cart: shopinCart.reducer,
  },
});
