import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { Reviews } from "../../components/Reviews/Reviews";
import {
  useGetRewiewsByRestaurantIdQuery,
  useGetUsersQuery,
  useAddReviewMutation
} from "../../redux/services/api";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const { data, isFetching: isGetRewiewsFetching, isError } = useGetRewiewsByRestaurantIdQuery(restaurantId)
  const { data: users, isLoading: isUserLoading, isError: isUserError } = useGetUsersQuery()
  const [addReview, { isLoading: isAddRewiewLoading }] = useAddReviewMutation()

  const handleAddReview = useCallback((review) => {
    addReview({ restaurantId, review })
  }, [restaurantId, addReview])

  if (isGetRewiewsFetching || isAddRewiewLoading || isUserLoading) {
    return 'Loading...'
  }

  if (data?.lenght === 0 || users?.lenght === 0 || isError || isUserError) {
    return null;
  }
  return <Reviews reviews={data} onAddReview={handleAddReview} />;
};
