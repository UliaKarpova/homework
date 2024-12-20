"use client"
import { useParams } from 'next/navigation'
import Menu from "../../../../../components/Menu/Menu";
import { useGetMenuByRestaurantIdQuery } from "../../../../../redux/services/api";

export default function MenuPage() {
  const { restaurantId } = useParams();
  const { data, isLoading, isError } = useGetMenuByRestaurantIdQuery(restaurantId)

  if (isLoading) {
    return 'Loading...'
  }

  if (!data || !data.length || isError) {
    return null
  }
  return <Menu menu={data} />;
};
