import { RestaurantItem } from "../components/RestaurantItem/RestaurantItem";
import { Restaurants } from "../components/Restaurants/Restaurants";
import { Menu } from "../components/Menu/Menu";
import { HomePage } from "../components/HomePage/HomePage";
import { Reviews } from "../components/Reviews/Reviews";
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
    // path: "/restaurants/:restaurantId",
    element: <RestaurantItem />,
    errorElement: <Navigate to="/restaurants" />,
    children: [
      {
        path: ":restaurantId/menu",
        render: (props) => <Menu {...props} />,
        element: <Menu />,
        errorElement: <Navigate to="/restaurants" />,
      },
      {
        path: ":restaurantId/reviews",
        element: <Reviews />,
        errorElement: <Navigate to="/restaurants" />,
      },
    ]
  },

  {
    path: "/dish/:dishId",
    element: <DishPage />,
    errorElement: <Navigate to="/restaurants" />,
  },
]);
