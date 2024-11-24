import { DishCounter } from "../DishCounter/DishCounter";
import styles from "./menuItem.module.css";

export const MenuItem = ({ menuItem }) => {
  return (
    <div className={styles.dishItem}>
      <h4 className={styles.dishTitle}>{menuItem.name}</h4>
      <p>
        &#9658; {menuItem.ingredients.join(", ")}
      </p>
      <p className={styles.price}>
        Price:<b> {menuItem.price}</b> &#8381;
      </p>
      <DishCounter />
    </div>
  );
};
