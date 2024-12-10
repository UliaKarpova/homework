import { RestaurantItemPage } from "../pages/RestaurantItemPage/RestaurantItemPage";
import { Restaurants } from "../components/Restaurants/Restaurants";
import { MenuPage } from "../pages/MenuPage/MenuPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { ReviewsPage } from "../pages/ReviewsPage/ReviewsPage";
import { DishPage } from "../pages/DishPage/DishPage";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage title="HomePage" />,
  },
  {
    path: "/restaurants",
    element: <Restaurants />,
    errorElement: <Navigate to="/" />,
  },
  {
    path: "/restaurants/:restaurantId",
    element: <RestaurantItemPage />,
    errorElement: <Navigate to="/restaurants" />,
    children: [
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "reviews",
        element: <ReviewsPage />,
      },
    ],
  },
  {
    path: "/dish/:dishId",
    element: <DishPage />,
    errorElement: <Navigate to="/restaurants" />,
  },
]);
