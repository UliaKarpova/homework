import { RestaurantItem } from "../components/RestaurantItem/RestaurantItem";
import { Restaurants } from "../components/Restaurants/Restaurants";
import { MenuContainer } from "../components/Menu/MenuContainer";
import { HomePage } from "../components/HomePage/HomePage";
import { ReviewsContainer } from "../components/Reviews/ReviewsContainer";
import { DishPage } from "../components/DishPage/DishPage";
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
    element: (
      <>
        <RestaurantItem />
        <Navigate to="menu" replace={true} />
      </>
    ),
    children: [
      {
        path: "menu",
        element: <MenuContainer />,
      },
      {
        path: "reviews",
        element: <ReviewsContainer />,
      },
    ],
  },
  {
    path: "/dish/:dishId",
    element: <DishPage />,
    errorElement: <Navigate to="/restaurants" />,
  },
]);
