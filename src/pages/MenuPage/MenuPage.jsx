import { useParams } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu";
import { useGetMenuByRestaurantIdQuery } from "../../redux/services/api";

export const MenuPage = () => {
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
