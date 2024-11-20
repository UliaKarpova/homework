import { ReviewItem } from "./ReviewItem"
import { ReviewForm } from "./ReviewForm";
export const Reviews = ({ reviews }) => {
    return (
      <>
        <h3>Отзывы</h3>
        <ul>
          {reviews.map((reviewItem, index) => {
            return (
              <li key={index}>
                <ReviewItem reviewItem={reviewItem} />
              </li>
            );
          })}
        </ul>
        <ReviewForm />
      </>
    );
}
