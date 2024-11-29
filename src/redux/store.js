import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./slices/restaurants-slice";
import { dishSlice } from "./slices/dish-slice";
import { reviewSlice } from "./slices/review-slice";
import {userSlice} from './slices/user-slice'

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer
  },
});
