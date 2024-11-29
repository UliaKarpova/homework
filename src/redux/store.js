import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./restaurants-slice";
export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
  },
});
