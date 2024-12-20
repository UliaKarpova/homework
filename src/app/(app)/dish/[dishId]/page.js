"use client"
import { useContext } from "react";
import { useParams } from "next/navigation";
import { AuthContext } from "../../../../components/AuthContext/AuthContext";
import { Dish } from '../../../../components/Dish/Dish'
import { DishCounter } from "../../../../components/DishCounter/DishCounter";
import { useGetDishByIdQuery } from "../../../../redux/services/api";

export default function DishPage() {
  const { dishId } = useParams();
  const { isAuth } = useContext(AuthContext);
  const { data, isLoading, isError } = useGetDishByIdQuery(dishId)

  if (isLoading) {
    return 'Loading...'
  }

  if (!data || !data?.name || isError) {
    return null
  }
  return (
    <Dish name={data.name} ingredients={data.ingredients} price={data.price}>
      {isAuth && <DishCounter id={dishId} />}
    </Dish>
  );
};
