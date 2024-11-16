import { ReviewItem } from "./ReviewItem"

export const Reviews = ({ reviews }) => {
    return (
        <>
            <h3>Отзывы</h3>
            <ul>
                {reviews.map((reviewItem, index) => {
                    return <ReviewItem reviewItem={reviewItem} key={index} />
                })}
            </ul>
        </>

    )
}
