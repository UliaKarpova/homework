import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurants/restaurants-slice";
import { dishSlice } from "./entities/restaurants/dish-slice";
import { reviewSlice } from "./entities/restaurants/review-slice";
import { userSlice } from "./entities/restaurants/user-slice";
import { cartSlice } from "./ui/cart/cart-slice";
import { requestSlice } from "./ui/request/request-slice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer
  },
  // middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat()
});
