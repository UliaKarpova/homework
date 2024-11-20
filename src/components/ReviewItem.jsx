export const ReviewItem = ({ reviewItem }) => {
    return (
      <blockquote>
        <h4>Рейтинг {reviewItem.rating}</h4>
        <p>{reviewItem.text}</p>
        <cite>{reviewItem.user}</cite>
      </blockquote>
    );
} 