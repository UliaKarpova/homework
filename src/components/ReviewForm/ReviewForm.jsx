import { Counter } from "../Counter/Counter";
import { useForm } from "../useForm/useForm";
import styles from "./reviewForm.module.css";

export const ReviewForm = () => {
  const { formState, updateName, updateRating, updateReview, resetForm } =
    useForm();
  const { name, rating, review } = formState;

  const increase = () => {
    if (rating < 5) {
      updateRating(rating + 1);
    }
  };

  const decrease = () => {
    if (rating > 1) {
      updateRating(rating - 1);
    }
  };

  return (
    <div className={styles.block}>
      <h3 className={styles.title}>Добавить отзыв</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label}>
          Имя&emsp;
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={(e) => updateName(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Текст&emsp;
          <input
            className={styles.input}
            type="textarea"
            name="text"
            value={review}
            onChange={(e) => updateReview(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Рейтинг&emsp;
          <Counter
            increase={(e) => increase(e)}
            decrease={(e) => decrease(e)}
            value={rating}
          />
        </label>
        <button className={styles.button} type="reset" onClick={resetForm}>
          Очистить форму
        </button>
      </form>
    </div>
  );
};
