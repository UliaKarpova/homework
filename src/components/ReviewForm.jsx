import { Counter } from "./Counter";
import { useForm } from "./useForm";
export const ReviewForm = () => {
  const { formState, updateName, updateRating, updateReview, resetForm } =
    useForm();
  const { name, rating, review } = formState;

  const increase = (e) => {
    e.preventDefault();
    if (rating < 5) {
      updateRating(rating + 1);
    }
  };

  const decrease = (e) => {
    e.preventDefault();
    if (rating > 1) {
      updateRating(rating - 1);
    }
  };

  return (
    <form>
      <label style={{ display: "block" }}>
        Имя&emsp;
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
      </label>
      <label style={{ display: "block", marginTop: "25px" }}>
        Текст&emsp;
        <input
          type="textarea"
          name="text"
          value={review}
          onChange={(e) => updateReview(e.target.value)}
        />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "25px",
        }}
      >
        Рейтинг&emsp;
        <Counter
          increase={(e) => increase(e)}
          decrease={(e) => decrease(e)}
          value={rating}
        />
      </label>
      <button style={{ marginTop: "25px" }} type="reset" onClick={resetForm}>
        Очистить форму
      </button>
    </form>
  );
};
