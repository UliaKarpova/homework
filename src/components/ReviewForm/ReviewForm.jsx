import { Counter } from "../Counter/Counter";
import { useForm } from "../useForm/useForm";
import { Button } from "../Button/Button";
import ColoredText from "../ColoredText/ColoredText";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import styles from "./reviewForm.module.css";

export const ReviewForm = ({ onSubmit }) => {
  const { user } = useContext(AuthContext)
  const { formState, updateRating, updateText, resetForm } =
    useForm();

  const { rating, text } = formState;

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
      <ColoredText text={"Добавить отзыв"} extraClass={styles.title} />
      <form onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label}>
          Текст&emsp;
          <input
            className={styles.input}
            type="textarea"
            name="text"
            value={text}
            onChange={(e) => updateText(e.target.value)}
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
        <Button
          text={"Очистить форму"}
          extraClass={styles.button}
          onClick={resetForm}
        />
        <Button
          text={"Добавить отзыв"}
          extraClass={styles.button}
          onClick={() => onSubmit({ text, rating, userId: user.id })}
        />
      </form>
    </div>
  );
};
